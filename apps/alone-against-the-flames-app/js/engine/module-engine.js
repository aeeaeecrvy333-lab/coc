function cloneCharacter(seedCharacter) {
  return JSON.parse(JSON.stringify(seedCharacter));
}

export function createInitialState(moduleData, seedCharacter) {
  return {
    moduleId: moduleData.id,
    currentNodeId: moduleData.startNodeId,
    character: cloneCharacter(seedCharacter),
    inventory: [...(seedCharacter.inventory || [])],
    flags: {},
    history: [],
    echoes: [],
    unlockedEndings: [],
    lastTransition: null
  };
}

export function getCurrentNode(moduleData, state) {
  return moduleData.nodes[state.currentNodeId];
}

export function enterCurrentNode(moduleData, state) {
  const node = getCurrentNode(moduleData, state);
  if (!node) {
    throw new Error(`Unknown node: ${state.currentNodeId}`);
  }

  state.history.push(node.id);
  applyEffects(state, node.onEnterEffects || []);
  if (node.endingId && !state.unlockedEndings.includes(node.endingId)) {
    state.unlockedEndings.push(node.endingId);
  }
  return node;
}

export function performAction(moduleData, state, actionId) {
  const node = getCurrentNode(moduleData, state);
  const action = (node.actions || []).find((item) => item.id === actionId);
  if (!action) {
    throw new Error(`Unknown action: ${actionId}`);
  }

  applyEffects(state, action.effects || []);
  state.currentNodeId = action.next;
  return enterCurrentNode(moduleData, state);
}

export function jumpToNode(moduleData, state, nodeId) {
  if (!moduleData.nodes[nodeId]) {
    throw new Error(`Unknown node: ${nodeId}`);
  }

  state.currentNodeId = nodeId;
  return enterCurrentNode(moduleData, state);
}

function applyEffects(state, effects) {
  for (const effect of effects) {
    switch (effect.type) {
      case "setFlag":
        state.flags[effect.key] = effect.value;
        break;
      case "adjustLuck":
        state.character.stats.luck = clampValue(state.character.stats.luck + effect.value, 0, 99);
        state.character.luck = state.character.stats.luck;
        pushEcho(state, `Luck ${formatDelta(effect.value)}`, effect.value < 0 ? "negative" : "positive");
        break;
      case "adjustHp":
        state.character.stats.hp.current = clampValue(
          state.character.stats.hp.current + effect.value,
          0,
          state.character.stats.hp.max
        );
        state.character.derived.HP_current = state.character.stats.hp.current;
        pushEcho(state, `HP ${formatDelta(effect.value)}`, effect.value < 0 ? "negative" : "positive");
        break;
      case "adjustSan":
        state.character.stats.san.current = clampValue(
          state.character.stats.san.current + effect.value,
          0,
          state.character.stats.san.max
        );
        state.character.derived.SAN = state.character.stats.san.current;
        pushEcho(state, `SAN ${formatDelta(effect.value)}`, effect.value < 0 ? "negative" : "positive");
        break;
      case "adjustMp":
        state.character.stats.mp.current = clampValue(
          state.character.stats.mp.current + effect.value,
          0,
          state.character.stats.mp.max
        );
        state.character.derived.MP_current = state.character.stats.mp.current;
        pushEcho(state, `MP ${formatDelta(effect.value)}`, effect.value < 0 ? "negative" : "positive");
        break;
      case "gainItem":
        state.inventory.push(effect.item);
        state.character.inventory = [...state.inventory];
        pushEcho(state, `获得物品：${effect.item}`, "positive");
        break;
      case "loseItem":
        state.inventory = state.inventory.filter((item) => item !== effect.item);
        state.character.inventory = [...state.inventory];
        pushEcho(state, `失去物品：${effect.item}`, "negative");
        break;
      case "logEntry":
        pushEcho(state, effect.text, "neutral");
        break;
      default:
        pushEcho(state, `未实现 effect: ${effect.type}`, "neutral");
        break;
    }
  }
}

function pushEcho(state, text, tone) {
  state.echoes.unshift({
    text,
    tone,
    at: Date.now()
  });
  state.echoes = state.echoes.slice(0, 8);
}

function formatDelta(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function clampValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
