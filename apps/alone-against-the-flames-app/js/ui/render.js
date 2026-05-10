export function renderApp({
  moduleData,
  state,
  currentNode,
  visibleStats,
  trackerBars,
  adapterStatuses,
  investigator,
  quickStarts,
  chapterGroups,
  structureStats,
  activeQuickStartId,
  activeChapterId,
  currentCheckResolution,
  currentCheckModes,
  onAction,
  onAdvanceResolved,
  onReset,
  onJump,
  onBack,
  onOpenDice,
  onRollCheck,
  onSetCheckMode
}) {
  renderHeaderSummary(moduleData, state, structureStats, currentNode);
  renderQuickStarts(quickStarts, activeQuickStartId, onJump);
  renderChapters(chapterGroups, activeChapterId, onJump);
  renderStory(
    currentNode,
    state,
    onAction,
    onBack,
    onRollCheck,
    currentCheckResolution,
    onAdvanceResolved,
    currentCheckModes,
    onSetCheckMode
  );
  renderStats(visibleStats, trackerBars, state.inventory, investigator);
  renderClueThreads(state.flags, currentNode.id, onJump);
  renderFlags(state.flags);
  renderAdapterStatuses(adapterStatuses);
  renderEchoes(state.echoes);
  renderHistory(state.history, moduleData.nodes);

  const resetButton = document.getElementById("resetRunButton");
  resetButton.onclick = onReset;

  const openDiceButton = document.getElementById("openDiceButton");
  openDiceButton.onclick = onOpenDice;

  const ending = currentNode.endingId
    ? moduleData.endings.find((item) => item.id === currentNode.endingId)
    : null;
  const feedback = document.getElementById("actionFeedback");
  if (ending) {
    const endingNote = document.createElement("div");
    endingNote.className = "ending-note";
    endingNote.textContent = `当前停在阶段性终点：${ending.label} - ${ending.summary}`;
    feedback.appendChild(endingNote);
  } else if (!feedback.childElementCount) {
    feedback.textContent = "";
  }
}

function renderHeaderSummary(moduleData, state, structureStats, currentNode) {
  document.getElementById("phaseLabel").textContent = inferPhase(currentNode);
  document.getElementById("historyCount").textContent = `${state.history.length}`;
  document.getElementById("sliceCount").textContent = `${structureStats.playableCount}`;
  document.getElementById("flagCount").textContent = `${Object.keys(state.flags).length}`;

  document.getElementById("buildStatus").textContent = `${structureStats.structuredCount} 节点已接入`;
  document.getElementById("structureProgressFill").style.width = `${structureStats.coveragePercent}%`;
  document.getElementById(
    "structureProgressMeta"
  ).textContent = `已结构化 ${structureStats.structuredCount} / ${structureStats.totalCount} 个节点，当前原型覆盖 ${structureStats.coveragePercent}%`;
}

function renderQuickStarts(quickStarts, activeId, onJump) {
  const list = document.getElementById("quickStartList");
  list.innerHTML = "";

  quickStarts.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `quickstart-button${item.id === activeId ? " is-active" : ""}`;
    button.innerHTML = `<strong>${item.label}</strong><span>${item.description}</span>`;
    button.onclick = () => onJump(item.nodeId, item.id);
    list.appendChild(button);
  });
}

function renderChapters(chapterGroups, activeId, onJump) {
  const list = document.getElementById("chapterList");
  list.innerHTML = "";

  chapterGroups.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chapter-button${item.id === activeId ? " is-active" : ""}`;
    button.innerHTML = `<strong>${item.label}</strong><span>${item.description}</span>`;
    button.onclick = () => onJump(item.nodeId, item.id);
    list.appendChild(button);
  });
}

function renderStory(
  node,
  state,
  onAction,
  onBack,
  onRollCheck,
  currentCheckResolution,
  onAdvanceResolved,
  currentCheckModes,
  onSetCheckMode
) {
  const feedback = document.getElementById("actionFeedback");
  feedback.innerHTML = "";
  feedback.textContent = "";

  document.getElementById("sceneMeta").textContent = (node.tags || []).join(" / ");
  document.getElementById("sceneTitle").textContent = node.title;
  document.getElementById("sceneText").textContent = node.text;
  document.getElementById("sceneTitleOverlay").textContent = node.title;
  document.getElementById("sceneOverlayMeta").textContent = (node.tags || []).join(" · ");
  document.getElementById("currentNodeCode").textContent = node.id;
  document.getElementById("currentSliceLabel").textContent = inferPhase(node);
  document.getElementById("pathTrail").textContent = state.history.slice(-4).join(" -> ") || "-";
  renderTransitionBanner(state.lastTransition);

  renderSceneArt(node.image);

  const backButton = document.getElementById("jumpBackButton");
  backButton.disabled = state.history.length <= 1;
  backButton.onclick = onBack;

  const actionList = document.getElementById("actionList");
  actionList.innerHTML = "";

  renderCheckHints(
    node,
    onRollCheck,
    currentCheckResolution,
    node.actions || [],
    onAdvanceResolved,
    currentCheckModes,
    onSetCheckMode
  );

  (node.actions || []).forEach((action) => {
    const row = document.createElement("div");
    row.className = "action-row";

    const button = document.createElement("button");
    button.type = "button";
    const recommendationClass = getActionRecommendationClass(action.check, currentCheckResolution);
    const gateState = getActionGateState(action.check, currentCheckResolution);
    button.className = `action-button${recommendationClass ? ` ${recommendationClass}` : ""}`;
    if (gateState === "locked") {
      button.classList.add("is-locked");
      button.disabled = true;
    }
    button.innerHTML = `
      <span class="action-main">
        <span class="action-label">${action.label}</span>
        <span class="action-note">${action.description || ""}</span>
      </span>
    `;
    button.onclick = () => onAction(action.id);
    if (gateState !== "hidden") {
      row.appendChild(button);
    }

    const rollButton = renderActionCheck(action.check);
    if (rollButton && gateState !== "locked" && !currentCheckResolution) {
      rollButton.addEventListener("click", () =>
        onRollCheck({
          notation: rollButton.dataset.rollNotation,
          label: rollButton.dataset.rollLabel
        })
      );
      row.appendChild(rollButton);
    }

    if (row.childElementCount) {
      actionList.appendChild(row);
    }
  });
}

function renderCheckHints(
  node,
  onRollCheck,
  currentCheckResolution,
  actions,
  onAdvanceResolved,
  currentCheckModes,
  onSetCheckMode
) {
  const feedback = document.getElementById("actionFeedback");
  const hints = node.checkHints || [];

  if (!hints.length) {
    return;
  }
  hints.forEach((hint) => {
    const row = document.createElement("div");
    row.className = "check-hint";
    const targetMeta = renderCheckTargetMeta(hint);
    const modeKey = getCheckModeKey(node.id, hint);
    const selectedMode = currentCheckModes[modeKey] || hint.mode || "regular";
    row.innerHTML = `
      <div class="check-copy">
        <strong>${hint.label}</strong>
        <span>${hint.description || "建议先完成一次检定，再选择结果分支。"}</span>
        ${targetMeta ? `<small>${targetMeta}</small>` : ""}
        ${renderCheckModeSelector(selectedMode, !!currentCheckResolution)}
      </div>
      <button type="button" class="check-roll-button" data-notation="${hint.notation || "1d100"}">
        投 ${formatRollButtonLabel(hint)}
      </button>
    `;

    if (currentCheckResolution && currentCheckResolution.label === hint.label) {
      row.classList.add(currentCheckResolution.success ? "is-success" : "is-failure");
      row.classList.add(`rank-${currentCheckResolution.rank}`);
      row.querySelector(".check-roll-button").remove();
      row.querySelector(".check-copy").appendChild(renderResolutionSummary(currentCheckResolution));
      const resolvedAction = findResolvedAction(actions, currentCheckResolution);
      if (resolvedAction) {
        if (resolvedAction.transitionSummary) {
          const summary = document.createElement("div");
          summary.className = "resolved-transition-summary";
          summary.textContent = resolvedAction.transitionSummary;
          row.querySelector(".check-copy").appendChild(summary);
        }
        const advanceButton = document.createElement("button");
        advanceButton.type = "button";
        advanceButton.className = "resolve-advance-button";
        advanceButton.textContent = `按本次结果前进：${resolvedAction.label}`;
        advanceButton.addEventListener("click", () => onAdvanceResolved(resolvedAction.id));
        row.appendChild(advanceButton);
      }
    }

    const rollTrigger = row.querySelector(".check-roll-button");
    if (rollTrigger) {
      rollTrigger.addEventListener("click", () => onRollCheck(hint));
    }
    row.querySelectorAll("[data-check-mode]").forEach((button) => {
      button.addEventListener("click", () => onSetCheckMode(node.id, hint, button.dataset.checkMode));
    });
    feedback.appendChild(row);
  });
}

function renderActionCheck(check) {
  if (!check) return null;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "action-roll-button";
  button.dataset.rollNotation = check.notation || "1d100";
  button.dataset.rollLabel = check.label;
  button.textContent = `${check.label} · 投 ${formatRollButtonLabel(check)}`;
  return button;
}

function renderCheckTargetMeta(check) {
  if (!check?.target) return "";
  return `目标值 ${check.target} · 困难 ${check.half} · 极难 ${check.fifth}`;
}

function getActionRecommendationClass(check, resolution) {
  if (!check || !resolution || check.outcome == null) return "";
  if (check.outcome === "success" && resolution.success) return "is-recommended";
  if (check.outcome === "failure" && !resolution.success) return "is-recommended";
  return "is-muted";
}

function getActionGateState(check, resolution) {
  if (!check || check.outcome == null) return "free";
  if (!resolution) return "locked";
  if (check.outcome === "success" && resolution.success) return "free";
  if (check.outcome === "failure" && !resolution.success) return "free";
  return "locked";
}

function findResolvedAction(actions, resolution) {
  return (actions || []).find((action) => {
    if (!action.check || action.check.outcome == null) return false;
    return (action.check.outcome === "success" && resolution.success) ||
      (action.check.outcome === "failure" && !resolution.success);
  });
}

function renderResolutionSummary(resolution) {
  const block = document.createElement("div");
  block.className = "resolution-summary";
  block.innerHTML = `
    <div class="resolution-pill tone-${resolution.success ? "success" : "failure"} rank-${resolution.rank}">
      ${resolution.outcomeLabel}
    </div>
    <div class="resolution-meta">
      <span>${getModeDisplayLabel(resolution.mode || "regular")}</span>
      <span>掷骰 ${resolution.roll}</span>
      ${renderCandidateMeta(resolution.candidates, resolution.mode)}
      <span>目标 ${resolution.target}</span>
      <span>困难 ${resolution.half}</span>
      <span>极难 ${resolution.fifth}</span>
    </div>
  `;
  return block;
}

function renderCheckModeSelector(selectedMode, disabled) {
  const modes = [
    { id: "regular", label: "常规" },
    { id: "bonus", label: "奖励" },
    { id: "penalty", label: "惩罚" }
  ];

  return `
    <div class="check-mode-selector${disabled ? " is-disabled" : ""}">
      ${modes
        .map(
          (mode) =>
            `<button type="button" class="check-mode-button${mode.id === selectedMode ? " is-active" : ""}" data-check-mode="${mode.id}" ${
              disabled ? "disabled" : ""
            }>${mode.label}</button>`
        )
        .join("")}
    </div>
  `;
}

function getCheckModeKey(nodeId, check) {
  return `${nodeId}::${check.skill || check.sourceLabel || check.label}`;
}

function formatRollButtonLabel(check) {
  if ((check.notation || "1d100") === "1d100") {
    if ((check.mode || "regular") === "bonus") return "百分骰";
    if ((check.mode || "regular") === "penalty") return "百分骰";
    return "百分骰";
  }
  return check.notation || "1d100";
}

function getModeDisplayLabel(mode) {
  if (mode === "bonus") return "奖励骰";
  if (mode === "penalty") return "惩罚骰";
  return "常规检定";
}

function renderCandidateMeta(candidates, mode) {
  if (!Array.isArray(candidates) || candidates.length <= 1) return "";
  const label = mode === "bonus" ? "取低" : mode === "penalty" ? "取高" : "候选";
  return `<span>${label} ${candidates.join(" / ")}</span>`;
}

function renderSceneArt(imagePath) {
  const art = document.getElementById("sceneArt");

  if (imagePath) {
    art.style.backgroundImage = `linear-gradient(180deg, rgba(41, 27, 19, 0.14), rgba(8, 10, 16, 0.72)), url("${imagePath}")`;
    art.style.backgroundSize = "cover";
    art.style.backgroundPosition = "center";
  } else {
    art.style.backgroundImage = "";
    art.style.backgroundSize = "";
    art.style.backgroundPosition = "";
  }
}

function renderTransitionBanner(transition) {
  let banner = document.getElementById("sceneTransitionBanner");

  if (!banner) {
    banner = document.createElement("div");
    banner.id = "sceneTransitionBanner";
    banner.className = "scene-transition-banner";
    const sceneText = document.getElementById("sceneText");
    sceneText.parentNode.insertBefore(banner, sceneText);
  }

  if (!transition?.text) {
    banner.hidden = true;
    banner.textContent = "";
    banner.className = "scene-transition-banner";
    return;
  }

  banner.hidden = false;
  banner.className = `scene-transition-banner tone-${transition.tone || "neutral"}`;
  banner.textContent = transition.text;
}

function renderStats(visibleStats, trackerBars, inventory, investigator) {
  document.getElementById("investigatorName").textContent = investigator.name;
  document.getElementById("investigatorRole").textContent = investigator.occupation;
  document.getElementById("investigatorMeta").textContent = investigator.identityMeta || "未载入更多角色信息";
  document.getElementById("detailHometown").textContent = investigator.hometown || "-";
  document.getElementById("detailResidence").textContent = investigator.residence || "-";

  renderPortrait(investigator);
  renderTrackerBars(trackerBars);

  const statGrid = document.getElementById("statGrid");
  statGrid.innerHTML = "";

  visibleStats.forEach((stat) => {
    const card = document.createElement("dl");
    card.className = "stat-card";
    card.innerHTML = `<dt>${stat.label}</dt><dd>${stat.value}</dd>`;
    statGrid.appendChild(card);
  });

  const inventoryList = document.getElementById("inventoryList");
  inventoryList.innerHTML = "";
  const sourceInventory = inventory.length ? inventory : ["暂无关键持有物"];
  sourceInventory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    inventoryList.appendChild(li);
  });
}

function renderPortrait(investigator) {
  const image = document.getElementById("portraitImage");
  const placeholder = document.getElementById("portraitPlaceholder");

  if (investigator.portraitUrl) {
    image.src = investigator.portraitUrl;
    image.hidden = false;
    placeholder.hidden = true;
    image.onerror = () => {
      image.hidden = true;
      placeholder.hidden = false;
    };
    return;
  }

  image.hidden = true;
  image.removeAttribute("src");
  placeholder.hidden = false;
}

function renderTrackerBars(trackerBars) {
  const container = document.getElementById("trackerBars");
  container.innerHTML = "";

  trackerBars.forEach((tracker) => {
    const card = document.createElement("div");
    card.className = `tracker-bar tone-${tracker.tone}`;
    card.innerHTML = `
      <div class="tracker-head">
        <span>${tracker.label}</span>
        <strong>${tracker.current}/${tracker.max}</strong>
      </div>
      <div class="tracker-track">
        <div class="tracker-fill" style="width:${tracker.percent}%"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderFlags(flags) {
  const flagCloud = document.getElementById("flagCloud");
  flagCloud.innerHTML = "";
  const entries = Object.entries(flags);

  if (!entries.length) {
    const span = document.createElement("span");
    span.className = "flag-pill is-empty";
    span.textContent = "还没有触发剧情标记";
    flagCloud.appendChild(span);
    return;
  }

  entries.forEach(([key, value]) => {
    const span = document.createElement("span");
    span.className = "flag-pill";
    span.textContent = `${key}: ${String(value)}`;
    flagCloud.appendChild(span);
  });
}

function renderClueThreads(flags, currentNodeId, onJump) {
  const container = document.getElementById("clueThreadList");
  container.innerHTML = "";

  const clues = buildClueThreads(flags);
  if (!clues.length) {
    const empty = document.createElement("div");
    empty.className = "clue-thread-card is-empty";
    empty.innerHTML = `
      <strong>还没有成形的线索</strong>
      <p>继续调查村庄、夜空、露丝或图书室之后，这里会开始整理你正在追的问题。</p>
    `;
    container.appendChild(empty);
    return;
  }

  clues.forEach((clue) => {
    const card = document.createElement("article");
    const isCurrent = clue.nodeId === currentNodeId;
    card.className = `clue-thread-card tone-${clue.tone || "neutral"}${isCurrent ? " is-current" : ""}`;
    card.innerHTML = `
      <div class="clue-thread-top">
        <strong>${clue.title}</strong>
        <span>${clue.status}</span>
      </div>
      <p>${clue.summary}</p>
      ${
        clue.nodeId
          ? `<button type="button" class="clue-thread-jump"${isCurrent ? " disabled" : ""}>${
              isCurrent ? "当前相关场景" : clue.cta || "追这条线"
            }</button>`
          : ""
      }
    `;
    const jumpButton = card.querySelector(".clue-thread-jump");
    if (jumpButton) {
      jumpButton.addEventListener("click", () => onJump(clue.nodeId, clue.id || clue.nodeId));
    }
    container.appendChild(card);
  });
}

function renderAdapterStatuses(adapterStatuses) {
  document.getElementById("characterAdapterStatus").textContent = `角色 adapter: ${adapterStatuses.character}`;
  document.getElementById("diceAdapterStatus").textContent = `骰子 adapter: ${adapterStatuses.dice}`;
  document.getElementById("contentAdapterStatus").textContent = `内容 adapter: ${adapterStatuses.content}`;
}

function buildClueThreads(flags) {
  const threads = [];

  if (flags.heardRuthWarning || flags.heardRuthNightWarning || flags.metRuth) {
    threads.push({
      id: "thread-ruth",
      title: "露丝的警告",
      status: flags.heardRuthNightWarning ? "已具体化" : "已出现",
      tone: "warning",
      nodeId: flags.heardRuthNightWarning ? "entry-138" : "entry-3",
      cta: flags.heardRuthNightWarning ? "回到露丝夜谈" : "去见露丝",
      summary: flags.heardRuthNightWarning
        ? "露丝已经不只是模糊劝你离开。她提到了“不要看上面”“别站在火中间”，说明她知道的东西比大人愿意承认的更多。"
        : "露丝几次表现出与年龄不符的不安。她对节日和火的恐惧，值得你继续追问。"
    });
  }

  if (flags.heardAboutFestival || flags.sawNightLanterns || flags.shadowedNightProcession) {
    threads.push({
      id: "thread-festival",
      title: "节日与夜间火光",
      status: flags.shadowedNightProcession ? "正在逼近" : "已有迹象",
      tone: "ember",
      nodeId: flags.shadowedNightProcession ? "entry-86" : "entry-180",
      cta: flags.shadowedNightProcession ? "回到夜间火光" : "回到傍晚不安",
      summary: flags.shadowedNightProcession
        ? "你已经亲眼看见夜里的火光正汇向某处。现在很难再把所谓节日理解成单纯的村庄庆典。"
        : "火把游行、灯塔、以及夜里活动起来的村民，正在慢慢拼成同一件事。"
    });
  }

  if (flags.visitedBlackStructure || flags.noticedStrangeOrientation || flags.foundAlignmentNote) {
    threads.push({
      id: "thread-alignment",
      title: "黑色建筑与校准",
      status: flags.foundAlignmentNote ? "线索成串" : "需要解释",
      tone: "cold",
      nodeId: flags.foundAlignmentNote ? "entry-118" : "entry-57",
      cta: flags.foundAlignmentNote ? "回到校准备忘" : "去看黑色建筑",
      summary: flags.foundAlignmentNote
        ? "黑色建筑的朝向、图书室里那张校准备忘，以及“让村子对准”的说法已经彼此咬合。你接下来需要找的是：它究竟在对准什么。"
        : "那座黑色金属建筑的方位和外观都过于刻意。它看起来不像普通村舍，更像整个村子里的某个核心装置。"
    });
  }

  if (flags.visitedRuinedChurch || flags.noticedScorchedAltar) {
    threads.push({
      id: "thread-church",
      title: "被掏空的教堂",
      status: flags.noticedScorchedAltar ? "留下痕迹" : "值得回想",
      tone: "warning",
      nodeId: "entry-34",
      cta: "回到坍圮教堂",
      summary: flags.noticedScorchedAltar
        ? "教堂的问题不只是破败。祭坛后的烟痕说明那里曾长期焚烧过什么，而真正的宗教标记几乎都被清掉了。"
        : "那座教堂的空洞感不像自然荒废，更像有人有选择地把某些意义从里面抹掉。"
    });
  }

  if (flags.learnedTelegraphDelay || flags.roadsBlocked || flags.spookedByForestCall) {
    threads.push({
      id: "thread-escape",
      title: "离村为何这么难",
      status: flags.roadsBlocked ? "已被证实" : "越来越真",
      tone: "neutral",
      nodeId: flags.roadsBlocked ? "entry-7" : "entry-28",
      cta: flags.roadsBlocked ? "回到出村受阻" : "再试离村",
      summary: flags.roadsBlocked
        ? "你已经确认两侧村口都有人把守。交通稀薄和电报损坏不再像倒霉巧合，更像村子整体把外部隔在外面。"
        : "无论是坏掉的电报线，还是树林里的异响，所有与“离开”有关的事情都在变得不自然。"
    });
  }

  return threads;
}

function renderEchoes(echoes) {
  const echoList = document.getElementById("echoList");
  echoList.innerHTML = "";

  echoes.forEach((echo) => {
    const li = document.createElement("li");
    li.textContent = echo.text;
    if (echo.tone === "positive") li.classList.add("is-positive");
    if (echo.tone === "negative") li.classList.add("is-negative");
    echoList.appendChild(li);
  });
}

function renderHistory(history, nodeMap) {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  history
    .slice(-8)
    .reverse()
    .forEach((id, index) => {
      const node = nodeMap[id];
      const item = document.createElement("li");
      item.className = "history-item";
      item.innerHTML = `
        <strong>${node ? node.title : id}</strong>
        <span>${index === 0 ? "当前停留点" : "此前经过节点"}</span>
      `;
      historyList.appendChild(item);
    });
}

function inferPhase(node) {
  const tags = node.tags || [];
  if (tags.includes("开场")) return "旅程开场";
  if (tags.includes("借宿")) return "借宿与试探";
  if (tags.includes("白天探索")) return "白天调查";
  if (tags.includes("图书室")) return "会堂研究";
  if (tags.includes("夜里")) return "夜间收束";
  if (tags.includes("傍晚")) return "傍晚回流";
  if (tags.includes("待结构化")) return "待接内容";
  return "游玩中";
}
