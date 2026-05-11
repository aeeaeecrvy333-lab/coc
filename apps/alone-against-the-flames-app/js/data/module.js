// AAtF module data — generated from parsed-entries.json (the canonical wiki
// fulltext extraction). To regenerate the JSON, run
//   node scripts/parse-fulltext.mjs
// from the app root. This file is the thin adapter that maps each parsed entry
// into the shape `module-engine.js` expects: nodes keyed by id, each with
// `actions[]` whose `next` points at another node id.

import parsed from "./parsed-entries.json" with { type: "json" };

const CHAPTERS = [
  { id: "chapter-1", label: "第一幕 · 抵达", description: "长途车与初到烬头村。", range: [1, 30], anchorNodeId: "entry-1" },
  { id: "chapter-2", label: "第二幕 · 白昼调查", description: "村庄、文特斯、村会堂与图书。", range: [31, 100], anchorNodeId: "entry-31" },
  { id: "chapter-3", label: "第三幕 · 入夜", description: "夜谈、夜潜与节日前夕。", range: [101, 200], anchorNodeId: "entry-154" },
  { id: "chapter-4", label: "第四幕 · 火焰之夜", description: "灯塔、仪式与结局。", range: [201, 270], anchorNodeId: "entry-190" }
];

function toAction(jump, fromId, index) {
  const isNumeric = /^\d+$/.test(jump.label || "");
  const action = {
    id: `${fromId}-choice-${index}`,
    label: isNumeric ? "继续 →" : jump.label,
    description: "",
    next: jump.target,
    effects: [],
    check: null
  };
  const label = jump.label || "";
  if (classifyOutcome(label) === "success") {
    action.check = { outcome: "success" };
  } else if (classifyOutcome(label) === "failure") {
    action.check = { outcome: "failure" };
  } else if (classifyOutcome(label) === "fumble") {
    action.check = { outcome: "fumble" };
  }
  return action;
}

function classifyOutcome(label) {
  if (/^成功时$/.test(label)) return "success";
  if (/^如果你(?:成功|通过)了/.test(label)) return "success";
  if (/^如果你在.*(?:检定成功|胜出)/.test(label)) return "success";
  if (/^如果你在.*获得.*成功/.test(label)) return "success";

  if (/^失败时$/.test(label)) return "failure";
  if (/^如果你(?:失败|没有通过)了/.test(label)) return "failure";
  if (/^如果你(?:没有通过)/.test(label)) return "failure";
  if (/^如果你在.*落败/.test(label)) return "failure";
  if (/^如果你的检定失败/.test(label)) return "failure";
  if (/^否则/.test(label)) return "failure";
  if (/^如果你的孤注一掷失败/.test(label)) return "failure";

  if (/大失败/.test(label)) return "fumble";

  return null;
}

function toNode(entry) {
  const directives = entry.directives || [];
  const actions = entry.jumps.map((jump, idx) => toAction(jump, entry.id, idx));
  const imageFile = entry.image || (entry.num === 1 ? "opening-full-page.png" : null);

  const hasCheckDirective = directives.some(d => d.kind === "check-mention");

  if (!hasCheckDirective) {
    actions.forEach(a => { a.check = null; });
  }

  const hasFumble = actions.some(a => a.check?.outcome === "fumble");
  const hasSuccess = actions.some(a => a.check?.outcome === "success");
  if (hasFumble && !hasSuccess) {
    actions.forEach(a => {
      if (a.check?.outcome === "failure") a.check.outcome = "non_fumble";
    });
  }

  const node = {
    id: entry.id,
    code: `条目 ${entry.num}`,
    title: `条目 ${entry.num}`,
    sliceId: getChapterIdForNum(entry.num),
    sceneMeta: "",
    text: entry.text,
    image: imageFile ? `assets/figures/${imageFile}` : null,
    directives,
    translatorNotes: entry.translatorNotes || [],
    actions,
    checkHints: directivesToCheckHints(directives),
    onEnterEffects: [
      ...directivesToEffects(directives, false),
      ...(ENTRY_SCRIPTS[entry.id] || []).filter(e => !e.checkGated)
    ],
    checkFailEffects: [
      ...directivesToEffects(directives, true),
      ...(ENTRY_SCRIPTS[entry.id] || []).filter(e => e.checkGated)
    ],
    thresholdGate: THRESHOLD_GATES[entry.id] || null
  };
  if (entry.isEnding) {
    node.endingId = `ending-${entry.num}`;
  }
  return node;
}

function directivesToEffects(directives, checkGatedOnly) {
  const hasCheck = directives.some(d => d.kind === "check-mention");
  const effects = [];
  for (const d of directives) {
    switch (d.kind) {
      case "adjustHp":
      case "adjustSan":
      case "adjustMp":
      case "adjustLuck": {
        const isGated = hasCheck;
        if (isGated !== checkGatedOnly) break;
        const isFixed = /^\d+$/.test(d.amount);
        if (isFixed) {
          effects.push({ type: d.kind, value: Number(d.amount) * (d.sign || 1) });
        } else {
          effects.push({ type: d.kind, diceExpr: d.amount, sign: d.sign || -1 });
        }
        break;
      }
      case "tickSkill":
        if (checkGatedOnly) break;
        effects.push({ type: "tickSkill", skill: d.skill });
        break;
    }
  }
  return effects;
}

// Threshold gates: after onEnterEffects apply damage, the engine compares
// the absolute damage dealt to maxHP/2 and only shows the matching action.
// actionIndexIfMet = index of action to show when damage >= threshold
// actionIndexIfNot = index of action to show when damage < threshold
const THRESHOLD_GATES = {
  "entry-55": { stat: "hp", compare: ">=", fractionOfMax: 0.5, actionIndexIfMet: 0, actionIndexIfNot: 1 }
};

const ENTRY_SCRIPTS = {
  "entry-55": [{ type: "adjustHp", diceExpr: "2D6", sign: -1 }],
  "entry-59": [{ type: "adjustHp", value: -1 }],
  "entry-154": [{ type: "adjustHp", value: 1 }],
  "entry-203": [{ type: "adjustHp", diceExpr: "1D6", sign: -1 }],
  "entry-222": [{ type: "adjustHp", value: -1 }],
  "entry-258": [{ type: "adjustHp", diceExpr: "1D3", sign: -1 }],
  "entry-94": [{ type: "adjustSan", value: 1 }],
  "entry-250": [{ type: "adjustSan", diceExpr: "1D2", sign: -1, checkGated: true }],
  "entry-39": [{ type: "tickSkill", skill: "魅惑" }],
  "entry-162": [{ type: "tickSkill", skill: "心理学" }],
  "entry-174": [{ type: "tickSkill", skill: "汽车驾驶" }],
  "entry-225": [{ type: "tickSkill", skill: "锁匠" }],
  "entry-136": [{ type: "adjustSkill", skill: "博物学", value: 1 }],
  "entry-143": [{ type: "adjustSkill", skill: "博物学", value: 2 }],
  "entry-171": [{ type: "adjustSkill", skill: "克苏鲁神话", value: 4 }],
  "entry-237": [{ type: "adjustSkill", skill: "克苏鲁神话", value: 2 }],
  "entry-16": [{ type: "gainItem", item: "狩猎小刀" }],
  "entry-159": [{ type: "gainItem", item: "《阿撒托斯及其他》诗集" }],
  "entry-184": [{ type: "gainItem", item: "《阿撒托斯及其他》诗集" }],
  "entry-150": [{ type: "startCombat", scriptId: "entry-150" }],
  "entry-155": [{ type: "startCombat", scriptId: "entry-155" }],
  "entry-173": [{ type: "startCombat", scriptId: "entry-173" }],
  "entry-235": [{ type: "startCombat", scriptId: "entry-235" }],
  "entry-262": [{ type: "startCombat", scriptId: "entry-262" }],
};

const ATTR_CN_TO_KEY = {
  "力量": "STR", "体质": "CON", "体形": "SIZ", "敏捷": "DEX",
  "外貌": "APP", "智力": "INT", "意志": "POW", "教育": "EDU"
};

const DERIVED_CN_TO_KEY = {
  "幸运": "luck", "理智": "san"
};

function directivesToCheckHints(directives) {
  const hints = [];
  let lastCheck = null;
  for (const d of directives) {
    switch (d.kind) {
      case "check-mention": {
        let check;
        if (ATTR_CN_TO_KEY[d.skill]) {
          check = { type: "attribute", key: ATTR_CN_TO_KEY[d.skill], skill: d.skill, label: d.skill, difficulty: "regular", mode: "regular" };
        } else if (DERIVED_CN_TO_KEY[d.skill]) {
          check = { type: "derived", key: DERIVED_CN_TO_KEY[d.skill], skill: d.skill, label: d.skill, difficulty: "regular", mode: "regular" };
        } else {
          check = { type: "skill", skill: d.skill, label: d.skill, difficulty: "regular", mode: "regular" };
        }
        lastCheck = check;
        hints.push(lastCheck);
        break;
      }
      case "check-hard":
        if (lastCheck) lastCheck.difficulty = "hard";
        break;
      case "check-extreme":
        if (lastCheck) lastCheck.difficulty = "extreme";
        break;
      case "bonus-die":
        if (lastCheck && !d.context) lastCheck.mode = "bonus";
        break;
      case "penalty-die":
        if (lastCheck && !d.context) lastCheck.mode = "penalty";
        break;
    }
  }
  return hints;
}

const ENDINGS = [
  { num: 65, tone: "death", label: "烈焰吞噬", summary: "你在铁链中被火焰烧死。" },
  { num: 77, tone: "death", label: "时间耗尽", summary: "铁链未能挣脱，火焰夺去了你的生命。" },
  { num: 80, tone: "sacrifice", label: "仪式献祭", summary: "你吟诵了仪式，以自身为代价。" },
  { num: 92, tone: "death", label: "坠崖身亡", summary: "你从悬崖跌落，因伤出血而死。" },
  { num: 93, tone: "death", label: "挣脱但未逃脱", summary: "你挣脱了铁链，但火焰仍在追赶。" },
  { num: 109, tone: "death", label: "灯塔之火", summary: "你躲开了抓捕，但火焰吞没了一切。" },
  { num: 123, tone: "death", label: "推入火堆", summary: "村民将你推回火中，狂热吞噬了你。" },
  { num: 171, tone: "madness", label: "宇宙真相", summary: "你领悟了德比的诗作，精神再也无法安宁。" },
  { num: 185, tone: "escape", label: "骑车逃离", summary: "你骑车离开了烬头村，身后是嘶吼与爆响。" },
  { num: 193, tone: "death", label: "熊的猎物", summary: "你倒在路边，成为野兽的猎物。" },
  { num: 196, tone: "death", label: "教堂坍塌", summary: "坍塌的屋顶将你压碎。" },
  { num: 220, tone: "madness", label: "星辰彻悟", summary: "你彻悟自己从来都是一颗星星。" },
  { num: 223, tone: "escape", label: "山顶远望", summary: "你逃到山顶，目睹烬头村在身后燃烧。" },
  { num: 231, tone: "death", label: "献祭之火", summary: "你被村民献祭，命令群星降临。" },
  { num: 243, tone: "death", label: "白炽湮灭", summary: "群星回应了你，你在光与热中湮灭。" },
  { num: 247, tone: "escape", label: "马车脱险", summary: "你被拖上马车，在颠簸中离开了烬头村。" },
  { num: 255, tone: "triumph", label: "阻止群星", summary: "你的命令阻止了群星下落，村庄得救。" },
  { num: 270, tone: "triumph", label: "火焰凝固", summary: "火焰停在半空，烬头村的噩梦终结。" }
];

function getChapterIdForNum(num) {
  for (const ch of CHAPTERS) {
    if (num >= ch.range[0] && num <= ch.range[1]) return ch.id;
  }
  return CHAPTERS[0].id;
}

const nodes = {};
for (const entry of Object.values(parsed.entries)) {
  nodes[entry.id] = toNode(entry);
}

export const module = {
  id: "alone-against-the-flames",
  title: "向火独行",
  startNodeId: "entry-1",
  chapters: CHAPTERS,
  endings: ENDINGS,
  nodes
};

export const moduleStats = {
  totalNodes: Object.keys(nodes).length,
  endingNodes: Object.values(nodes).filter((n) => n.endingId).length,
  imageNodes: Object.values(nodes).filter((n) => n.image).length,
  directiveNodes: Object.values(nodes).filter((n) => n.directives.length).length
};
