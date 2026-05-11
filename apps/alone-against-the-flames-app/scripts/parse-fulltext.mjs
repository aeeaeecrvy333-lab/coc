#!/usr/bin/env node
// Parse module-alone-against-the-flames-fulltext.md into a structured JSON map.
// Strategy: extract what's recognizable (jumps, images, endings, basic check/delta hints).
// Anything not auto-recognized stays in `text` for the renderer to show as-is.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SOURCE = resolve(here, "../../../knowledge-base/wiki/entities/module-alone-against-the-flames-fulltext.md");
const OUT_JSON = resolve(here, "../js/data/parsed-entries.json");

const raw = readFileSync(SOURCE, "utf8");

// Split file into header section + per-entry sections. Entries are H2 headings
// matching `## 条目 N`.
const sections = raw.split(/^## (?=条目 )/m);

const entries = {};
const issues = [];

for (let i = 1; i < sections.length; i += 1) {
  const block = sections[i];
  const headerMatch = block.match(/^条目 (\d+)\s*\n/);
  if (!headerMatch) {
    issues.push({ kind: "missing-header", preview: block.slice(0, 60) });
    continue;
  }
  const num = Number(headerMatch[1]);
  const id = `entry-${num}`;
  const body = block.slice(headerMatch[0].length);

  if (entries[id]) {
    issues.push({ kind: "duplicate-id", id });
  }
  entries[id] = parseEntry(num, body);
}

function parseEntry(num, body) {
  const id = `entry-${num}`;

  // Pull out images: ![[…/entry-N-name.png]]. Drop the marker entirely from
  // the text — the renderer will place images structurally rather than inline.
  const images = [];
  let cleaned = body.replace(/!\[\[(?:[^\]]+?)\/([^/\]]+\.png)\]\]/g, (_, fileName) => {
    images.push(fileName);
    return "";
  });

  // Pull out jumps: [[…#条目 M|alias]]. Walk the string in order so we can
  // attach a narrative label drawn from the prose preceding the jump.
  const jumps = [];
  const jumpRe = /\[\[[^\]]*#条目 (\d+)(?:\|([^\]]+))?\]\]/g;
  const rebuilt = [];
  let lastIndex = 0;
  for (const m of cleaned.matchAll(jumpRe)) {
    const before = cleaned.slice(lastIndex, m.index);
    rebuilt.push(before);
    const targetNum = Number(m[1]);
    const narrativeLabel = extractNarrativeLabel(cleaned, m.index, lastIndex);
    jumps.push({
      target: `entry-${targetNum}`,
      label: narrativeLabel || String(targetNum)
    });
    rebuilt.push(`[条目 ${targetNum}]`);
    lastIndex = m.index + m[0].length;
  }
  rebuilt.push(cleaned.slice(lastIndex));
  cleaned = rebuilt.join("");

  const isEnding = /【剧终】/.test(cleaned);

  // Pull translator notes out of body.
  const translatorNotes = [];
  cleaned = cleaned.replace(/（译注：([^）]+)）/g, (_, note) => {
    translatorNotes.push(note.trim());
    return "";
  });

  // Heuristic effect / check detection. Recognized patterns become `directives`
  // for human review — we never silently apply them.
  const directives = [];

  for (const m of cleaned.matchAll(/(?:进行一次)?(?:困难|极难)?[「"“]([^」"”]+)[」"”](?:技能)?(?:检定|的检定)/g)) {
    directives.push({ kind: "check-mention", skill: m[1], snippet: snippetAround(cleaned, m.index, 50) });
  }
  if (/困难[^。]{0,12}检定/.test(cleaned)) directives.push({ kind: "check-hard" });
  if (/极难[^。]{0,12}检定/.test(cleaned)) directives.push({ kind: "check-extreme" });
  if (/奖励骰/.test(cleaned)) {
    const isConsequence = /如果你(?:失败|成功)了[^。]*奖励骰/.test(cleaned);
    directives.push({ kind: "bonus-die", ...(isConsequence && { context: "consequence" }) });
  }
  if (/惩罚骰/.test(cleaned)) {
    const isConsequence = /如果你(?:失败|成功)了[^。]*惩罚骰/.test(cleaned);
    directives.push({ kind: "penalty-die", ...(isConsequence && { context: "consequence" }) });
  }

  const deltaPatterns = [
    { kind: "adjustHp", regex: /回复\s*(\d+|1D\d+(?:\+\d+)?)\s*点(?:耐久值|HP)/g, sign: +1 },
    { kind: "adjustHp", regex: /(?:受到|损失|失去)\s*(\d+|\dD\d+(?:\+\d+)?)\s*点(?:耐久值|HP)/g, sign: -1 },
    { kind: "adjustSan", regex: /(?:失去|损失)\s*(\d+|\dD\d+(?:\+\d+)?)\s*点(?:理智值|SAN|San)/g, sign: -1 },
    { kind: "adjustSan", regex: /回复\s*(\d+|1D\d+(?:\+\d+)?)\s*点(?:理智值|SAN|San)/g, sign: +1 },
    { kind: "adjustMp", regex: /(?:消耗|失去|损失)\s*(\d+|\dD\d+(?:\+\d+)?)\s*点(?:魔法值|MP)/g, sign: -1 },
    { kind: "adjustMp", regex: /回复\s*(\d+|1D\d+(?:\+\d+)?)\s*点(?:魔法值|MP)/g, sign: +1 },
    { kind: "adjustLuck", regex: /(?:失去|损失)\s*(\d+|\dD\d+(?:\+\d+)?)\s*点(?:幸运值|幸运|Luck)/g, sign: -1 }
  ];
  for (const { kind, regex, sign } of deltaPatterns) {
    for (const m of cleaned.matchAll(regex)) {
      directives.push({
        kind,
        amount: m[1],
        sign,
        snippet: snippetAround(cleaned, m.index, 40)
      });
    }
  }

  for (const m of cleaned.matchAll(/[「"]([^」"]+)[」"]\s*技能左边的小方框(?:里)?打勾/g)) {
    directives.push({ kind: "tickSkill", skill: m[1] });
  }
  for (const m of cleaned.matchAll(/在自己「([^」]+)」技能左边/g)) {
    directives.push({ kind: "tickSkill", skill: m[1] });
  }

  const text = cleaned
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    // Collapse intra-paragraph hard wraps (PDF artifacts) into nothing while
    // preserving blank-line paragraph separators.
    .split(/\n{2,}/)
    .map((para) => para.replace(/\s*\n\s*/g, ""))
    .join("\n\n");

  return {
    id,
    num,
    text,
    jumps,
    image: images[0] || null,
    images: images.length > 1 ? images : undefined,
    isEnding,
    translatorNotes: translatorNotes.length ? translatorNotes : undefined,
    directives: directives.length ? directives : undefined
  };
}

function snippetAround(text, index, span) {
  const start = Math.max(0, index - 8);
  const end = Math.min(text.length, index + span);
  return text.slice(start, end).replace(/\s+/g, " ").trim();
}

// Extract a narrative button label from the prose preceding a jump link.
// AAtF uses many phrasings; rather than enumerate them, we walk back from the
// jump position and find the nearest "action clause" — the sub-sentence that
// describes what THIS specific choice does. Strategy:
//   1. Build a window of recent prose (since last jump or last sentence).
//   2. Strip a trailing "前往" + connectors (前往/，前往/：前往).
//   3. Strip leading dash/bullet decorations and known intro words ("如果", "要",
//      "如果你", "要尝试").
//   4. If the resulting clause is a clean short phrase, return it; otherwise
//      hand back null and let the caller fall back to the entry number.
function extractNarrativeLabel(text, jumpIndex, sliceStart) {
  const window = text.slice(sliceStart, jumpIndex);
  // Collapse PDF-injected line wraps inside the lookback window. The fulltext
  // came from a PDF where Chinese sentences are hard-wrapped mid-word — e.g.
  // "如\n果" or "前\n往". Splitting on \n later would lose the leading char,
  // so flatten newlines into nothing here. Sentence breaks (。！？) still split.
  const flat = window.replace(/\n+/g, "");
  const lookback = flat.length > 240 ? flat.slice(-240) : flat;

  // The clause is whatever sits between the previous sentence break and the jump.
  const segments = lookback.split(/[。！？]/);
  let clause = segments[segments.length - 1] || "";
  clause = clause.replace(/\s+/g, "").trim();
  if (!clause) return null;

  // Drop the trailing "前往" connector and any preceding punctuation so we are
  // left with just the action description.
  clause = clause.replace(/[，：:,;；]?\s*前往$/, "");
  // Some clauses end with the colon-style form "——X：前往" handled above; some
  // end with literally "前往" with no separator (just "X前往"); also strip that.
  clause = clause.replace(/前往$/, "");
  clause = clause.trim();

  // If the clause spans a menu-introducing phrase like "现在你可以：——X" or
  // "从以下选项中选择…：如果X", drop everything up to and including the
  // colon/dash that introduces this specific menu item.
  const menuIntro = clause.match(/[：:]\s*[—–\-]{1,2}\s*(.+)$/);
  if (menuIntro) clause = menuIntro[1];
  else {
    const colonIntro = clause.match(/[：:]\s*(.+)$/);
    if (colonIntro && colonIntro[1].length <= 30) clause = colonIntro[1];
  }

  // Trim leading decorations: dashes, bullets, leading commas, parenthesis fragments.
  clause = clause.replace(/^[—–\-]+/, "");
  clause = clause.replace(/^[，,]+/, "");
  clause = clause.replace(/^（[^）]*）/, "");
  clause = clause.replace(/^[）)]+/, "");
  clause = clause.replace(/^[""'']+/, "");
  clause = clause.trim();

  if (!clause) return null;

  // Normalize known canonical phrasings.
  if (/^如果你成功了$/.test(clause)) return "成功时";
  if (/^如果你失败了$/.test(clause)) return "失败时";
  if (/^否则$/.test(clause)) return "失败时";
  if (/^成功$/.test(clause)) return "成功时";
  if (/^失败$/.test(clause)) return "失败时";

  // Trim leading filler words that don't carry meaning in a button.
  clause = clause.replace(/^(?:要尝试|要|如果你想|如果想|如果你要|你要|你想|你尝试|你可以选择|你可以)/, "");
  clause = clause.replace(/^[，,]+/, "");
  clause = clause.trim();

  // "如果你成功了，前往" → after stripping yields "如果你成功了"; same for fail.
  if (/^如果你成功了$/.test(clause)) return "成功时";
  if (/^如果你失败了$/.test(clause)) return "失败时";

  // Filter out obvious garbage / overly-long clauses.
  if (!clause || clause.length > 30) return null;

  // Drop trailing connectors / commas left over.
  clause = clause.replace(/[，：:,;；]+$/, "").trim();
  if (!clause) return null;

  return clause;
}

const report = {
  parsedCount: Object.keys(entries).length,
  highestNum: Math.max(...Object.values(entries).map((e) => e.num)),
  lowestNum: Math.min(...Object.values(entries).map((e) => e.num)),
  endingCount: Object.values(entries).filter((e) => e.isEnding).length,
  withImage: Object.values(entries).filter((e) => e.image).length,
  withDirectives: Object.values(entries).filter((e) => e.directives).length,
  totalJumps: Object.values(entries).reduce((s, e) => s + e.jumps.length, 0),
  unresolvedJumpTargets: [],
  missingNumbers: [],
  issues
};

for (let n = 1; n <= report.highestNum; n += 1) {
  if (!entries[`entry-${n}`]) report.missingNumbers.push(n);
}
for (const e of Object.values(entries)) {
  for (const j of e.jumps) {
    if (!entries[j.target]) report.unresolvedJumpTargets.push({ from: e.id, to: j.target });
  }
}

writeFileSync(OUT_JSON, JSON.stringify({ report, entries }, null, 2), "utf8");

console.log("Parsed:", report.parsedCount, "entries");
console.log("Highest entry:", report.highestNum);
console.log("Missing numbers:", report.missingNumbers.length ? report.missingNumbers : "none");
console.log("Endings flagged:", report.endingCount);
console.log("Entries with image:", report.withImage);
console.log("Entries with directives:", report.withDirectives);
console.log("Total jumps:", report.totalJumps);
console.log("Unresolved jump targets:", report.unresolvedJumpTargets.length);
if (report.unresolvedJumpTargets.length) {
  console.log("  sample:", report.unresolvedJumpTargets.slice(0, 5));
}
console.log("Issues:", report.issues.length ? report.issues : "none");
console.log("Output:", OUT_JSON);
