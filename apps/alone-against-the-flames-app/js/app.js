import { characterAdapter } from "./adapters/character-adapter.js";
import { diceAdapter, initDiceAdapter, mountDiceShortcuts } from "./adapters/dice-adapter.js";
import { moduleStub } from "./data/module-stub.js";
import { createInitialState, enterCurrentNode, getCurrentNode, jumpToNode, performAction } from "./engine/module-engine.js";
import { renderApp } from "./ui/render.js";

const contentAdapterStatus =
  "当前采用 hand-authored module stub，目的是先做出可试玩界面；后续再把 wiki 抽取内容更系统地灌进来。";

const quickStarts = [
  {
    id: "bus-opening",
    label: "长途车开场",
    description: "先看汽车站、西拉斯、车票和最初的角色建立味道。",
    nodeId: "entry-1"
  },
  {
    id: "arrival-bridge",
    label: "正式抵村",
    description: "从长途车后半段直接落到烬头村，快速接上主体验。",
    nodeId: "entry-134"
  },
  {
    id: "lodging-scene",
    label: "借宿与节日",
    description: "直接跳进梅·莱德贝特家的第一轮对话。",
    nodeId: "entry-4"
  },
  {
    id: "day-investigation",
    label: "白天调查枢纽",
    description: "从午饭后的抉择开始，感受烬头村白天的可选路线。",
    nodeId: "entry-22"
  },
  {
    id: "town-hall",
    label: "村会堂线",
    description: "看文特斯、会堂、咖啡和图书室研究支线。",
    nodeId: "entry-11"
  },
  {
    id: "library-slice",
    label: "图书室研究",
    description: "直接落到文特斯的资料阅读段，最容易看出 app 的面板价值。",
    nodeId: "entry-68"
  },
  {
    id: "next-morning",
    label: "次日清晨",
    description: "从第一夜之后继续，直接接次日的调查与不安。",
    nodeId: "entry-154"
  },
  {
    id: "festival-finale",
    label: "节夜终盘",
    description: "直接跳到节日前夕，试玩夜间队列、灯塔与结局收束。",
    nodeId: "entry-190"
  }
];

const chapterGroups = [
  {
    id: "chapter-opening",
    label: "第一幕 · 上路",
    description: "车票、行李架、角色半值与长途车气味。",
    nodeId: "entry-1"
  },
  {
    id: "chapter-lodging",
    label: "第二幕 · 借宿",
    description: "梅、露丝、火光和第一层异样。",
    nodeId: "entry-4"
  },
  {
    id: "chapter-daytime",
    label: "第三幕 · 白天调查",
    description: "杂货店、村会堂、总览与离村冲动。",
    nodeId: "entry-22"
  },
  {
    id: "chapter-townhall",
    label: "第四幕 · 会堂与资料",
    description: "文特斯、电报、图书室与背景资料。",
    nodeId: "entry-43"
  },
  {
    id: "chapter-night",
    label: "第五幕 · 夜色压下来",
    description: "夜谈、夜游、睡前收束和露丝的怪异存在感。",
    nodeId: "entry-31"
  },
  {
    id: "chapter-finale",
    label: "第六幕 · 节夜",
    description: "队列、灯塔、火光与最后的逃路。",
    nodeId: "entry-190"
  }
];

let selectedEntryId = quickStarts[0].id;
let selectedNodeId = quickStarts[0].nodeId;
let seedCharacter = characterAdapter.loadPersistedCharacter() || characterAdapter.createSeedCharacter();
let state = createInitialState(moduleStub, seedCharacter);
let pendingCheck = null;
let lastCheckResolution = null;
let checkModeSelections = {};
initDiceAdapter();
diceAdapter.setRollCompleteListener(handleRollComplete);
enterCurrentNode(moduleStub, state);
bindCharacterControls();
paint();

function paint() {
  const investigator = decorateInvestigator(state.character);
  const currentNode = decorateNodeChecks(getCurrentNode(moduleStub, state));
  renderApp({
    moduleData: moduleStub,
    state,
    currentNode,
    visibleStats: characterAdapter.getVisibleStats(state.character),
    trackerBars: characterAdapter.getTrackerBars(state.character),
    adapterStatuses: {
      character: characterAdapter.status,
      dice: `${diceAdapter.status} ${diceAdapter.describeIntegration()}`,
      content: contentAdapterStatus
    },
    investigator,
    quickStarts,
    chapterGroups,
    structureStats: getStructureStats(moduleStub),
    activeQuickStartId: getActiveQuickStartId(),
    activeChapterId: getActiveChapterId(),
    currentCheckResolution: lastCheckResolution,
    currentCheckModes: checkModeSelections,
    onAction: handleAction,
    onAdvanceResolved: handleAdvanceResolved,
    onReset: handleReset,
    onJump: handleJump,
    onBack: handleBack,
    onOpenDice: handleOpenDice,
    onRollCheck: handleRollCheck,
    onSetCheckMode: handleSetCheckMode
  });
  mountDiceShortcuts(handleQuickRoll);
}

function handleAction(actionId) {
  const currentNode = decorateNodeChecks(getCurrentNode(moduleStub, state));
  const action = (currentNode.actions || []).find((item) => item.id === actionId);
  const resolutionSnapshot = lastCheckResolution;
  const beforeSnapshot = captureStateSnapshot(state);

  if (!canTakeAction(actionId)) {
    window.alert("请按本次检定结果前进。");
    return;
  }

  performAction(moduleStub, state, actionId);
  state.lastTransition = buildTransitionNotice(action, resolutionSnapshot, summarizeStateDelta(beforeSnapshot, state));
  pendingCheck = null;
  lastCheckResolution = null;
  paint();
}

function handleAdvanceResolved(actionId) {
  handleAction(actionId);
}

function handleReset() {
  resetState();
  if (selectedNodeId !== moduleStub.startNodeId) {
    jumpToNode(moduleStub, state, selectedNodeId);
  }
  paint();
}

function handleJump(nodeId, entryId) {
  resetState();
  selectedEntryId = entryId || selectedEntryId;
  selectedNodeId = nodeId;
  jumpToNode(moduleStub, state, nodeId);
  paint();
}

function handleBack() {
  if (state.history.length <= 1) return;

  const previousId = state.history[state.history.length - 2];
  resetState();
  jumpToNode(moduleStub, state, previousId);
  paint();
}

function handleOpenDice() {
  diceAdapter.openPanel();
}

function handleQuickRoll(notation) {
  diceAdapter.quickRoll(notation);
}

function handleRollCheck(check) {
  const resolvedCheck = characterAdapter.resolveCheck(check, state.character);
  pendingCheck = resolvedCheck;
  lastCheckResolution = null;
  const targetText = resolvedCheck?.target ? ` 对抗 ${resolvedCheck.target}` : "";
  const modeLabel = getCheckModeLabel(resolvedCheck?.mode || "regular");
  const label = resolvedCheck?.label ? `${resolvedCheck.label}${targetText} · ${modeLabel} · ` : "";
  state.echoes.unshift({
    text: `${label}准备检定 ${formatCheckNotation(resolvedCheck)}`,
    tone: "neutral",
    at: Date.now()
  });
  state.echoes = state.echoes.slice(0, 8);
  diceAdapter.quickRoll({
    notation: getRollNotationForCheck(resolvedCheck),
    meta: {
      percentile: usesPercentileDice(resolvedCheck),
      mode: resolvedCheck.mode || "regular"
    }
  });
  paint();
}

function handleRollComplete(summary) {
  if (!pendingCheck || !summary) return;

  const resolution = evaluateCheckResult(pendingCheck, summary);
  lastCheckResolution = resolution;
  pendingCheck = null;

  state.echoes.unshift({
    text: `${resolution.label}: ${resolution.roll} / ${resolution.target} -> ${resolution.outcomeLabel}`,
    tone: resolution.success ? "positive" : "negative",
    at: Date.now()
  });
  state.echoes = state.echoes.slice(0, 8);
  paint();
}

function bindCharacterControls() {
  const importButton = document.getElementById("importCharacterButton");
  const clearButton = document.getElementById("clearCharacterButton");
  const fileInput = document.getElementById("characterFileInput");

  importButton.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handleCharacterImport);
  clearButton.addEventListener("click", handleCharacterClear);
}

async function handleCharacterImport(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  try {
    seedCharacter = await characterAdapter.importFromFile(file);
    resetState();
    if (selectedNodeId !== moduleStub.startNodeId) {
      jumpToNode(moduleStub, state, selectedNodeId);
    }
    paint();
  } catch (error) {
    console.error("角色导入失败", error);
    window.alert(`角色导入失败：${error.message}`);
  } finally {
    event.target.value = "";
  }
}

function handleCharacterClear() {
  seedCharacter = characterAdapter.createSeedCharacter();
  characterAdapter.clearPersistedCharacter();
  resetState();
  if (selectedNodeId !== moduleStub.startNodeId) {
    jumpToNode(moduleStub, state, selectedNodeId);
  }
  paint();
}

function resetState() {
  state = createInitialState(moduleStub, seedCharacter);
  pendingCheck = null;
  lastCheckResolution = null;
  checkModeSelections = {};
  enterCurrentNode(moduleStub, state);
}

function decorateInvestigator(character) {
  return {
    ...character,
    portraitUrl: characterAdapter.getPortraitUrl(character),
    identityMeta: characterAdapter.getIdentityMeta(character)
  };
}

function decorateNodeChecks(node) {
  const resolveWithMode = (check) => {
    const resolved = characterAdapter.resolveCheck(check, state.character);
    const key = getCheckSelectionKey(node.id, resolved);
    return {
      ...resolved,
      mode: checkModeSelections[key] || resolved.mode || "regular"
    };
  };

  return {
    ...node,
    text: appendContextualSceneText(node, state),
    checkHints: (node.checkHints || []).map((check) => resolveWithMode(check)),
    actions: (node.actions || []).map((action) => ({
      ...action,
      check: action.check ? resolveWithMode(action.check) : null
    }))
  };
}

function appendContextualSceneText(node, currentState) {
  const notes = getContextualNotes(node.id, currentState.flags);
  if (!notes.length) return node.text;
  return `${node.text}\n\n${notes.join("\n\n")}`;
}

function getContextualNotes(nodeId, flags) {
  const notes = [];

  if (nodeId === "entry-154") {
    if (flags.heardRuthNightWarning) {
      notes.push("露丝昨晚那句“不要看上面，也别站在火中间”还在你耳边，像一句根本不属于孩童的规劝。");
    }
    if (flags.sawNightLanterns || flags.shadowedNightProcession) {
      notes.push("你没法把昨夜那些在屋舍间缓慢汇聚的火光当作普通夜行，它们让这个清晨也带着一点尚未散去的余烬味。");
    }
    if (flags.feltStarPressure) {
      notes.push("哪怕窗外只是灰白晨光，你还是会想起昨夜那种仿佛整片天空正向村庄压下来的感觉。");
    }
  }

  if (nodeId === "entry-160") {
    if (flags.heardRuthNightWarning) {
      notes.push("露丝昨夜压低声音说出的那些话，让你现在很难把她的沉默当成普通的小孩子闹别扭。");
    }
    if (flags.shadowedNightProcession || flags.sawNightLanterns) {
      notes.push("你昨夜已经见过火光在村中汇聚，因此这顿早餐的客气更像一种被迫维持的白天表象。");
    }
  }

  if (nodeId === "entry-3" || nodeId === "entry-22") {
    if (flags.heardRuthNightWarning) {
      notes.push("如今再看露丝和梅站在白天光线里，你很难假装昨夜那场压低声音的警告从未发生过。");
    }
    if (flags.feltStarPressure || flags.noticedStrangeOrientation || flags.foundAlignmentNote) {
      notes.push("你开始不自觉地把村中的道路、屋脊和那座黑色建筑联系在一起，仿佛这一切并不是随便摆在这里的。");
    }
    if (flags.visitedRuinedChurch && flags.visitedBlackStructure) {
      notes.push("教堂被掏空后的黑痕，与黑色金属建筑那种刻意到近乎冰冷的朝向，已经在你脑中并列成了一组问题。");
    }
    if (flags.heardStorekeeperFestivalTone) {
      notes.push("连杂货店主人谈起今晚时都过于平常，仿佛节夜对村里人来说不是异常，而是秩序本身。");
    }
  }

  if (nodeId === "entry-6") {
    if (flags.visitedBlackStructure) {
      notes.push("你现在已经知道，东北角那座黑色建筑不是远望时的错觉；靠近它之后，那种不协调感只会变得更强。");
    }
    if (flags.visitedRuinedChurch) {
      notes.push("你也知道西南角那座教堂的问题不只是坍圮，它更像是被谁把原本该在里面的意义抽走了。");
    }
  }

  if (nodeId === "entry-11" || nodeId === "entry-43") {
    if (flags.visitedBlackStructure || flags.foundAlignmentNote) {
      notes.push("想到那座黑色建筑的朝向和你在纸页里见过的“校准”字样，你对文特斯的每一句从容解释都多留了几分心。");
    }
    if (flags.decodedMetalSymbols) {
      notes.push("你已经不只觉得那座黑色建筑可疑，而是几乎确定它本身就是整套仪式布局中的一个节点。");
    }
  }

  if (nodeId === "entry-61" || nodeId === "entry-64") {
    if (flags.decodedMetalSymbols || flags.foundAlignmentNote) {
      notes.push("你不是在凭空怀疑。无论是浮雕里的关系，还是纸页上的“校准”，都让文特斯现在的平静解释显得更像遮掩。");
    }
  }

  if (nodeId === "entry-180") {
    if (flags.foundAlignmentNote) {
      notes.push("校准备忘里的草图和那句“让村子对准”的话，让今晚的一切都像是在往某个预定时刻靠拢。");
    }
    if (flags.heardAboutFestival) {
      notes.push("梅早先提过的火把游行与灯塔，如今不再像民俗趣闻，反而像一场你已经越来越靠近的安排。");
    }
  }

  if (nodeId === "entry-190" || nodeId === "entry-203") {
    if (flags.foundAlignmentNote) {
      notes.push("图书室里那张写着“让村子对准”的纸，此刻像是终于找到了它真正指向的夜晚。");
    }
    if (flags.linkedVillageToOldRitualHill) {
      notes.push("你已经看出旧祭场与如今村庄围着的是同一段山头，所以眼前这场集结更像延续，而不是新发明。");
    }
    if (flags.foundFestivalMarginNotes) {
      notes.push("手稿边角那几个词也在你脑中浮起来了：火、灯塔、站位、不可抬头。它们和眼前的画面贴得可怕。");
    }
    if (flags.understoodSpecificNightSky) {
      notes.push("你知道这并不是随便哪一晚都行，村民等的也许正是今晚这片恰好摆成某种样子的夜空。");
    }
    if (flags.visitedBlackStructure || flags.noticedStrangeOrientation) {
      notes.push("你想起那座黑色建筑不合常理的朝向，如今村民、火光与灯塔的位置也开始显得像同一个布局的不同边。");
    }
    if (flags.decodedMetalSymbols) {
      notes.push("你已经从浮雕里读出过火、群体与朝向的关系，因此眼前这一切不像意外聚集，而像一次早被设计好的重演。");
    }
    if (flags.recognizedChurchStripping) {
      notes.push("教堂被系统清空过的事实也在你脑中作响，仿佛村里旧的信仰早就给今晚这一套东西让过路。");
    }
    if (flags.fictionEchoedRitual) {
      notes.push("连那篇俗艳怪谈里都提到过“站位”和让天上路径敞开的火祭，如今你很难再把它只当作荒唐巧合。");
    }
    if (flags.heardRuthNightWarning) {
      notes.push("露丝那句“不要看上面，也别站在火中间”现在不再像谜语，而像她能给你的最直接的求生说明。");
    }
  }

  if (nodeId === "entry-186" || nodeId === "entry-188" || nodeId === "entry-189") {
    if (flags.decodedMetalSymbols || flags.heardWintersAlignmentSlip) {
      notes.push("你早已知道这座建筑不只是村中摆设，所以现在连它的沉默都像是在参与今晚的准备。");
    }
    if (flags.foundAlignmentNote) {
      notes.push("“让村子对准”的那句话让你很难把眼前的震动和低响当成无意义的夜间杂音。");
    }
  }

  if (nodeId === "entry-205") {
    if (flags.charmedMay || flags.readMorningTension) {
      notes.push("你知道梅并不是全然无动于衷。无论是昨夜的长谈，还是今晨早餐桌上的颤抖，都说明她心里并不平静。");
    }
  }

  if (nodeId === "entry-240") {
    if (flags.ruthShowedEscapePath) {
      notes.push("若没有露丝最后那一下几乎看不见的手势，你很可能根本不会注意到那条沿悬崖下去的旧路。");
    }
    if (flags.foundAlignmentNote) {
      notes.push("你把那张校准备忘也一起带离了山上；它证明烬头村的疯狂并非一时兴起，而是被人认真记录和维护过的东西。");
    }
  }

  return notes;
}

function buildTransitionNotice(action, resolution, deltaSummary) {
  if (!action) return null;
  const prefix = resolution ? `${formatResolutionLead(resolution)}：` : "";
  const suffix = deltaSummary ? ` ${deltaSummary}` : "";

  if (action.transitionSummary) {
    return {
      text: `${prefix}${action.transitionSummary}${suffix}`,
      tone: action.check?.outcome === "failure" ? "negative" : "positive"
    };
  }

  if (action.description) {
    return {
      text: `${prefix}${action.description}${suffix}`,
      tone: resolution ? (resolution.success ? "positive" : "negative") : "neutral"
    };
  }

  return null;
}

function formatResolutionLead(resolution) {
  const source = resolution.sourceLabel || resolution.label || "检定";
  return `${source}${resolution.outcomeLabel}`;
}

function captureStateSnapshot(currentState) {
  return {
    hp: currentState.character.stats.hp.current,
    san: currentState.character.stats.san.current,
    mp: currentState.character.stats.mp.current,
    luck: currentState.character.stats.luck,
    inventory: [...currentState.inventory]
  };
}

function summarizeStateDelta(before, afterState) {
  const changes = [];
  pushDelta(changes, "HP", afterState.character.stats.hp.current - before.hp);
  pushDelta(changes, "SAN", afterState.character.stats.san.current - before.san);
  pushDelta(changes, "MP", afterState.character.stats.mp.current - before.mp);
  pushDelta(changes, "Luck", afterState.character.stats.luck - before.luck);

  const gainedItems = afterState.inventory.filter((item) => !before.inventory.includes(item));
  const lostItems = before.inventory.filter((item) => !afterState.inventory.includes(item));

  if (gainedItems.length) {
    changes.push(`获得 ${gainedItems.join("、")}`);
  }
  if (lostItems.length) {
    changes.push(`失去 ${lostItems.join("、")}`);
  }

  if (!changes.length) return "";
  return `(${changes.join("，")})`;
}

function pushDelta(target, label, delta) {
  if (!delta) return;
  target.push(`${label} ${delta > 0 ? `+${delta}` : delta}`);
}

function handleSetCheckMode(nodeId, check, mode) {
  const resolvedCheck = characterAdapter.resolveCheck(check, state.character);
  checkModeSelections = {
    ...checkModeSelections,
    [getCheckSelectionKey(nodeId, resolvedCheck)]: mode
  };
  lastCheckResolution = null;
  pendingCheck = null;
  paint();
}

function canTakeAction(actionId) {
  const node = decorateNodeChecks(getCurrentNode(moduleStub, state));
  const action = (node.actions || []).find((item) => item.id === actionId);
  if (!action?.check || action.check.outcome == null) return true;
  if (!lastCheckResolution) return false;
  if (action.check.outcome === "success") return lastCheckResolution.success;
  if (action.check.outcome === "failure") return !lastCheckResolution.success;
  return true;
}

function getStructureStats(moduleData) {
  const ids = Object.keys(moduleData.nodes);
  const unresolvedCount = ids.filter((id) => id.startsWith("unresolved-")).length;
  const structuredCount = ids.length - unresolvedCount;
  return {
    totalCount: ids.length,
    structuredCount,
    unresolvedCount,
    playableCount: quickStarts.length,
    coveragePercent: Math.round((structuredCount / ids.length) * 100)
  };
}

function getActiveQuickStartId() {
  const current = state.currentNodeId;
  const hit = quickStarts.find((item) => item.nodeId === current);
  return hit ? hit.id : selectedEntryId;
}

function getActiveChapterId() {
  const current = state.currentNodeId;
  const hit = chapterGroups.find((item) => item.nodeId === current);
  return hit ? hit.id : findNearestChapter(current);
}

function evaluateCheckResult(check, summary) {
  const candidates = getCheckRollCandidates(check, summary);
  const roll = resolveChosenRoll(check.mode, candidates);
  const target = Number(check.target || 0);
  const critical = roll === 1;
  const fumble = isFumble(roll, target);
  const success = critical || (!fumble && roll <= target);
  let rank = success ? "regular" : "failure";
  if (critical) rank = "critical";
  else if (success && roll <= (check.fifth ?? 0)) rank = "extreme";
  else if (success && roll <= (check.half ?? 0)) rank = "hard";
  else if (fumble) rank = "fumble";

  return {
    label: check.label || check.sourceLabel || "检定",
    roll,
    candidates,
    target,
    success,
    rank,
    outcomeLabel: getOutcomeLabel(rank, success),
    sourceLabel: check.sourceLabel || "",
    half: check.half ?? 0,
    fifth: check.fifth ?? 0,
    mode: check.mode || "regular"
  };
}

function getOutcomeLabel(rank, success) {
  if (rank === "critical") return "大成功";
  if (rank === "extreme") return "极难成功";
  if (rank === "hard") return "困难成功";
  if (rank === "fumble") return "大失败";
  return success ? "成功" : "失败";
}

function isFumble(roll, target) {
  if (roll === 100) return true;
  if (target < 50 && roll >= 96) return true;
  return false;
}

function getCheckRollCandidates(check, summary) {
  if (Array.isArray(summary.percentileCandidates) && summary.percentileCandidates.length) {
    return summary.percentileCandidates;
  }

  if (usesPercentileDice(check)) {
    return buildPercentileCandidates(check, summary);
  }

  if (Array.isArray(summary.flatRolls) && summary.flatRolls.length) {
    return summary.flatRolls.map((value) => Number(value)).filter((value) => Number.isFinite(value));
  }
  return [Number(summary.total || 0)];
}

function resolveChosenRoll(mode, candidates) {
  if (!candidates.length) return 0;
  if (mode === "bonus") return Math.min(...candidates);
  if (mode === "penalty") return Math.max(...candidates);
  return candidates[0];
}

function getRollNotationForCheck(check) {
  if (usesPercentileDice(check)) {
    if ((check.mode || "regular") === "bonus" || (check.mode || "regular") === "penalty") {
      return ["1d10", "1d10", "1d10"];
    }
    return ["1d10", "1d10"];
  }
  return check.notation || "1d100";
}

function formatCheckNotation(check) {
  const notation = getRollNotationForCheck(check);
  if (usesPercentileDice(check)) {
    return Array.isArray(notation) && notation.length === 3 ? "百分骰（奖励/惩罚）" : "百分骰";
  }
  return Array.isArray(notation) ? notation.join(" + ") : notation;
}

function getCheckSelectionKey(nodeId, check) {
  return `${nodeId}::${check.skill || check.sourceLabel || check.label}`;
}

function getCheckModeLabel(mode) {
  if (mode === "bonus") return "奖励骰";
  if (mode === "penalty") return "惩罚骰";
  return "常规";
}

function usesPercentileDice(check) {
  return (check?.notation || "1d100") === "1d100";
}

function buildPercentileCandidates(check, summary) {
  const d10Rolls = extractD10Rolls(summary);
  if (!d10Rolls.length) {
    return [Number(summary.total || 0)];
  }

  const ones = d10Rolls[0];
  const tensPool = d10Rolls.slice(1);

  if (!tensPool.length) {
    return [composePercentileValue(0, ones)];
  }

  if ((check.mode || "regular") === "bonus" || (check.mode || "regular") === "penalty") {
    return tensPool.map((tens) => composePercentileValue(tens, ones));
  }

  return [composePercentileValue(tensPool[0], ones)];
}

function extractD10Rolls(summary) {
  if (!Array.isArray(summary.rawResults)) return [];
  return summary.rawResults
    .filter((die) => Number(die.sides || die.side || 0) === 10)
    .flatMap((die) =>
      Array.isArray(die.rolls)
        ? die.rolls.map((roll) => normalizeD10Value(typeof roll === "object" ? roll.value || 0 : roll || 0))
        : [normalizeD10Value(die.value || 0)]
    );
}

function normalizeD10Value(value) {
  const numeric = Number(value) || 0;
  return numeric === 10 ? 0 : numeric;
}

function composePercentileValue(tens, ones) {
  if (tens === 0 && ones === 0) return 100;
  return tens * 10 + ones;
}

function findNearestChapter(nodeId) {
  const chapterRules = [
    { id: "chapter-opening", test: (id) => ["entry-1", "entry-263", "entry-8", "entry-23", "entry-38", "entry-233", "entry-134"].includes(id) },
    { id: "chapter-lodging", test: (id) => ["entry-4", "entry-14", "entry-21", "entry-15"].includes(id) },
    { id: "chapter-daytime", test: (id) => ["entry-154", "entry-160", "entry-168", "entry-172", "entry-22", "entry-25", "entry-6", "entry-16", "entry-18", "entry-17", "entry-30", "entry-28", "entry-34", "entry-36", "entry-42", "entry-44", "entry-35", "entry-41", "entry-57", "entry-58", "entry-59", "entry-60", "entry-3", "entry-9", "entry-7"].includes(id) },
    { id: "chapter-townhall", test: (id) => ["entry-11", "entry-24", "entry-37", "entry-43", "entry-49", "entry-56", "entry-61", "entry-62", "entry-64", "entry-68", "entry-74", "entry-76", "entry-81", "entry-83", "entry-88", "entry-89", "entry-94", "entry-96", "entry-99", "entry-105", "entry-111", "entry-118", "entry-124", "entry-180"].includes(id) },
    { id: "chapter-night", test: (id) => ["entry-31", "entry-39", "entry-51", "entry-63", "entry-75", "entry-86", "entry-131", "entry-138"].includes(id) },
    { id: "chapter-finale", test: (id) => ["entry-186", "entry-188", "entry-189", "entry-190", "entry-196", "entry-203", "entry-205", "entry-209", "entry-214", "entry-220", "entry-226", "entry-240"].includes(id) }
  ];

  const match = chapterRules.find((item) => item.test(nodeId));
  return match ? match.id : chapterGroups[0].id;
}
