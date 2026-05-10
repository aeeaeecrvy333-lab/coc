const ATTR_KEYS = ["STR", "CON", "SIZ", "DEX", "APP", "INT", "POW", "EDU"];
const STORAGE_KEY = "alone-against-the-flames-character";
const AVATAR_BASE = "../character-tracker/coc_character_sheet/assets/avatars/";
const SKILL_BASES = {
  "信用评级": 0,
  "博物学": 10,
  "图书馆使用": 20,
  "聆听": 20,
  "侦查": 25,
  "魅惑": 15,
  "话术": 5,
  "说服": 10,
  "心理学": 10,
  "神秘学": 5,
  "历史": 5,
  "法律": 5,
  "急救": 30,
  "母语": "EDU",
  "闪避": "DEX/2"
};

const DEFAULT_CHARACTER = normalizeCharacter({
  name: "亨利·阿什克罗夫特",
  playerName: "守秘人",
  occupation: "私家侦探",
  age: 34,
  gender: "男",
  residence: "波士顿，马萨诸塞州",
  hometown: "纽约，纽约州",
  era: "1920s",
  avatar: "",
  rawAttrs: { STR: 60, CON: 50, SIZ: 55, DEX: 70, APP: 50, INT: 75, POW: 60, EDU: 65 },
  effectiveAttrs: { STR: 60, CON: 50, SIZ: 55, DEX: 70, APP: 50, INT: 75, POW: 60, EDU: 65 },
  luck: 55,
  derived: { HP: 10, MP: 12, SAN: 55, DB: "0", build: -1, MOV: 8, dodge: 35, language: 65 },
  equipment: [
    { name: ".32 左轮手枪（柯尔特侦探特装）×1，弹药 24 发" },
    { name: "手电筒（备用电池 ×2）" },
    { name: "银质怀表（父亲遗物）" },
    { name: "石质护符（来历不明）" }
  ]
});

export const characterAdapter = {
  status: "已接入 `.coc7` 导入与简化追踪视图，可直接复用现有角色卡数据。",

  createSeedCharacter() {
    return cloneCharacter(DEFAULT_CHARACTER);
  },

  loadPersistedCharacter() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return normalizeCharacter(JSON.parse(raw));
    } catch (error) {
      console.warn("角色缓存读取失败", error);
      return null;
    }
  },

  persistCharacter(character) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeCharacter(character)));
  },

  clearPersistedCharacter() {
    localStorage.removeItem(STORAGE_KEY);
  },

  async importFromFile(file) {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const imported = parseCharacterFile(parsed);
    const character = normalizeCharacter(imported);
    this.persistCharacter(character);
    return character;
  },

  getVisibleStats(character) {
    const attrs = character.effectiveAttrs || character.rawAttrs || {};
    const derived = character.derived || {};
    return [
      { label: "HP", value: `${character.stats.hp.current}/${character.stats.hp.max}` },
      { label: "SAN", value: `${character.stats.san.current}/${character.stats.san.max}` },
      { label: "MP", value: `${character.stats.mp.current}/${character.stats.mp.max}` },
      { label: "Luck", value: `${character.stats.luck}` },
      { label: "STR", value: attrs.STR || 0 },
      { label: "DEX", value: attrs.DEX || 0 },
      { label: "POW", value: attrs.POW || 0 },
      { label: "INT", value: attrs.INT || 0 },
      { label: "CON", value: attrs.CON || 0 },
      { label: "SIZ", value: attrs.SIZ || 0 },
      { label: "APP", value: attrs.APP || 0 },
      { label: "EDU", value: attrs.EDU || 0 },
      { label: "MOV", value: derived.MOV ?? 8 },
      { label: "DB", value: derived.DB ?? "0" }
    ];
  },

  getTrackerBars(character) {
    return [
      makeTrackerBar("HP", character.stats.hp.current, character.stats.hp.max, "life"),
      makeTrackerBar("SAN", character.stats.san.current, character.stats.san.max, "sanity"),
      makeTrackerBar("MP", character.stats.mp.current, character.stats.mp.max, "magic"),
      makeTrackerBar("Luck", character.stats.luck, 99, "luck")
    ];
  },

  getPortraitUrl(character) {
    if (!character.avatar) return "";
    return `${AVATAR_BASE}${character.avatar}`;
  },

  getIdentityMeta(character) {
    return [character.age ? `${character.age} 岁` : "", character.gender || "", character.era || ""]
      .filter(Boolean)
      .join(" · ");
  },

  getInventory(character) {
    const equipment = (character.equipment || [])
      .map((item) => (typeof item === "string" ? item : item.name || item.detail || ""))
      .filter(Boolean);
    if (equipment.length) return equipment.slice(0, 8);
    return character.inventory || [];
  },

  resolveCheck(check, character) {
    if (!check) return null;

    const attrs = character.effectiveAttrs || character.rawAttrs || {};
    let target = null;
    let sourceLabel = "";

    if (check.type === "attribute" && check.key) {
      target = Number(attrs[check.key] || 0);
      sourceLabel = check.key;
    } else if (check.type === "derived" && check.key) {
      target = Number(character.derived?.[check.key] || 0);
      sourceLabel = check.key;
    } else if (check.type === "skill" && check.skill) {
      target = getSkillTotal(check.skill, attrs, character.skillPoints || {});
      sourceLabel = check.skill;
    }

    if (check.key === "luck") {
      target = Number(character.stats?.luck || character.luck || 0);
      sourceLabel = "Luck";
    }

    if (check.target != null) {
      target = Number(check.target);
    }

    if (target == null || Number.isNaN(target)) return { ...check, sourceLabel };

    return {
      ...check,
      sourceLabel,
      target,
      half: Math.floor(target / 2),
      fifth: Math.floor(target / 5)
    };
  }
};

function parseCharacterFile(parsed) {
  if (parsed && parsed._format === "coc7-char-v1" && parsed._encoded) {
    const decoded = JSON.parse(decodeURIComponent(escape(atob(parsed._encoded))));
    return decompressState(decoded);
  }

  if (parsed && (parsed.rawAttrs || parsed.effectiveAttrs || parsed.derived || parsed.stats)) {
    return parsed;
  }

  throw new Error("无法识别的角色卡格式");
}

function decompressState(data) {
  if (!data || data.v !== 1) {
    throw new Error("角色数据版本不受支持");
  }

  const rawAttrs = {};
  ATTR_KEYS.forEach((key, index) => {
    rawAttrs[key] = data.at?.[index] || 0;
  });

  const effectiveAttrs = {};
  const effectiveArray = data.ea || data.at || [];
  ATTR_KEYS.forEach((key, index) => {
    effectiveAttrs[key] = effectiveArray[index] || rawAttrs[key] || 0;
  });

  const dv = data.dv || [0, 0, 0, "0", 0, 8, 0, 0];

  return {
    name: data.s?.n || "",
    playerName: data.s?.p || "",
    residence: data.s?.r || "",
    hometown: data.s?.h || "",
    age: data.s?.a || 25,
    gender: data.s?.g || "男",
    era: data.s?.e || "1920s",
    avatar: data.s?.av || "",
    rawAttrs,
    effectiveAttrs,
    luck: data.l || 0,
    occupation: data.o || "",
    creditRating: data.cr || 0,
    skillPoints: decodeSkillPoints(data.sk || {}),
    occSkills: [...(data.ofsl || []), ...(data.os || [])],
    derived: {
      HP: dv[0],
      MP: dv[1],
      SAN: dv[2],
      DB: dv[3],
      build: dv[4],
      MOV: dv[5],
      dodge: dv[6],
      language: dv[7]
    },
    equipment: (data.eq || []).map((item) => ({
      name: item.n || "",
      type: item.t || "",
      price: item.r || 0,
      detail: item.d || ""
    }))
  };
}

function normalizeCharacter(character) {
  const attrs = character.effectiveAttrs || character.rawAttrs || {};
  const derived = character.derived || {};
  const hpMax = derived.HP ?? character.stats?.hp?.max ?? 10;
  const mpMax = derived.MP ?? character.stats?.mp?.max ?? 10;
  const sanMax = derived.SAN_MAX ?? derived.SAN_START ?? derived.SAN ?? character.stats?.san?.max ?? 99;
  const hpCurrent = derived.HP_current ?? character.stats?.hp?.current ?? hpMax;
  const mpCurrent = derived.MP_current ?? character.stats?.mp?.current ?? mpMax;
  const sanCurrent = derived.SAN_current ?? derived.SAN ?? character.stats?.san?.current ?? sanMax;
  const luck = character.luck ?? character.stats?.luck ?? 0;

  return {
    name: character.name || "未命名调查员",
    playerName: character.playerName || "",
    occupation: character.occupation || "未知职业",
    age: character.age || "",
    gender: character.gender || "",
    residence: character.residence || "",
    hometown: character.hometown || "",
    era: character.era || "",
    avatar: character.avatar || "",
    rawAttrs: fillAttrs(character.rawAttrs || attrs),
    effectiveAttrs: fillAttrs(attrs),
    creditRating: character.creditRating || 0,
    skillPoints: character.skillPoints || {},
    occSkills: character.occSkills || [],
    derived: {
      HP: hpMax,
      HP_current: hpCurrent,
      MP: mpMax,
      MP_current: mpCurrent,
      SAN: sanCurrent,
      SAN_START: derived.SAN_START ?? sanMax,
      SAN_MAX: sanMax,
      DB: derived.DB ?? "0",
      build: derived.build ?? 0,
      MOV: derived.MOV ?? 8,
      dodge: derived.dodge ?? 0,
      language: derived.language ?? 0
    },
    luck,
    equipment: Array.isArray(character.equipment) ? character.equipment : [],
    inventory: Array.isArray(character.inventory)
      ? character.inventory
      : Array.isArray(character.equipment)
        ? character.equipment.map((item) => item.name || item.detail).filter(Boolean)
        : [],
    stats: {
      hp: { current: hpCurrent, max: hpMax },
      san: { current: sanCurrent, max: sanMax },
      mp: { current: mpCurrent, max: mpMax },
      luck
    }
  };
}

function fillAttrs(source) {
  const result = {};
  ATTR_KEYS.forEach((key) => {
    result[key] = source?.[key] || 0;
  });
  return result;
}

function decodeSkillPoints(source) {
  const result = {};
  for (const [key, value] of Object.entries(source)) {
    const [occ, int] = String(value).split(",");
    result[key] = {
      occ: Number.parseInt(occ, 10) || 0,
      int: Number.parseInt(int, 10) || 0
    };
  }
  return result;
}

function getSkillBase(skillName, attrs) {
  if (skillName === "信用评级") return 0;
  if (skillName === "闪避") return Math.floor((attrs.DEX || 0) / 2);
  if (skillName === "母语") return attrs.EDU || 0;

  const specialtyMatch = skillName.match(/^(.+)\((.+)\)$/);
  if (specialtyMatch) {
    const [, parent] = specialtyMatch;
    if (parent === "艺术和手艺") return 5;
    if (parent === "生存") return 10;
    if (parent === "格斗") return 0;
  }

  return typeof SKILL_BASES[skillName] === "string"
    ? SKILL_BASES[skillName] === "DEX/2"
      ? Math.floor((attrs.DEX || 0) / 2)
      : attrs.EDU || 0
    : SKILL_BASES[skillName] ?? 0;
}

function getSkillTotal(skillName, attrs, skillPoints) {
  const base = getSkillBase(skillName, attrs);
  const points = skillPoints[skillName];
  const bonus = points ? (points.occ || 0) + (points.int || 0) : 0;
  if (skillName === "信用评级" && bonus === 0) {
    return Number.isFinite(base) ? base : 0;
  }
  return base + bonus;
}

function makeTrackerBar(label, current, max, tone) {
  const safeMax = Math.max(1, Number(max) || 1);
  const safeCurrent = Math.max(0, Number(current) || 0);
  return {
    label,
    current: safeCurrent,
    max: safeMax,
    percent: Math.max(0, Math.min(100, Math.round((safeCurrent / safeMax) * 100))),
    tone
  };
}

function cloneCharacter(character) {
  return JSON.parse(JSON.stringify(character));
}
