# 操作日志

> 本日志记录知识库的所有操作历史，仅追加不修改

---

## [2026-04-13] init | 知识库初始化

**操作类型**: 初始化
**描述**: 创建知识库目录结构和核心文件
**创建的文件**:
- wiki/index.md
- wiki/log.md
- CLAUDE.md (schema配置)
- concepts/llm-wiki.md

**备注**: 基于 Karpathy 的 LLM Wiki 模式构建

---

## [2026-04-13] ingest | 克苏鲁的呼唤40周年纪念版规则书

**操作类型**: 摄入（框架搭建阶段）
**描述**: 从COC 40周年纪念版规则书PDF（470页）提取目录结构，搭建知识库框架
**创建的文件**:
- sources/coc-40th-anniversary.md（来源摘要）
- concepts/ 下 40 个概念页面骨架（游戏基础、调查员、战斗、理智、魔法、守秘人、装备）
- entities/ 下 20 个实体页面骨架（人物、神话典籍、外神、旧日支配者、神话种族、神话怪物、模组）
**更新的文件**:
- wiki/index.md（更新为COC知识库索引）
- CLAUDE.md（更新为COC主题配置）

**备注**: 当前所有页面均为骨架状态（🚧），待用户确认框架后开始填充内容

---

## [2026-04-13] ingest | 全部内容填充完成

**操作类型**: 批量内容填充
**描述**: 从COC 40周年纪念版规则书PDF（470页）逐章提取内容，填充全部61个wiki页面
**填充的页面**:
- concepts/ 下 40 个概念页面（全部 ✅ 已填充）
- entities/ 下 20 个实体页面（全部 ✅ 已填充）
- sources/ 下 1 个来源摘要（✅ 已填充）
**章节覆盖**:
- Ch1 介绍 → coc-overview
- Ch2 洛夫克拉夫特与克苏鲁神话 → lovecraft-and-mythos, cthulhu-mythos, lovecraft
- Ch3 创建调查员 → investigator-creation, attribute-system, derived-attributes, half-and-fifth-values, occupation-system, harvey-walters
- Ch4 技能 → skill-system, experience-reward
- Ch5 游戏系统 → skill-check, bonus-penalty-dice, opposed-rolls
- Ch6 战斗 → combat-system, combat-round, melee-combat, combat-maneuvers, ranged-combat, damage-and-healing, armor, poison
- Ch7 追逐 → chase-rules
- Ch8 理智 → sanity-system, sanity-check, insanity, phobia, mania, sanity-recovery
- Ch9 魔法 → spells-and-magic, necronomicon, abdul-alhazred
- Ch10 进行游戏 → keeper-guide, npc, idea-check, spot-hidden-check, module-creation
- Ch11 可怖传说书籍 → mythos-tomes, deep-magic
- Ch12 神话法术 → spell-list
- Ch13 神话造物和异星科技 → mythos-artifacts
- Ch14 怪物、野兽和异星诸神 → azathoth, nyarlathotep, yog-sothoth, cthulhu, hastur, dagon, hydra, deep-ones, mi-go, shoggoth, elder-things, byakhee, colour-out-of-space
- Ch15 模组 → module-dark-woods, module-crimson-letters, module-haunted
- Ch16 附录 → equipment, weapons

**备注**: 全部61个页面已填充完成，index.md状态已更新为 ✅

---

## [2026-04-13] ingest | 遗漏内容补充

**操作类型**: 补充遗漏内容
**描述**: 系统审查PDF原文，补充遗漏的附录内容和神话生物
**新建的概念页面**:
- concepts/terminology.md（术语表）
- concepts/version-conversion.md（转换到第七版规则）
- concepts/translation-glossary.md（中英译名对照表）
- concepts/lovecraft-vocabulary.md（洛氏描写词汇表）
**新建的实体页面**:
- 神话生物13个：ghoul, dark-young, serpent-people, flying-polyp, chthonian, formless-spawn, hounds-of-tindalos, star-vampire, rat-thing, shub-niggurath, cthugha, ithaqua, deep-one-hybrid
- 传统恐怖怪物7个：zoth-ommog, ghost, mummy, skeleton, vampire, werewolf, zombie
**补充的现有页面**:
- sanity-system.md（追加复合理智检定可选规则）
- damage-and-healing.md（追加毒剂注释）
- chase-rules.md（追加载具属性注释）

**备注**: 知识库从61页扩展到85页，覆盖了PDF中几乎所有核心内容

---

## [2026-04-13] ingest | 第十四章剩余生物补充

**操作类型**: 补充遗漏实体
**描述**: 将第十四章"怪物、野兽和异星诸神"中所有剩余的35个神话生物创建为独立实体页面
**新建的实体页面**:
- 旧神: nodens
- 外神: daoloth, tulzscha
- 旧日支配者: abhoth, atlach-nacha, chaugnar-faugn, cyaegha, eihort, ghatanothoa, ghlaaki, ig, nyogtha, rhan-tegoth, shudde-mell, tsathoggua, ubbo-sathla, ygolonac, yibb-tstll
- 神话种族: yithian, loigar, yugg
- 神话怪物: bloodworm, cthughan, dimensional-shambler, fire-vampire, ghast, ghoul-servant-of-ghlaaki, hunting-horror, nightgaunt, nofer-kee, sand-dweller, shantak-bird, shoggoth-lord, star-spawn-of-cthulhu

**备注**: 知识库从85页扩展到120页，第十四章所有独立条目已全部覆盖

---

## [2026-04-14] ingest | 克苏鲁的呼唤第七版调查员手册

**操作类型**: 新来源摄入
**描述**: 从《克苏鲁的呼唤第七版调查员手册》（162页）提取内容并整合到知识库
**新建的概念页面**:
- concepts/dunwich-horror.md（敦威治恐怖事件 - 洛夫克拉夫特原著译文）
- concepts/investigator-organizations.md（调查员组织 - 8个范例组织）
- concepts/investigator-career.md（调查员生涯 - 调查流程与团队角色）
- concepts/roaring-twenties.md（咆哮的二十年代 - 历史背景与年表）
- concepts/player-advice.md（给玩家的建议）
**新建的来源页面**:
- sources/coc-investigator-handbook.md
**补充的现有页面**:
- occupation-system.md（追加约50个调查员手册独有职业）
- skill-system.md（追加24个技能的1920年代时代背景补充说明）

**备注**: 知识库从122页扩展到129页

---

## [2026-04-14] ingest | 调查员手册遗漏内容补充

**操作类型**: 补充遗漏内容
**描述**: 系统审查调查员手册PDF原文，补充首次摄入时遗漏的内容
**新建的概念页面**:
- concepts/travel-and-transport.md（旅行与交通参考 - 单位换算、各时代交通工具速度与航程、15城市国际航班飞行里程矩阵）
**补充的现有页面**:
- investigator-creation.md（追加"有故事的调查员"可选规则，含5个经历包：战场、警务、罪犯、医务、神话）
- roaring-twenties.md（追加"百年惊梦年表"1890-2012完整时间线）

**备注**: 知识库从129页扩展到128页（实际为128个内容页面，含index.md和log.md共130个文件）

---

## [2026-04-14] lint | 全面内容完整性审计与补充

**操作类型**: 质量审计 + 内容补充
**描述**: 系统对比两本PDF（规则书470页+调查员手册162页）的全部章节目录与知识库内容，确认所有有价值内容已摄入
**审计结果**:
- 规则书16章+3附录：全部覆盖 ✅
- 调查员手册10章+附录：全部覆盖 ✅
- 实体页面75个：全部覆盖 ✅
**修复的文字交错问题**（调查员手册PDF双栏排版导致）:
- dunwich-horror.md（重写为故事概要版+校对原文）
- investigator-organizations.md（重新整理+校对原文）
- investigator-career.md（重新整理+校对原文）
- player-advice.md（重新整理+校对原文）
- roaring-twenties.md（重新整理+校对原文）
**补充的遗漏内容**:
- keeper-guide.md（追加"使用规则"和"展现神话的恐怖"两个子章节的详细内容）
- spell-list.md（追加"法术变体"专节，含僵尸创造术4个变体版本示例）

---

## [2026-04-14] lint | 知识库健康检查与修复

**操作类型**: 健康检查 + 修复
**描述**: 执行全面 Lint 检查并修复所有发现的问题

---

## [2026-05-08] ingest | 入门套装第三卷模组深度补完（第二轮）

**操作类型**: 来源深化摄入
**描述**: 基于 `第三卷：新手模组.pdf` 原文，对《追书人》《死者的顿足舞》继续从“摘要页”深化为“可直接主持的 KP 实跑页”，补入场景跳转、线索兜底、常见问答、关键对白与 NPC 速查
**更新的文件**:
- wiki/entities/module-paper-chase.md
- wiki/entities/module-dead-man-stomp.md

**备注**: 本轮重点不是新增百科知识，而是把模组页面改造成可支撑 KP 从头到尾主持完整流程的操作文档；`黑暗边缘` 仍保持来源实际可见的有限信息，不做臆补
**检查项目**:
- 孤立页面检查、断裂链接检查、单向链接检查
- 页面格式规范检查、数据矛盾检查、过时内容检查

**修复的问题**:
- 🔴 zoth-ommog.md 类型标注从"传统恐怖怪物"修正为"旧日支配者"
- 🔴 star-spawn-of-cthulhu.md 关联实体链接从 deep-one-hybrid.md 修正为 deep-ones.md
- 🟡 zoth-ommog.md 补充关联实体（克苏鲁、深潜者）
- 🟡 20组单向链接补充为双向链接（涉及14个文件）
- 🟡 45个孤立页面全部消除（在 cthulhu-mythos.md、combat-system.md、coc-overview.md、roaring-twenties.md、module-creation.md 中添加引用）
- 🟢 dunwich-horror.md 补充来源数字段、核心要点、相关概念、相关来源章节
- 🟢 investigator-organizations.md 补充来源数字段、核心要点、相关概念、相关来源章节
- 🟢 coc-40th-anniversary.md 补充涉及实体、涉及概念章节
- 🟢 coc-investigator-handbook.md 补充涉及实体、涉及概念章节
- 🟢 创建 synthesis/ 目录

**检查结果**:
- 断裂链接: 0（修复前即为0）
- 孤立页面: 0（修复前45个）
- 数据矛盾: 0（修复前2处，已修复）
- 格式问题: 0（修复前4个页面，已修复）
- 过时内容: 0

**影响的文件**: 约30个wiki页面
**详细报告**: wiki/lint-report-2026-04-14.md

---

## [2026-04-14] ingest | 怪物之锤 第一卷：神话怪物

**操作类型**: 新来源摄入
**描述**: 从《怪物之锤》第一卷（210页）提取内容并整合到知识库
**新建的概念页面**:
- concepts/monster-creation.md（怪物创造与使用）
**新建的实体页面**:
- 神话怪物70个：阿布霍斯的眷族、不可名状誓言的信徒、化尘者等
- 民俗怪物5个：黑狗、鬼火、魔像、泽西恶魔、食人植物
- 野兽26个：短吻鳄、熊、大象、鲨鱼等
**合并补充的现有页面**:
- 28个神话怪物实体页面（拜亚基、深潜者、修格斯等）
- 6个民俗怪物实体页面（幽灵、吸血鬼、狼人等）
**新建的来源页面**:
- sources/malleus-monstrorum-vol1.md

**备注**: 知识库从约130页扩展到约200页

---

## [2026-04-14] ingest | 怪物之锤 第二卷：神话神祇

**操作类型**: 新来源摄入
**描述**: 从《怪物之锤》第二卷（258页）提取内容并整合到知识库
**新建的概念页面**:
- concepts/mythos-deity-guide.md（神话神祇指南）
**新建的实体页面**:
- 外神3个：格罗斯、克赛克修克鲁斯、特鲁南伯拉
- 旧日支配者26个：亚弗姆-扎、阿尔瓦萨、鲍特·祖卡-莫格等
- 旧神3个：低等旧神、修普诺斯、沃尔瓦多斯
**合并补充的现有页面**:
- 25个神祇实体页面（阿撒托斯、克苏鲁、奈亚拉托提普等）
**新建的来源页面**:
- sources/malleus-monstrorum-vol2.md

**备注**: 知识库扩展到约264页

---

## [2026-05-06] fix | 怪物之锤附录补录与状态修正

**操作类型**: 内容修复 + 索引校正
**描述**: 修复《怪物之锤》附录未独立落库及尾部串页问题，补录附录页面并校正索引状态
**新建的概念页面**:
- concepts/mythos-pronunciation.md（两卷《怪物之锤》附录A神话名称发音表）
- concepts/keeper-reference-cards.md（第二卷主持人用怪物卡与仆从卡说明）
**修复的页面**:
- entities/wild-boar.md（移除误混入的发音附录、卡片模板残片与无关尾部内容）
- index.md（补录附录页面，修正3个占位实体的假完成状态）
- sources/malleus-monstrorum-vol1.md（补充附录A对应页面）
- sources/malleus-monstrorum-vol2.md（补充附录A及主持人卡对应页面）

**备注**: 本次修复后，怪物之锤两卷的目录级附录内容已进入知识库；`yuggya`、`star-worm`、`titus-terence` 仍保留为待补充占位页

---

## [2026-05-06] fix | 3个来源不明实体隔离出正式目录

**操作类型**: 内容审计 + 目录修正
**描述**: 继续追查 `yuggya`、`star-worm`、`titus-terence` 的来源，确认它们未出现在当前 4 本 PDF 全文提取文本中，因此将其从正式实体目录中隔离
**修复的页面**:
- entities/yuggya.md（状态改为“来源待考证”，补充审计说明；后续已迁至 synthesis/）
- entities/star-worm.md（状态改为“来源待考证”，补充审计说明；后续已迁至 synthesis/）
- entities/titus-terence.md（状态改为“来源待考证”，补充审计说明；后续已迁至 synthesis/）
- index.md（将 3 个条目移出正式分类，单列为“待考证条目”）

**备注**: 三个条目暂不删除，以保留对应图片与历史占位痕迹；若后续确认其来自外部资料，可再恢复或迁移

---

## [2026-05-06] fix | Wiki修复台账与野兽组问题收口

**操作类型**: 内容修复 + 台账维护
**描述**: 建立长期修复追踪台账，收口高风险错页、索引漂移、命名漂移，并完成《怪物之锤 第一卷》野兽组批量复核
**新建的文件**:
- wiki/synthesis/wiki-repair-tracker.md（长期修复台账）
- entities/cat.md（从错误混页中拆出的有效独立内容）
- entities/invisible-horse.md（从错误混页中拆出的有效独立内容）
- entities/nyos-kegai.md（由旧误名 `nyth-kell.md` 更正而来）
**修复的页面**:
- 高风险正文页 11 个：giant-octopus, horse, spider, rlim-shaikorth, serpent-people-degenerate, wild-boar, alligator-crocodile, bear, nyos-kegai, servants-of-ygolonac, will-o-the-wisp
- 野兽组批量页：african-elephant, bat-swarm, big-cat, camel, gorilla, hippopotamus, lake-monster, megalodon, orca, piranha, rats-swarm, rhinoceros, scorpion, snake, snapping-turtle
- index.md（补录未收录页面、移除悬空项、更新待考证条目语义与统计）
- concepts/cthulhu-mythos.md（同步 `nyos-kegai` 新路径）
**备注**:
- `yuggya`、`star-worm`、`titus-terence` 继续保留，但已进一步降级为“待核来源占位”
- 当前 `index.md` 中 wiki 链接无悬空项
- 三个待考证占位页现已迁出 `entities/`，转入 `synthesis/`

---

## [2026-05-06] fix | 3个待考证占位页迁入 synthesis 目录

**操作类型**: 目录修正 + 台账同步
**描述**: 将 `yuggya`、`star-worm`、`titus-terence` 从 `entities/` 物理迁移至 `synthesis/`，使其在目录层面与“待核来源占位”的实际语义一致，并同步更新索引统计与修复台账引用
**修复的页面**:
- synthesis/yuggya.md（由 entities/ 迁入 synthesis/）
- synthesis/star-worm.md（由 entities/ 迁入 synthesis/）
- synthesis/titus-terence.md（由 entities/ 迁入 synthesis/）
- index.md（更新 `synthesis/` 区块与统计数字）
- wiki/synthesis/wiki-repair-tracker.md（同步路径与当前状态说明）

**备注**: 本次迁移不等于删除；三个占位页仍保留，后续若找到可靠原始来源，可再决定恢复为正式实体页或并入其他专题页

---

## [2026-05-06] fix | Phase 6 首轮抽检收口（8页来源段与坏页修复）

**操作类型**: 内容抽检 + 结构修复
**描述**: 完成 Phase 6 首轮 8 个候选页的处理，补齐缺失的 `相关来源` 段，并修复其中多页存在的截断、串页和错误条目混入问题
**修复的页面**:
- entities/dust-dweller.md（补全属性、战斗、护甲、理智损失与来源段）
- entities/ithaqua.md（移除误混入的伊欧德内容，重建伊塔库亚条目与来源段）
- entities/nofer-kee.md（按当前文件名收口为诺弗-刻生物页，清理类神叙述混杂）
- entities/vorvadoss.md（移除伏尔索姆残片，补齐属性、攻击、护甲与来源段）
- entities/cyaegha.md（补齐生命值、伤害加值、护甲规则与来源段）
- entities/ghlaaki.md（补齐属性尾部、护甲、法术说明与来源段）
- entities/module-crimson-letters.md（补入相关概念与来源段）
- entities/tcho-tcho.md（移除误混入的猪人条目，改写为乔乔人说明页）
- wiki/synthesis/wiki-repair-tracker.md（同步 Phase 6 首轮收口状态）

**备注**: 本次收口后，实体页批量扫描已不存在缺失 `## 相关来源` 段的页面，且未发现“来源数”与来源列表数量不一致的情况

---

## [2026-05-06] fix | 第二轮抽检启动（类型漂移与错页模板修复）

**操作类型**: 内容修复 + 分类收口
**描述**: 基于第二轮结构扫描，修复多页损坏模板、错误类型与实体名正文错配问题，并将实体页中的 `类型: 未知` 历史遗留清零
**修复的页面**:
- entities/children-of-ig.md（重建伊格之子范例页，修复碎裂表格）
- entities/young-of-the-outer-gods.md（重写通用模板页，补齐基础数据）
- entities/daughter-of-atlach-nacha.md（补齐转化、战斗、法术与理智损失）
- entities/lesser-old-ones.md（类型由“未知”收口为“神话怪物”）
- entities/windwalker.md（类型由“未知”收口为“神话怪物”）
- entities/zhar-and-lloigor.md（移除误混入的罗伊格尔种族正文，恢复为双子旧日支配者页）
- wiki/synthesis/wiki-repair-tracker.md（同步第二轮抽检进度与下一轮候选）

**备注**: 本次修复后，`entities/` 目录中 `类型: 未知` 项已清零；下一轮需要重点处理 `loigar.md` 的重复与结构污染问题

---

## [2026-05-06] fix | 第二轮抽检推进（loigar 收口）

**操作类型**: 内容修复 + 台账同步
**描述**: 重建 `loigar.md`，移除重复脏块、坍塌表格与误混入的旧补充数据，将其收口为单一可信的罗伊格尔种族页
**修复的页面**:
- entities/loigar.md（按《克苏鲁的呼唤 40 周年纪念版规则书》与《怪物之锤 第一卷》重建正文、属性、能力与来源段）
- wiki/synthesis/wiki-repair-tracker.md（同步第二轮抽检进度与修复记录）

**备注**:
- 已明确区分“罗伊格尔种族”与 `zhar-and-lloigor.md` 所对应的“双子旧日支配者”条目
- `loigar.md` 不再保留旧的“怪物之锤补充数据”脏块或重复正文

---

## [2026-05-06] fix | 第二轮抽检扩展（3页属性块修复 + 1页结构收口）

**操作类型**: 内容修复 + 结构校正 + 台账同步
**描述**: 继续清理《怪物之锤 第一卷》中的 OCR 塌陷页，重建 3 个神话怪物页的属性与战斗区块，并修正 1 个模组页的来源段落位置
**修复的页面**:
- entities/petsuchos.md（恢复佩特苏齐完整属性、战斗方式、护甲与理智损失）
- entities/star-sea-eagle.md（恢复星海鱼鹰完整属性、抓取战技与关联实体）
- entities/miri-nigri.md（恢复米里·尼格利完整属性、技能与关联实体）
- entities/module-crimson-letters.md（将误插入正文中段的 `相关来源` 段移回页尾）
- wiki/synthesis/wiki-repair-tracker.md（同步第二轮抽检扩展批次）

**备注**:
- 本批暴露出的主要模式是“正文尚在，但属性与技能段被 OCR 拆散或丢失列值”

---

## [2026-05-06] fix | 第二轮抽检继续（skeleton / zombie 收口）

**操作类型**: 内容修复 + 双来源整合 + 台账同步
**描述**: 清理两页传统恐怖怪物条目中残留的旧补充块，将“可读首版 + 坏尾块”改写为统一、可维护的整合页
**修复的页面**:
- entities/skeleton.md（重建骷髅页，恢复武器、勒住、伤害抵抗与理智损失）
- entities/zombie.md（重建僵尸页，恢复标准数据、变体说明、不死规则与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第十八批修复记录）

**备注**:
- 两页均保留双来源语义，但不再保留原先重复且残缺的“怪物之锤补充数据”坏块
- 这类“前半页正常、尾部补充块损坏”的页面，后续仍值得继续按同样模式筛查

---

## [2026-05-06] fix | 第二轮抽检继续（4页 OCR 断列表修复）

**操作类型**: 内容修复 + 双来源整合 + 台账同步
**描述**: 继续处理属性表均值列脱落、战斗段截断和正文穿插问题，重建 4 个结构已失真的怪物页
**修复的页面**:
- entities/fire-vampire.md（恢复炎之精的完整属性、个体/团簇攻击、催眠舞动与水伤害规则）
- entities/sand-dweller.md（恢复潜沙怪完整属性、组合体说明、护甲、法术概率与宗教关联）
- entities/xiclotl-death-vine.md（恢复成熟死亡藤蔓完整数据、花粉云、抓取/噬咬与再生规则）
- entities/hyperborean.md（恢复希帕波利亚遗民的完整属性、技能、法术概率与撒托古亚关联）
- wiki/synthesis/wiki-repair-tracker.md（同步第十九批修复记录）

**备注**:
- 本批的共同症状是“正文尚可，但属性表列值或战斗块被 OCR 撕裂”
- 经过本次整理，4 页的 `来源数` 与 `相关来源` 链接数已重新对齐

---

## [2026-05-06] fix | 第二轮抽检继续（bhole 串页修复）

**操作类型**: 内容修复 + 串页收口 + 台账同步
**描述**: 修复 `bhole.md` 中误混入其他怪物条目的严重串页问题，重建真正的巨噬蠕虫页面
**修复的页面**:
- entities/bhole.md（按《克苏鲁的呼唤 40 周年纪念版规则书》恢复巨噬蠕虫的完整设定、属性、黏液攻击与吞噬规则）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十批修复记录与下一批候选）

**备注**:
- `bhole.md` 原先并非单纯 OCR 断列，而是正文大段串入“寒冷者”内容
- `spawn-of-yog-sothoth.md` 已被标记为下一批重点嫌疑页，因为当前不仅表格塌陷，文件名与正文主题也可能存在错配

---

## [2026-05-06] fix | 第二轮抽检继续（spawn-of-yog-sothoth 误植修复）

**操作类型**: 内容修复 + 误植纠正 + 台账同步
**描述**: 修复 `spawn-of-yog-sothoth.md` 整页误植为“莎布-尼古拉斯之子”的问题，恢复真正的犹格索托斯子嗣条目
**修复的页面**:
- entities/spawn-of-yog-sothoth.md（按《怪物之锤 第一卷》恢复似人/怪物双形态、抓取战技、无形选项、技能与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十一批修复记录）

**备注**:
- 当前 4 本 PDF 中，“犹格索托斯的子嗣”与“莎布-尼古拉斯之子”均为独立条目
- 本次问题属于“整页拿错实体”，不是普通的 OCR 断列或尾部脏块

---

## [2026-05-06] fix | 第二轮抽检继续（formless / nyogtha 收口）

**操作类型**: 内容修复 + 模板重建 + 台账同步
**描述**: 继续清理“原文主体尚在、但被补充块与断列破坏”的页面，重建无形眷族和尼约格萨子嗣条目
**修复的页面**:
- entities/formless-spawn.md（恢复无形眷族的通常/庞大体型数据、吞噬与攫捕规则，并移除误混入的不相关描述）
- entities/spawn-of-nyogtha.md（恢复人类/怪物双形态数据、包裹战技、护甲与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十二批修复记录）

**备注**:
- `formless-spawn.md` 属于双来源坏块叠加，原先正文中混入了不相干的描述段
- `spawn-of-nyogtha.md` 属于典型双形态模板坍塌页，重建后 `来源数` 与来源段已重新对齐

---

## [2026-05-06] fix | 第二轮抽检继续（spawn-of-tsathoggua 断列修复）

**操作类型**: 内容修复 + 单页模板重建 + 台账同步
**描述**: 修复 `spawn-of-tsathoggua.md` 中属性表和技能/法术说明大面积脱落的问题，恢复为完整条目
**修复的页面**:
- entities/spawn-of-tsathoggua.md（恢复撒托古亚之后裔的完整属性、触手/撕咬/踩踏攻击、护甲、法术与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十三批修复记录）

**备注**:
- 该页并非主题误植，而是典型“正文还在、数据列散掉”的 OCR 坏页
- 修复后 `来源数` 与 `相关来源` 链接数已重新对齐

---

## [2026-05-06] fix | 第二轮抽检继续（hastur / abhoth 眷族修复）

**操作类型**: 内容修复 + 模板重建 + 台账同步
**描述**: 继续修复神祇眷族页中的断列和尾段粘连问题，重建哈斯塔眷族与阿布霍斯眷族页面
**修复的页面**:
- entities/hasturs-spawn.md（恢复哈斯塔眷族完整属性、攫紧战技、护甲、法术与理智损失）
- entities/spawn-of-abhoth.md（恢复阿布霍斯眷族完整属性均值、碾压战技、再生与可变理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十四批修复记录）

**备注**:
- 两页主题均正确，问题集中在“属性表断列”和“技能/护甲/法术/理智损失段连写”
- 修复后两页 `来源数` 与来源段已重新对齐

---

## [2026-05-06] fix | 第二轮抽检继续（foster-child 断列修复）

**操作类型**: 内容修复 + 模板重建 + 台账同步
**描述**: 修复 `foster-child-of-the-old-gods.md` 中属性表脱落与技能/法术说明连写的问题，并复核 `spawn-of-zathog.md` 的跨卷整合性质
**修复的页面**:
- entities/foster-child-of-the-old-gods.md（恢复古神寄养儿的完整属性、典型攻击、法术与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十五批修复记录与 `spawn-of-zathog.md` 的复核结论）

**备注**:
- `foster-child-of-the-old-gods.md` 属于典型“主题正确但数据块散掉”的页面
- `spawn-of-zathog.md` 当前更像显式跨卷整合页，暂不视为错误条目

---

## [2026-05-06] fix | 第二轮抽检继续（spectre-hunter / space-eater 重建）

**操作类型**: 内容修复 + 模板重建 + 台账同步
**描述**: 继续处理正文主题基本正确、但属性表和攻击表已明显碎裂的怪物页，重建灵体猎手与空间吞噬者页面
**修复的页面**:
- entities/spectre-hunter.md（恢复灵体猎手的隐形、容器束缚、驱逐之吟说明，以及完整属性和战斗数据）
- entities/space-eater.md（恢复空间吞噬者的非实体注释、光灼能力、吞噬规则与完整属性块）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十六批修复记录）

**备注**:
- `spectre-hunter.md` 的问题主要是“原文还在，但数据块没有被模板化收口”
- `space-eater.md` 则同时存在属性表碎裂、攻击段串页和表内数值明显错位的问题

---

## [2026-05-06] fix | 第二轮抽检继续（zu-che-quon / people-of-yaddith 串页修复）

**操作类型**: 内容修复 + 双栏串页收口 + 台账同步
**描述**: 修复 `mm1` 连续排版区中两页相邻条目互相串入的问题，重建祖-图米-戈与雅迪斯之民页面
**修复的页面**:
- entities/zu-che-quon.md（恢复祖-图米-戈的惧光、黑暗视觉、完整属性和战斗数据）
- entities/people-of-yaddith.md（恢复雅迪斯之民的先进武器、完整属性、技能、护甲与法术说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十七批修复记录）

**备注**:
- 两页问题都源于相邻双栏文本彼此咬合，导致属性、技能与说明段跨页漂移
- 这类页面通常最适合成对修复，否则容易只修回一半上下文

---

## [2026-05-06] fix | 第二轮抽检继续（xiclotl / nython-ghuli 重建）

**操作类型**: 内容修复 + 模板重建 + 台账同步
**描述**: 继续处理正文尚在但属性块、战斗段与特殊能力已明显失真的怪物页，重建齐克洛尔星怪与尼洪·古力页面
**修复的页面**:
- entities/xiclotl.md（恢复齐克洛尔星怪的完整属性、六臂攻击、抓取战技、护甲与冷弱点）
- entities/nython-ghuli.md（恢复尼洪·古力的完整属性、退化能力、寒冷冲击与正确战斗表）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十八批修复记录）

**备注**:
- `xiclotl.md` 的主要问题是属性段只剩裸骰串，战斗说明没有被干净收口
- `nython-ghuli.md` 除了属性块断裂外，还混入了原文中不存在的“抓握（战技）”条目

---

## [2026-05-07] fix | 第二轮抽检继续（servitor 修复 + star-spawn 立项）

**操作类型**: 内容修复 + 误植追踪 + 台账同步
**描述**: 重建外神仆役页面，并把 `star-spawn.md` 正式登记为高疑似重复误植页，避免后续继续把它当成正常条目
**修复的页面**:
- entities/servitor-of-the-outer-gods.md（恢复外神仆役的完整属性、疯狂之乐、触手抓取、护甲与法术说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第二十九批修复记录，并新增 `star-spawn.md` 追踪项）

**备注**:
- `servitor-of-the-outer-gods.md` 属于典型“正文正确但属性和攻击段被 OCR 拆裂”的页面
- `star-spawn.md` 当前与 `star-vampire.md` 近乎整页重复，而真正的星之眷族内容已在 `star-spawn-of-cthulhu.md` 中存在，后续应单独裁定

---

## [2026-05-07] fix | 重复误建页降级（star-spawn 迁出实体目录）

**操作类型**: 目录清理 + 误植降级 + 索引修正
**描述**: 将误建的 `star-spawn.md` 从实体目录迁出到综合分析目录，避免继续把重复页当作正式怪物实体
**修复的页面**:
- synthesis/star-spawn.md（新增误植排查页，记录当前结论与正确指向）
- wiki/index.md（移除实体区中的 `star-spawn`，补入综合分析区，并更新统计数字）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十批修复记录）

**备注**:
- 原 `entities/star-spawn.md` 正文与 `star-vampire.md` 基本重复
- 真正的“克苏鲁的星之眷族”内容已由 `star-spawn-of-cthulhu.md` 承载

---

## [2026-05-07] fix | 双来源拼接页收口（star-spawn-of-cthulhu）

**操作类型**: 内容修复 + 双来源整合 + 台账同步
**描述**: 重建 `star-spawn-of-cthulhu.md`，把旧版核心书内容与《怪物之锤》补充内容整合成单一、可维护的条目
**修复的页面**:
- entities/star-spawn-of-cthulhu.md（恢复示梦、完整属性、统一战斗段、护甲与法术说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十一批修复记录）

**备注**:
- 该页此前并非单纯 OCR 断列，而是“前半旧版条目 + 后半损坏补充块”的双层拼接页
- 本次修复后，条目保留双来源语义，但不再保留坏掉的附加区块

---

## [2026-05-07] fix | 错配与双模板页收口（child-of-ubbo-sathla / shoggoth-master）

**操作类型**: 内容修复 + 错配纠正 + 台账同步
**描述**: 修复双体型表塌陷页，并纠正一个“文件名是 A、正文却是 B”的实体错配问题
**修复的页面**:
- entities/child-of-ubbo-sathla.md（恢复中型/大型双模板属性、攫取/猛冲与消化规则）
- entities/shoggoth-master.md（按源文改回真正的修格斯使役者页面，移除误植的原型修格斯内容）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十二批修复记录）

**备注**:
- `child-of-ubbo-sathla.md` 的主要问题是双体型表塌陷，导致均值列和战斗说明完全失去可读性
- `shoggoth-master.md` 则属于更高风险的正文错配，原文件名和标题都指向“修格斯使役者”，正文却整页是“原型修格斯”

---

## [2026-05-07] fix | 裸骰串页继续收口（star-vampire / gottswood-goblin）

**操作类型**: 内容修复 + OCR 断列收口 + 台账同步
**描述**: 继续处理“正文仍在，但属性表和战斗段只剩裸骰串或中途插入残余标题”的怪物页
**修复的页面**:
- entities/star-vampire.md（恢复星之精的完整属性、隐形、缠绕/撕咬机制与法术说明）
- entities/gottswood-goblin.md（恢复戈茨伍德地精的完整属性、月相设定、护甲与法术说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十三批修复记录）

**备注**:
- `star-vampire.md` 同时也是此前 `star-spawn` 重复误植链上的真实目标页
- `gottswood-goblin.md` 的问题更偏向标准 OCR 断列，并夹带了“神话中的怪物”残余标题

---

## [2026-05-07] fix | 裸骰串页继续收口（bigfoot / cold-ones）

**操作类型**: 内容修复 + OCR 断列收口 + 台账同步
**描述**: 继续处理“属性块塌陷、战斗段被截断或标题污染”的条目，重建大脚怪/雪人与寒冷者页面
**修复的页面**:
- entities/bigfoot-sasquatch.md（恢复大脚怪/雪人的完整属性、投石攻击、护甲与雪人注释）
- entities/cold-ones.md（恢复寒冷者的完整属性、冰冻之触、技能、法术与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十四批修复记录）

**备注**:
- `bigfoot-sasquatch.md` 原页混入了异常标题字符，且属性段与注释挤成了一团
- `cold-ones.md` 的主要问题是战斗段在“由于其攻击类似冻伤”处直接断裂

---

## [2026-05-07] fix | 裸骰串页继续收口（cthughan / people-of-kn-yan）

**操作类型**: 内容修复 + OCR 断列收口 + 台账同步
**描述**: 继续处理属性块塌陷与攻击表粘连页，重建蠕行者与昆扬之民页面
**修复的页面**:
- entities/cthughan.md（恢复蠕行者的完整属性、解体、护甲与法术说明）
- entities/people-of-kn-yan.md（恢复昆扬之民的完整属性、心灵感应、虚体化、裂解射线枪与攻击表）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十五批修复记录）

**备注**:
- `cthughan.md` 属于典型“正文正确，但整块属性表只剩裸骰串”的页面
- `people-of-kn-yan.md` 则是高信息量条目，正文主体完好，但属性与战斗段已经粘连到难以直接阅读

---

## [2026-05-07] fix | 残余旧标题与双来源坏块收口（dream-crystal-guardian / ghast）

**操作类型**: 内容修复 + 双来源整合 + 台账同步
**描述**: 继续处理“内容大体存在，但仍保留旧模板标题或后半坏掉补充块”的实体页，重建梦境结晶器守护者与妖鬼页面
**修复的页面**:
- entities/dream-crystal-guardian.md（清除 `## 神话中的怪物` 残余标题，恢复完整属性、缠绕机制、法术与理智说明）
- entities/ghast.md（将旧核心书页与《怪物之锤》坏块整合为统一双来源条目，恢复完整背景、属性与来源段）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十六批修复记录）

**备注**:
- `dream-crystal-guardian.md` 更像“结构老化”问题，正文主体其实还在，但可读性已经被旧模板拖坏
- `ghast.md` 则是标准双来源拼接页，最危险的地方在于它看起来像完整页面，实际上后半截已经和相邻条目/OCR 坏块缠在一起

---

## [2026-05-07] fix | 串页与双形态模板继续收口（dhol-retainers / ithaquas-spawn）

**操作类型**: 内容修复 + 串页纠正 + 台账同步
**描述**: 继续处理“旧标题残留之外还夹带相邻条目正文”与“双形态模板严重塌陷”的实体页，重建多尔眷族与伊塔库亚眷族页面
**修复的页面**:
- entities/dhol-retainers.md（移除混入的绿渊眷族内容，恢复多尔眷族的心灵读取、吸收、隐形与傀儡战斗规则）
- entities/ithaquas-spawn.md（恢复人形/怪物形态双模板、天气控制、护甲与理智损失说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十七批修复记录）

**备注**:
- `dhol-retainers.md` 原页风险很高，因为前半段看似是对的，但后半已经被完全缝进另一只怪物
- `ithaquas-spawn.md` 则属于表格和说明同时塌陷，尤其双形态均值、体格与移动数据最容易在后续引用时出错

---

## [2026-05-07] fix | 旧模板尾段与双模板断裂继续收口（chakota / fishers-from-outside）

**操作类型**: 内容修复 + 结构重排 + 台账同步
**描述**: 继续处理“旧标题残留 + 护甲法术理智尾段连写”与“双模板攻击段粘连”的实体页，重建查寇塔与空鱼页面
**修复的页面**:
- entities/chakota.md（恢复完整属性、可变体型、噬咬对抗、护甲与理智损失说明）
- entities/fishers-from-outside.md（恢复次级/上级双模板、抓取与脱身规则、上级空鱼致死判定说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十八批修复记录）

**备注**:
- `chakota.md` 的主要问题是属性表被截掉一半，护甲/法术/理智段又被甩到旧标题后面
- `fishers-from-outside.md` 则是双模板页常见的粘连病，攻击表和护甲判定已经挤成一整团

---

## [2026-05-07] fix | 特殊能力断裂页收口（dark-crawler）

**操作类型**: 内容修复 + 结构重排 + 台账同步
**描述**: 继续处理“正文主体还在，但特殊能力段与护甲法术尾段已断裂连写”的条目，重建黑暗蠕行者页面
**修复的页面**:
- entities/dark-crawler.md（恢复心电感应、能量虹吸、护甲、法术与理智损失说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第三十九批修复记录）

**备注**:
- `dark-crawler.md` 的风险不在于整页错配，而在于最关键的能力说明已经被切成上下两块，后续引用时极容易漏掉“能量虹吸”

---

## [2026-05-07] fix | 重复误建页降级与尾段连写收口（bloodworm / follower-of-unutterable-oath）

**操作类型**: 内容修复 + 误植降级 + 索引修正
**描述**: 一方面重建不可名状誓言的信徒页面，另一方面将重复落库的 `bloodworm` 从正式实体目录迁出，避免与已修复的巨噬蠕虫条目重复
**修复的页面**:
- entities/follower-of-unutterable-oath.md（恢复基础数据、夜间进食、抓取战技、护甲与法术说明）
- synthesis/bloodworm.md（新增误植排查页，记录 `bloodworm` 与 `bhole` 的重复关系）
- wiki/index.md（移除正式实体区中的 `bloodworm`，补入综合分析区，并更新统计数字）
- concepts/cthulhu-mythos.md（将“巨噬蠕虫”正式互链改指向 `bhole.md`）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十批修复记录）

**备注**:
- `bloodworm.md` 的问题已经不是结构损坏，而是实体身份本身错了；它整页内容都在重复“巨噬蠕虫”
- `follower-of-unutterable-oath.md` 则属于典型“主体信息都在，但基础数据、技能、护甲和法术挤成一坨”的页面

---

## [2026-05-07] fix | 旧模板残留页继续收口（witherer / windwalker）

**操作类型**: 内容修复 + 模板重建 + 台账同步
**描述**: 继续处理“正文主体还在，但感染机制、能力段和尾部说明仍沿用旧模板拼接”的实体页，重建枯败者与风行者页面
**修复的页面**:
- entities/witherer.md（恢复感染流程、孢子之吻、治疗说明、护甲与理智损失）
- entities/windwalker.md（恢复形成方式、空舞、冰心、啃咬恐惧与法术说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十一批修复记录）

**备注**:
- `witherer.md` 最关键的问题是感染与治疗段很重要，但原页把属性、技能和尾部说明切成了多段
- `windwalker.md` 则更像“信息没全丢，但结构已经很老”，后续如果不重排，读者很难快速定位形成方式和永久杀死条件

---

## [2026-05-07] fix | 钻地魔虫命名冲突收口（chthonian / dhole）

**操作类型**: 内容修复 + 误植降级 + 索引修正
**描述**: 处理 `Chthonian / Dhole / Bhole` 三者在仓库中的命名和正文冲突，保留 `chthonian` 为正式钻地魔虫页，并将重复的 `dhole` 迁出实体目录
**修复的页面**:
- entities/chthonian.md（恢复正式钻地魔虫条目，补回成年体数据、心灵控制、地震能力与战斗段）
- synthesis/dhole.md（新增命名冲突排查页，记录 `dhole` 与 `chthonian`/`bhole` 的冲突关系）
- wiki/index.md（移除正式实体区中的 `dhole`，补入综合分析区，并更新统计数字）
- entities/serpent-people-degenerate.md（将旧 `dhole` 互链改指向正式 `chthonian.md`）
- synthesis/bloodworm.md（同步更新对 `dhole` 的引用路径）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十二批修复记录）

**备注**:
- `dhole.md` 的问题已经不只是结构坏掉，而是和 `chthonian.md` 整页重复，同时又和“巨噬蠕虫”的译名链纠缠在一起
- 本次处理后，正式“钻地魔虫”只由 `chthonian.md` 承担，正式“巨噬蠕虫”只由 `bhole.md` 承担

---

## [2026-05-07] fix | 旧模板残留线清零（dagon / umr-at-tawil）

**操作类型**: 内容修复 + 错配纠正 + 台账同步
**描述**: 收掉最后两张仍残留旧模板特征的页面，并纠正一个“文件名是 Umr At-Tawil、正文却是界外幽鬼”的高风险错配页
**修复的页面**:
- entities/dagon.md（按《怪物之锤 第二卷》重建为完整大衮页，补回大衮与海德拉设定、法术、典型显现与召唤能力）
- entities/umr-at-tawil.md（按《怪物之锤 第二卷》重建为真正的塔维尔·亚特乌姆尔页）
- synthesis/umr-at-tawil.md（新增误植排查页，记录旧 `umr-at-tawil` 与“界外幽鬼”的错配关系）
- wiki/index.md（补入综合分析区中的 `umr-at-tawil` 误植排查记录，并更新统计数字）
- concepts/cthulhu-mythos.md（将 `umr-at-tawil` 的显示语义从“界外幽鬼”修正为“塔维尔·亚特乌姆尔”）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十三批修复记录）

**备注**:
- `dagon.md` 原页更像一块“教团誓言摘录”，单独看并非完全错误，但已经不足以支撑正式神祇页
- `umr-at-tawil.md` 则属于高风险错配页，若不处理会持续把两个完全不同的实体混成一个

---

## [2026-05-07] fix | 双来源拼接页归一与深潜者主条目去缠绕（shoggoth / byakhee / deep-ones）

**操作类型**: 内容修复 + 结构归一 + 主条目边界收口
**描述**: 继续从“旧模板线清零”转向更细粒度的双来源整合复核，重写修格斯与拜亚基的双来源页面，并把深潜者页从“主条目 + 誓言 + 变体 + 混种”的缝合状态收束回正式主条目
**修复的页面**:
- entities/shoggoth.md（重建为统一双来源页，恢复伪声、吞噬、抗性与再生，并把修格斯主宰/修格斯使役者改为互链）
- entities/byakhee.md（重建为统一双来源页，恢复星际坐骑、空间折跃推测、紧咬吸血与完整战斗数据）
- entities/deep-ones.md（移除正文中重复混入的大衮誓言、修格斯使役者与混种深潜者大段内容，重建为正式深潜者主条目）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十四批修复记录）

**备注**:
- `shoggoth.md` 和 `byakhee.md` 都属于“前半旧页可读、后半怪物之锤补块直接糊上去”的典型双来源拼接页
- `deep-ones.md` 的主要风险不只是结构坏，而是它持续把已经有独立页面的内容重新塞回主条目，后续维护极易出现一改多处、彼此打架的情况

---

## [2026-05-07] fix | 混种深潜者独立页收口（deep-one-hybrid）

**操作类型**: 内容修复 + 结构归一 + 互链纠偏
**描述**: 趁深潜者主条目刚刚完成去缠绕，立即收口其独立的混种页，避免主条目与子条目继续互相重复、互相污染
**修复的页面**:
- entities/deep-one-hybrid.md（按双来源重建为统一页面，恢复延迟转化、海之召唤、水下适应、技能与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十五批修复记录）

**备注**:
- `deep-one-hybrid.md` 原页的核心信息并没有完全错，但仍保留了老式“正文结束后再糊一整块怪物之锤原文”的结构
- 这次处理后，深潜者谱系中的主条目、混种条目与修格斯使役者条目边界已经明显清楚得多

---

## [2026-05-07] fix | 修格斯系与古老者系双来源页继续归一（shoggoth-lord / elder-things）

**操作类型**: 内容修复 + 双来源归一 + 谱系互链整理
**描述**: 沿着刚修好的修格斯与深潜者主线继续清理相关高复杂页面，重建修格斯主宰与远古种族条目，移除旧补充块与坏掉的双形态尾段
**修复的页面**:
- entities/shoggoth-lord.md（重建双形态页面，恢复拟态、失控变形、吞噬、双形态数值与理智损失）
- entities/elder-things.md（重建远古种族页面，恢复古老者文明、退化、战争、神秘科技与战斗数据）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十六批修复记录）

**备注**:
- `shoggoth-lord.md` 的风险点在于双形态表格和尾部补充块都坏了，若不重建，后续几乎无法可靠引用其均值与战斗规则
- `elder-things.md` 虽然主体信息一直大致正确，但《怪物之锤》补块仍悬在页尾，且旧页把 `CON`、`INT` 等均值沿用了较粗糙版本，本次已统一到更完整的双来源表述

---

## [2026-05-07] fix | 幻梦境飞行怪物页继续收口（shantak-bird / nightgaunt）

**操作类型**: 内容修复 + 双来源归一 + 关系梳理
**描述**: 继续处理仍保留旧补充块的高频幻梦境怪物页面，重建夏塔克鸟与夜魇条目，恢复飞行、擒抱、梦境拖拽与高空抛落等关键规则
**修复的页面**:
- entities/shantak-bird.md（重建夏塔克鸟页面，恢复危险坐骑、星际飞行、噙咬控制与坠落风险）
- entities/nightgaunt.md（重建夜魇页面，恢复诺登斯仆从定位、擒抱协同、搔痒惩罚与梦境牵引）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十七批修复记录）

**备注**:
- `shantak-bird.md` 的风险点主要在于后半《怪物之锤》块虽可辨认，但战技与高空坠落规则仍是碎片状态
- `nightgaunt.md` 则已经在页尾直接断进别的怪物，若不彻底重写，读者很难判断哪些能力属于夜魇本身

---

## [2026-05-07] fix | 高频核心实体页继续归一（mi-go / ghoul / colour-out-of-space）

**操作类型**: 内容修复 + 双来源归一 + 主条目边界收口
**描述**: 继续优先处理最容易被全库反复引用的核心怪物页，重建米·戈、食尸鬼与星之彩主条目，去掉旧尾块并收清主条目与装备/变体/教团之间的边界
**修复的页面**:
- entities/mi-go.md（保留星际真菌、催眠、光隙、脑筒手术等主设定，并把变体与寒雾喷射器降回互链）
- entities/ghoul.md（恢复地下隧道、幻梦境通路、转化传说、食尸鬼教团与完整战斗规则）
- entities/colour-out-of-space.md（统一生态循环、厌光、属性吸取、精神攻击、瓦解与实体化规则）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十八批修复记录）

**备注**:
- `mi-go.md` 原页的核心问题不是正文错，而是把“种族主条目 + 多种形态 + 装备条目”全缝进了一张页里，后续维护非常容易串改
- `ghoul.md` 和 `colour-out-of-space.md` 则属于典型的“主要信息足够，但补充块没有真正并入结构”，看上去完整，实际很难继续安全扩写

---

## [2026-05-07] fix | 高引用古老种族与超维猎手继续收口（hounds-of-tindalos / flying-polyp / serpent-people）

**操作类型**: 内容修复 + 双来源归一 + 谱系边界收口
**描述**: 继续处理高引用、高复杂度的古老种族与超维猎手页面，重建廷达罗斯猎犬、飞水螅与蛇人条目，去除旧尾块并恢复它们最关键的能力与历史脉络
**修复的页面**:
- entities/hounds-of-tindalos.md（恢复角度现身、永恒追猎、蓝色脓水、舌击与平凡武器免疫）
- entities/flying-polyp.md（恢复远古征服、与伊斯战争、隐形、触手、风击波、定身与风暴）
- entities/serpent-people.md（恢复两代王国、休眠与退化、伊格/撒托古亚分裂、毒牙、法术与科技）
- wiki/synthesis/wiki-repair-tracker.md（同步第四十九批修复记录）

**备注**:
- `hounds-of-tindalos.md` 的旧页主体虽然可读，但《怪物之锤》里关于蓝色脓水、追猎与护甲碎裂的关键信息仍挂在尾段，没有真正并入正文
- `flying-polyp.md` 和 `serpent-people.md` 的问题则更偏“设定密度很高、老模板拖累了结构”，如果不重写，后续任何细节补充都很容易把主条目再次拖回缝合状态

---

## [2026-05-07] fix | 高复杂主条目继续归一（yithian / dark-young / vampire）

**操作类型**: 内容修复 + 双来源归一 + 主条目边界收口
**描述**: 继续处理仍残留旧补充块的高复杂主条目，重建伟大种族伊斯、黑山羊幼崽与吸血鬼页面，尽量把“主条目”和“装备/变体/民俗可选项”分层写清
**修复的页面**:
- entities/yithian.md（重建主条目，保留时间旅行、心智交换、旧锥体与未来甲虫体框架，剥离尾部武器与未来虫群细节）
- entities/dark-young.md（重建黑山羊幼崽页面，恢复母神代理、攫取、践踏、异界肉身与法术说明）
- entities/vampire.md（重建吸血鬼页面，改为“核心规则 + 可选民俗特征”的稳定结构）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十批修复记录）

**备注**:
- `yithian.md` 的问题最典型：旧页把主条目、未来宿主体与 `C 型闪电枪` 全塞在一起，信息多但边界极乱
- `vampire.md` 则不是“错页”，而是天然带有地区传说差异；这类页最适合做成守秘人可裁定的规则框架，而不是过度实锤某一种说法

---

## [2026-05-07] fix | 收尾阶段继续清核心怪物页（dimensional-shambler / hunting-horror / mummy）

**操作类型**: 内容修复 + 双来源归一 + 缺损补全
**描述**: 进入本阶段尾声后，继续清理仍残留旧补充块或数据缺损的核心怪物页，重建空鬼、惊惧猎手与木乃伊页面
**修复的页面**:
- entities/dimensional-shambler.md（补回完整数值、理智损失、抓握与跨维拖拽规则）
- entities/hunting-horror.md（恢复奈亚拉托提普关联、缠卷、飞掠搬运、畏光可选弱点与战斗数据）
- entities/mummy.md（统一不死守卫、绞杀、火焰易伤、护甲与理智损失）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十一批修复记录）

**备注**:
- `dimensional-shambler.md` 是这轮里最危险的一页，因为它表面上像成品，实际上主数据几乎全空着
- `mummy.md` 则更像“两个版本的理智损失和火焰规则都存在”，本次采取了更诚实的写法，把传统恐怖表现强度和默认规则区分开来

---

## [2026-05-07] fix | 双来源尾块清零收官（ghoul-servant-of-ghlaaki / ghost / rat-thing / yugg / werewolf）

**操作类型**: 内容修复 + 双来源归一 + 残留尾块清零
**描述**: 处理最后 5 个仍保留 `## 怪物之锤补充数据` 尾块的正式实体页，统一改写进正文结构，并修正 `yugg.md` 的实体错贴问题
**修复的页面**:
- entities/ghoul-servant-of-ghlaaki.md（补回“新近转化”与“逐渐腐烂”两种常见形态，统一格拉基渗透仆从设定）
- entities/ghost.md（保留模板页写法，补齐典型属性、锚点、骚灵环境干涉与安息方案）
- entities/rat-thing.md（恢复施法协助与 POW 供能规则，并校正熟面孔理智损失）
- entities/yugg.md（确认应为“乔乔人”正式页，删除误贴的“幽格”尾段，重整为神话污染人类群体）
- entities/werewolf.md（统一狼人默认数据、巨狼变体、银与火的克制关系及咬伤传播规则）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十二批修复记录）

**备注**:
- `yugg.md` 是这批里唯一的实体边界问题，不是简单尾块残留，而是页尾混入了完全不同的“幽格”条目
- 本批完成后，`entities/` 目录里残留的 `## 怪物之锤补充数据` 已清零，当前阶段的“双来源尾块清零”目标完成

---

## [2026-05-07] fix | 第二阶段抽检继续推进（nyos-kegai / servants-of-ygolonac / will-o-the-wisp）

**操作类型**: 内容修复 + 结构归一 + 机制边界澄清
**描述**: 在尾块清零完成后，开始处理“主体大致可用，但仍保留早期堆叠式写法或机制边界不够清晰”的神话页
**修复的页面**:
- entities/nyos-kegai.md（重整为统一结构，明确伪装、附体、生命汲取、精神回响与感染链）
- entities/servants-of-ygolonac.md（补清巢群传播、掌中之口、低语腐化与群体围杀逻辑）
- entities/will-o-the-wisp.md（收束成民俗征兆型怪物页，保留冷焰伤害、误导旅者与可选洞察）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十三批修复记录）

**备注**:
- `nyos-kegai.md` 的主要问题不是“错”，而是旧页把高危机制都堆在一起，没有划清默认规则与后果链条
- `will-o-the-wisp.md` 则需要克制处理；它本来就偏轻量与征兆性，最该避免的是把它写成过强的战斗怪物

---

## [2026-05-07] fix | 批量重整野兽附录页（alligator-crocodile / bear / horse / camel / african-elephant / rhinoceros / wild-boar / orca / hippopotamus / megalodon）

**操作类型**: 批量结构标准化 + 来源抽检 + 附录页提升
**描述**: 根据用户反馈，调整节奏，不再零碎推进；本轮将一组仍偏“早期简表”的野兽页一次性提升为统一结构的正式附录页
**修复的页面**:
- entities/alligator-crocodile.md（补清伏击、拖拽、翻甩与水域压制）
- entities/bear.md（按黑熊、灰熊、北极熊分层整理）
- entities/horse.md（重整马、骡、驴的坐骑与役畜定位）
- entities/camel.md（补清单峰骆驼的运输与战斗信息）
- entities/african-elephant.md（强化卷抓、践踏与“地形级威胁”定位）
- entities/rhinoceros.md（突出厚皮、冲锋与短距离爆发）
- entities/wild-boar.md（补清树林伏击与獠牙突刺场景）
- entities/orca.md（强调群猎与海域主场）
- entities/hippopotamus.md（补清摔打、碾压与冲击船只）
- entities/megalodon.md（统一成灾难级海洋掠食者页面）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十四批修复记录）

**备注**:
- 这批页面大多不是“正文错误”，而是长期停留在数据表可用、正文层次偏弱的阶段
- 本轮开始，修复策略已切换为“按主题成组推进”，后续会继续保持更大的批次

---

## [2026-05-07] fix | 批量重整小型危险生物与群体事件页（bat-swarm / rats-swarm / spider / scorpion / snake / snapping-turtle / piranha）

**操作类型**: 批量结构标准化 + 机制页澄清 + 群体规则整理
**描述**: 继续按主题成组推进，处理一批长期处于“可用但层次不清”的小型危险生物与群体伤害条目
**修复的页面**:
- entities/bat-swarm.md（整理群体规模变化、击杀单只与伤害递增逻辑）
- entities/rats-swarm.md（明确总攻击值分配与围攻战技）
- entities/spider.md（保持为毒伤/环境危险机制页，补清正式结构）
- entities/scorpion.md（统一蝎毒判定框架与地区范例）
- entities/snake.md（规范蟒蛇/毒蛇双结构与毒液规则）
- entities/snapping-turtle.md（补清拟鳄龟/真鳄龟与咬住不放后果）
- entities/piranha.md（继续作为群体事件页，收清自动伤害与逃生机制）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十五批修复记录）

**备注**:
- 这批里最需要克制的是 `spider` 与 `piranha`：它们本来就不是标准战斗怪物卡，最重要的是把“为什么这里只保留机制页”写清楚

---

## [2026-05-07] fix | 批量重整常见荒野遭遇兽类页（big-cat / dog / bird / giant-octopus / gorilla / lake-monster）

**操作类型**: 批量结构标准化 + OCR 损伤清理 + 场景定位补全
**描述**: 延续大批量推进方式，处理一组常被模组直接调用、但仍带有明显早期表格感或提取损伤的野兽页
**修复的页面**:
- entities/big-cat.md（按豹、狮、虎等分层整理扑咬与压制）
- entities/dog.md（清理结构破损最明显的一页，并显式标注缺损字段）
- entities/bird.md（补足金雕、秃鹰、神鹫的结构与用途）
- entities/giant-octopus.md（明确多触手抓取与拖拽撕咬）
- entities/gorilla.md（补清威吓、捶打、抓倒与猛跃）
- entities/lake-monster.md（收束为奇观型大湖生物条目）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十六批修复记录）

**备注**:
- 这批的核心不是“纠正大错”，而是把高调用页从“能用”提升到“后续任何人都能稳妥扩写”

---

## [2026-05-07] fix | 继续清破损高收益页（black-dog / shark / wasp-bee-swarm）

**操作类型**: 内容修复 + OCR 破损修复 + 机制页收束
**描述**: 继续高速推进，优先处理那些原页仍有明显破损、但又经常会被直接调用的条目
**修复的页面**:
- entities/black-dog.md（恢复完整属性表、燃烧之眼、理智损失与民俗定位）
- entities/shark.md（把鲨鱼多种模板页从破损表格重写为标准附录页）
- entities/wasp-bee-swarm.md（继续保持为环境性危机条目，整理休克与追击机制）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十七批修复记录）

**备注**:
- `shark.md` 是这批里修复收益最高的一页：原页并非完全错误，但排版混乱到已经不适合作为稳定引用源

---

## [2026-05-07] fix | 继续重写高收益问题页（minister-of-hali / golem / jersey-devil / mental-parasite / servants-of-cthulhu / man-eating-plant）

**操作类型**: 内容修复 + 结构重写 + 机制页边界澄清
**描述**: 继续按大批量方式推进，这一轮集中处理 6 个仍带有早期堆叠、截断或错误字段残留的高收益条目，并同步把两类“应保留为框架页”的页面定型下来
**修复的页面**:
- entities/minister-of-hali.md（删除错误的“亲吻”战技残留，按原文重建死亡之舞、利刃袍与卡尔克萨侍从定位）
- entities/golem.md（重写为完整民俗造物页，补清 `Aemaeth`、创造代价、每周 5% 失控累积与控制/摧毁方法）
- entities/jersey-devil.md（整理为可复用的边陲怪物模板，并显式标注原始 OCR 中 `HP 18` 与 `生命值 19` 的冲突）
- entities/mental-parasite.md（明确这是精神侵染机制页，而不是肉搏怪物卡；补清头脑食粮、秘密觉察、SAN 崩溃与合并 POW）
- entities/servants-of-cthulhu.md（重建一页此前严重截断的核心条目，补回转化、十年成长、灰气再生与保守基线）
- entities/man-eating-plant.md（保留为可定制框架页，补清主动型/陷阱型两种使用方式与消化机制）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十八批修复记录）

**备注**:
- 这批里最重要的不是“补字数”，而是把 `servants-of-cthulhu.md` 这种几乎断页的条目重新变回可引用页面
- `mental-parasite.md` 与 `man-eating-plant.md` 则继续坚持保守原则，不为了“看起来完整”而捏造并不存在的完整战斗数据

---

## [2026-05-07] fix | 再收一组破损神话页（green-abyss-spawn / martense-clan / tindalosian-hybrid / brothers-of-chaugnar-faugn）

**操作类型**: 内容修复 + 断页重建 + 框架边界澄清
**描述**: 在第五十八批之后继续往前压，优先处理几张仍然停留在“开头段落 + 错位数据”状态的神话页，把它们重新拉回可维护、可引用的正式页面
**修复的页面**:
- entities/green-abyss-spawn.md（补回深海社会、催眠之歌、完整属性与恢复机制）
- entities/martense-clan.md（重建退化食人群体条目，修复裸公式并补清黑暗之眼）
- entities/tindalosian-hybrid.md（从单段实验记录重建为完整条目，恢复脓水、吞咬、舌击与相位移动机制）
- entities/brothers-of-chaugnar-faugn.md（清理严重错位数据，重建次级弟兄，并把上级弟兄改为诚实的生成框架）
- wiki/synthesis/wiki-repair-tracker.md（同步第五十九批修复记录）

**备注**:
- `brothers-of-chaugnar-faugn.md` 旧页的问题不是“信息少”，而是把次级/上级数据和无关数字搅在一起，已经不适合继续增量修补
- 这一批继续保持保守原则：来源只给生成规则的地方，就写生成规则，不假装它已经有一张干净的固定怪物卡

---

## [2026-05-07] fix | 再收双形态页与设定档案页（shaggai-hybrid / yaddith-gho / brood-of-eihort）

**操作类型**: 内容修复 + 双形态重建 + 档案页收束
**描述**: 继续沿着“先救最早期、最难直接引用的页”这条线推进，这一轮处理一张双形态混血页、一张被误当怪物卡的设定页，以及一张已严重串页的集合体怪物页
**修复的页面**:
- entities/shaggai-hybrid.md（重建人类形态与成熟形态双表，并补清女王调整、蜕变与酸液口器）
- entities/yaddith-gho.md（确认其本质为雅迪斯毁灭史资料页，改写为档案/背景条目）
- entities/brood-of-eihort.md（移除串入的无关文本，重建人形集合体与蜘蛛群两层结构）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十批修复记录）

**备注**:
- `yaddith-gho.md` 这类页最怕“看起来像怪物页，所以硬往怪物页里补”，本次是反过来做了收束
- `brood-of-eihort.md` 仍有少量均值字段未在 OCR 中完整保留，因此本次优先保证机制与页面结构可信、好维护

---

## [2026-05-07] fix | 再收六张早期模板页（child-of-the-sphinx / cold-waste-ghoul-hound / crawler / inhabitants-of-lgyhx / slor-dwellers / reanimator）

**操作类型**: 内容修复 + 结构重写 + 双形态页整理
**描述**: 延续高吞吐推进，继续优先清理还停留在 4 月早期模板状态、且正文明显不适合直接引用的条目。这一轮一次性补了 6 页，尽量让它们重新具备“开箱可用”的结构
**修复的页面**:
- entities/child-of-the-sphinx.md（恢复埃及守卫战士定位、基础属性与武装结构）
- entities/cold-waste-ghoul-hound.md（补回完整属性、追猎机制、死亡嚎叫与死亡凝视）
- entities/crawler.md（按“恶魔攀缘者”重建为寄生种子条目，补清抓取与萌发生命线）
- entities/inhabitants-of-lgyhx.md（恢复利克斯星住民的外星武器与技能结构）
- entities/slor-dwellers.md（整理活体声音/半实体双形态表与音爆机制）
- entities/reanimator.md（恢复化学复活体与身体部件独立行动规则）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十一批修复记录）

**备注**:
- 这批里 `child-of-the-sphinx.md` 与 `inhabitants-of-lgyhx.md` 都属于“原文其实有数据，但旧页几乎没接住”的典型高收益页
- `slor-dwellers.md` 则继续坚持机制边界，不为了整齐而伪造它并不存在的常规肉体属性

---

## [2026-05-07] fix | 继续清高价值总述页（gofnn-hupadgh-shub-niggurath / tindalos-tyrant / million-favored-ones）

**操作类型**: 内容修复 + 结构重写 + 上位类别页收束
**描述**: 继续提速，这一轮处理三张价值高但旧页明显不完整的条目：一张莎布-尼古拉斯变种族群页、一张廷达洛斯高阶实体页，以及一张奈亚拉托提普麾下上位类别页
**修复的页面**:
- entities/gofnn-hupadgh-shub-niggurath.md（重建戈弗恩·胡帕德戈、低等萨悌、高等萨悌与猩红之环仪式）
- entities/tindalos-tyrant.md（补回完整属性、廷达洛斯之力、蓝色脓水、吞咬与舌击）
- entities/million-favored-ones.md（明确这是“总述 + 范例”页，而非单一固定怪物卡）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十二批修复记录）

**备注**:
- `million-favored-ones.md` 的关键不是补一个漂亮表格，而是把“这是一个被奈亚拉托提普拣选的异类集合”这层意思写清
- `tindalos-tyrant.md` 则是典型的“原文数据和能力都在，旧页只接住了一半”，修复收益很高

---

## [2026-05-07] fix | 清掉最后四张 4 月早期实体页（shan-insect-from-shaggai / mi-go-freeze-spray / nagaae / voormi）

**操作类型**: 内容修复 + 页面重写 + 错页清理
**描述**: 继续按大批量方式推进，这一轮一次性处理 `entities/` 下最后四张仍停留在 `2026-04-14` 早期模板状态的页面，重点是把缺失战斗段、串页内容和塌陷双模板全部收口
**修复的页面**:
- entities/shan-insect-from-shaggai.md（重建为完整寄生种族页，补回夏盖背景、宿主寄生、精神攻击与神经鞭）
- entities/mi-go-freeze-spray.md（删除误串入的百万蒙宠者正文，并收束为“神话造物/异星武器”页）
- entities/nagaae.md（恢复完整属性表、毒液啃咬、死亡黑泥与技能护甲说明）
- entities/voormi.md（重建普通/变异双模板，补清希帕波利亚背景、武器使用与理智损失分层）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十三批修复记录）

**备注**:
- `mi-go-freeze-spray.md` 原页的问题最直接：前半页是对的，后半页整块串到了别的怪物，已彻底切干净
- 这一轮完成后，`entities/` 中挂着 `> 最后更新: 2026-04-14` 的早期实体页已清零

---

## [2026-05-07] fix | 补厚一组过薄的神祇与上位实体页（lesser-old-ones / hypnos / nodens / nug-and-yeb / tru-nembra）

**操作类型**: 内容补厚 + 结构重写 + 高位实体页整理
**描述**: 在清完 4 月早期实体页之后，继续按高吞吐方式推进，这一轮改抓“不是错页，但明显过薄”的神祇/上位实体页，把它们从简短摘要页提升为更适合长期引用的正式页面
**修复的页面**:
- entities/lesser-old-ones.md（补回无名守望者定位、教团、宇宙洞察、抛掷战技与完整数据）
- entities/hypnos.md（补清梦境管理者/寄生者双重解释、历史形象、击溃意识与梦境教团）
- entities/nodens.md（重写为更诚实的高位旧神设定页，强化其策略性而非“人类保护神”形象）
- entities/nug-and-yeb.md（补回黑色太阳、终末预言、昆扬教团、子嗣与完整战斗数据）
- entities/tru-nembra.md（补回史前灾音、音乐家受染链、声波伤害尺度与外神级音乐灾变）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十四批修复记录）

**备注**:
- 这批主要解决的是“信息方向对，但薄到不够稳定引用”的问题
- `nodens.md` 继续保留为高位设定页，而不是伪造一张并不可靠的常规近战怪物卡

---

## [2026-05-07] fix | 继续清理偏薄与错串的支配者页（iod / ossadagowah / cymaeghi / zathog）

**操作类型**: 内容补厚 + 错串清理 + 结构重写
**描述**: 顺着上一轮的神祇补厚继续往下压，这一轮处理四张仍然偏像压缩笔记的支配者页，其中一张还混入了别的实体内容，优先把它们重新拉回可稳定引用的正式页面
**修复的页面**:
- entities/iod.md（补回灵魂猎者定位、定身、意志吸取、白光猎杀与追猎机制）
- entities/ossadagowah.md（移除误串入的尼约格萨残片，重建星兽条目、暗影形态与召唤条件）
- entities/cymaeghi.md（补清神泪、眼泪酒、赘生眼、黑暗能力与澳洲教团结构）
- entities/zathog.md（补回扎尔星背景、乌波-萨斯拉关联、子嗣生成、可变鞭打与抓握消化）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十五批修复记录）

**备注**:
- `ossadagowah.md` 的问题最明显：旧页把别的支配者内容拖了进来，这次已经彻底切开
- 这一批继续遵循同一原则：不捏造不存在的信息，只把原文本来就有的层次真正接住

---

## [2026-05-07] fix | 继续补厚高概念支配者页（hastalyk / cxaxukuth / cythulos / eihort）

**操作类型**: 内容补厚 + 结构重整 + 高概念边界收束
**描述**: 延续前两轮的节奏，这一轮处理四张“概念方向很强、但旧页不是太薄就是太挤”的支配者页。重点不是把它们统一压成怪物卡，而是让来源本来的设定重心真正落到页面结构上
**修复的页面**:
- entities/hastalyk.md（重建为“变异力量”页，补清其并非疾病本身，而是促使病原体与生命跃迁的宇宙机制）
- entities/cxaxukuth.md（重写克希拉守秘档案页，补回深潜者封锁体系与能力留白的来源边界）
- entities/cythulos.md（补清死亡教团、迷雾绝望、“握手即死/转变”的双重解释）
- entities/eihort.md（把迷宫、交易、幼体、宿主化与精神操纵整理为五段正式结构）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十六批修复记录）

**备注**:
- `cxaxukuth.md` 的来源本来就故意留白核心能力，这次继续尊重这种边界
- `eihort.md` 则是典型的“信息很多但旧页读起来太累”，这次主要做了结构清理

---

## [2026-05-07] fix | 收四张神祇错串与表格断裂页（aphoom-zhah / cxaxukluth / ghroth / tsathoggua）

**操作类型**: 内容修复 + 错串清理 + 表格重建
**描述**: 继续沿着“批量清高风险错页”这条线推进，这一轮集中处理 4 张神祇页，问题都比较硬：要么整段混进别的实体，要么属性/能力块已经断裂，继续放着会直接污染后续补全与引用
**修复的页面**:
- entities/aphoom-zhah.md（按《怪物之锤 第二卷》重排正文，修正属性表断裂、换行污染与能力块粘连）
- entities/cxaxukluth.md（移除误混入的“克希拉”战斗卡，恢复为真正的克赛克修克鲁斯条目）
- entities/ghroth.md（清除整段误串入的“基兹古斯”数据与战斗区，恢复为行星级外神总述页）
- entities/tsathoggua.md（重新梳理双来源页顺序，清除列串、重复标题与段间错位）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十七批修复记录）

**备注**:
- `cxaxukluth.md` 和 `ghroth.md` 都属于“主题对了、正文错了”的高风险页，修复收益非常高
- `tsathoggua.md` 不是单纯补厚，而是把双来源页重新排回可信顺序；`aphoom-zhah.md` 则主要解决表格与能力段的断裂问题

---

## [2026-05-07] fix | 清理修德·梅尔串页（shudde-mell）

**操作类型**: 内容修复 + 串页清理 + 结构重建
**描述**: 在继续抽检神祇页时发现 `shudde-mell.md` 后半段已经混入特鲁南伯拉正文，属于高风险串页；本次立即将其重建为完整的钻地蠕虫之神条目，避免继续污染后续校对
**修复的页面**:
- entities/shudde-mell.md（移除误串入的特鲁南伯拉内容，恢复地震、腐蚀、地狱魔窟与意念操控结构）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十八批修复记录）

**备注**:
- 这页的问题不是“薄”，而是后半页已经直接串到别的外神上了，优先级很高
- 处理方式与前一批神祇错串页一致：先恢复页面边界与核心机制，再继续做更细的抽检

---

## [2026-05-07] fix | 继续收神祇重灾区（cthugha / ghatanothoa / hastur）

**操作类型**: 内容修复 + 结构重排 + 多化身拆分
**描述**: 继续顺着神祇页这条线往下收。`cthugha` 与 `ghatanothoa` 属于典型的双栏断句和战斗段错位页；`hastur` 则更严重，已经把本体与多个化身揉成一团，因此本次直接按“本体 + 琥珀长者 + 劫掠者 + 黄衣之王”重排
**修复的页面**:
- entities/cthugha.md（补回生命值与体格，重排火焰登场、太阳光辉与烈焰爆发段）
- entities/ghatanothoa.md（清理断句与错位表格，恢复石化诅咒、异象发送与完整战斗结构）
- entities/hastur.md（拆开本体、琥珀长者、劫掠者、黄衣之王四套内容，重建为结构化页面）
- wiki/synthesis/wiki-repair-tracker.md（同步第六十九批修复记录）

**备注**:
- `hastur.md` 这一页属于真正的重构级修复，继续在旧页上打补丁只会越来越乱
- 修复后我又做了一轮最小回归，顺手清掉了两个我在重组时带进去的悬空旧链接

---

## [2026-05-07] fix | 继续清核心神祇混页（cthulhu / nyarlathotep / tulzscha / ghlaaki）

**操作类型**: 内容修复 + 串页清理 + 结构重建
**描述**: 继续按高吞吐方式推进神祇页校对。这一轮优先清理两张最容易污染后续工作的核心页 `cthulhu` 与 `nyarlathotep`，同时收掉一张 OCR 脏污严重的 `tulzscha` 和一张仍偏薄的 `ghlaaki`
**修复的页面**:
- entities/cthulhu.md（移除混入的比莫斯、克拉辛、利维坦长段正文，重建为以克苏鲁本体为中心的正式页面，并将三者收束为“已知化身”）
- entities/nyarlathotep.md（重排千面结构，拆清人类外表化身、怪物化身、代表性面具与共通数据）
- entities/tulzscha.md（清除 OCR 污染、修复赐福与能力段、恢复火焰旋风攻击与护甲说明）
- entities/ghlaaki.md（补清碎片设定、梦牵、仆从转化、护甲与重生机制，恢复为完整条目）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十批修复记录）

**备注**:
- `cthulhu.md` 和 `nyarlathotep.md` 都是高价值核心页，旧页一旦混页，后续引用和补全都会持续带偏，所以这轮优先级很高
- 这次继续遵循同一原则：先恢复页面边界与来源结构，再谈进一步的细化补全

---

## [2026-05-07] fix | 继续重建外神主轴页（azathoth / yog-sothoth / shub-niggurath）

**操作类型**: 内容修复 + 混页清理 + 主体页重建
**描述**: 继续沿着“主体页与化身页分层”这条线推进。这一轮拿下三张最关键的外神主轴页，重点清掉主体正文中混入的化身段、错置的其他神祇段落和被压扁的结构
**修复的页面**:
- entities/azathoth.md（移除赞达-格拉长段和其他残片，重建为以阿撒托斯本体为核心的总述页，并将赞达-格拉收束为已知化身）
- entities/yog-sothoth.md（清理亚弗戈蒙、塔维尔·亚特乌姆尔在主体页中的错位堆叠，重建为主体页加化身概览结构）
- entities/shub-niggurath.md（移除误混入的塞贝克内容与化身正文堆叠，重建为黑暗之母本体页，并把伟大潘神、月透镜守护者收束为化身说明）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十一批修复记录）

**备注**:
- 这三页都是典型的“越往后补越容易被旧混页带偏”的高风险页，所以直接重建比缝补更稳
- 这一轮继续优先保证页面边界、来源诚实度和长期可维护性，再往下才是更细颗粒度的逐段补厚

---

## [2026-05-07] fix | 继续收中高风险神祇页（chaugnar-faugn / ghizguth / ubbo-sathla）

**操作类型**: 内容修复 + 结构重建 + 数据对齐
**描述**: 继续沿着高位神祇与核心怪异存在这条线往下压。这一轮处理三张中高风险页：一张明显截断、一张长期偏薄且数据尾部不稳、一张旧版数值和原文对齐度不足
**修复的页面**:
- entities/chaugnar-faugn.md（补回教团背景、遭遇、选中者与吸血规则，重建为完整的群山中的恐怖条目）
- entities/ghizguth.md（重建深海之主页，补清谱系争议、卷须缠绕、护甲与重生说明）
- entities/ubbo-sathla.md（重新对齐生命值、体格、子嗣、抓握与汲取之触结构，恢复无本之源页）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十二批修复记录）

**备注**:
- `chaugnar-faugn.md` 的问题最典型，旧页前半截能看，后半截则已经明显不像一张完整正式页
- `ubbo-sathla.md` 则不是混页，而是旧版把原文的关键数值和行为层次接得不够准，这次顺手校正回来了

---

## [2026-05-08] fix | 继续收主体页与附属设定混排（ithaqua / daoloth / groth-golka）

**操作类型**: 内容修复 + 结构重建 + 化身分层
**描述**: 继续沿着“主体页与化身/附属设定分层”这条线推进。这一轮优先处理一张明显偏薄的核心神祇页、一张本体与化身/子体严重揉在一起的外神页，以及一张仍停留在旧式长段粗填状态的旧日支配者页
**修复的页面**:
- entities/ithaqua.md（补回《怪物之锤》主体设定、能力、完整战斗数据，并收束 `死亡行者` 与 `伊塔库亚之徽记`）
- entities/daoloth.md（重建为道罗斯本体页，拆清 `神圣之光` 化身与 `道罗斯的子体` 附属说明）
- entities/groth-golka.md（重排黑锥、教团、仆从、能力与战斗结构，修正旧式长段堆叠）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十三批修复记录）

**备注**:
- `ithaqua.md` 之前最大的问题不是错误，而是内容承载明显不足，现在已经升级到能稳定继续维护的层级
- `daoloth.md` 则属于典型的“继续在旧页上缝补只会越来越乱”，所以这次直接整体拆开重排

---

## [2026-05-08] fix | 一次性再收五张高风险神祇页（abhoth / kassogtha / atlach-nacha / idh-yaa / ygolonac）

**操作类型**: 内容修复 + 串页清理 + 结构重建
**描述**: 继续按更大批次推进。这一轮不再只补薄页，而是直接清掉 5 张还停留在 4 月早期状态、且已经出现明显结构性损坏的神祇页：有的后半直接串到相邻条目，有的战斗块和附属生物块插进了教团正文里，有的则能力尾段已经错位到无法继续增量维护
**修复的页面**:
- entities/abhoth.md（重建为不净之源主体页，补清伊夸岩洞、复制、心灵感应与吞噬结构）
- entities/kassogtha.md（切除误串入的莉莉丝正文，恢复卡索格萨独立页边界与毒烟/交融机制）
- entities/atlach-nacha.md（重建巨网、投网/噬咬、蜘蛛寄生虫与人类接触链）
- entities/idh-yaa.md（重建为星之母页，补清谱系、宇宙智慧、造物与吞噬转化）
- entities/ygolonac.md（重建为堕落与附身主题页，恢复召唤、附身、伊戈罗纳克之触与完整战斗结构）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十四批修复记录）

**备注**:
- `kassogtha.md` 是这一轮最典型的高风险页，旧页后半已经直接切进 `lilith`，继续放着会污染相邻校对
- `atlach-nacha.md` 和 `ygolonac.md` 都属于“看起来内容很多，但结构已经乱到不能信”的页，这类页面直接重建比局部打补丁快得多

---

## [2026-05-08] fix | 再拉一组五页，继续清错页和插卡页（bast / mordiggian / qyth-az / nyogtha / zoth-ommog）

**操作类型**: 内容修复 + 串页清理 + 结构重建
**描述**: 继续加快节奏，这一轮集中清 5 张仍停留在早期粗填状态、且已经出现明显错页或结构损坏的神祇页。有的页面头部直接混入别的实体战斗卡，有的尾段切到相邻条目，有的则把典型显现和战斗块插进背景正文中间，已经不适合继续局部修补
**修复的页面**:
- entities/bast.md（切除误混入的 `鲍特·祖卡-莫格` 数据，恢复芭丝特独立页边界与猫群/化形结构）
- entities/mordiggian.md（重建藏骸所之神页，重排食尸鬼教团、赐福、吞噬与幻梦境关联）
- entities/qyth-az.md（切断与 `rhan-tegoth` 的串页污染，恢复结晶智能、晶体交流与肉体转晶结构）
- entities/nyogtha.md（重建暗潜者页，整理驱逐仪式、吸血、强烈气息与教团段顺序）
- entities/zoth-ommog.md（重建为结构化的克苏鲁子嗣页，补清教团、震颤嗡鸣、冲撞与尾击）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十五批修复记录）

**备注**:
- `bast.md` 原页一上来就挂着 `鲍特·祖卡-莫格` 的战斗卡，这种页必须整张拆掉重排
- `qyth-az.md` 和 `nyogtha.md` 则是典型的“正文还在，但页面顺序已经不能信”，直接重建比继续缝快得多

---

## [2026-05-08] fix | 再收一组五页，继续按原 PDF 清串页与断裂页（hziulquoigmnzhah / baoht-zuqqa-mogg / cyaegha / ythogtha / alvas）

**操作类型**: 内容修复 + 串页清理 + 结构重建
**描述**: 继续按“大批次 + 严格忠于原 PDF”推进。这一轮集中处理 5 张仍保留 4 月早期粗填痕迹的神祇页：其中 `hziulquoigmnzhah` 已明确串入 `修普诺斯`，`ythogtha` 的能力尾段与数值块断裂，`baoht-zuqqa-mogg`、`cyaegha`、`alvas` 则仍停留在旧式长段或漏块状态，因此统一对照原 PDF 重新整页梳理。
**修复的页面**:
- entities/hziulquoigmnzhah.md（移除误混入的修普诺斯段，恢复赫祖尔夸伊耿扎本体、金属赐福与完整战斗数据）
- entities/baoht-zuqqa-mogg.md（补回鲍特·祖卡-莫格的典型物理显现、尾蛰毒素、护甲与食腐虫群能力）
- entities/cyaegha.md（重排塞伊格亚页结构，补回 `赐予活力` 能力并理顺威恩、纳伽埃与教团关系）
- entities/ythogtha.md（重建伊索格达页，补齐偶像显现、精神投射、生命值/体格/伤害加值与战斗块）
- entities/alvas.md（按原文重排阿尔瓦萨页，恢复尖叫机制、完整战斗数据，并保留 PDF 附带的命中部位表）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十六批修复记录）

**备注**:
- 这一轮最关键的是 `hziulquoigmnzhah.md`，因为旧页已经直接混入了另一个词条，必须整页切开重建
- `alvas.md` 中的命中部位表虽然位置怪，但原 PDF 确实附带，因此这次按“忠于原文”保留，不做额外演绎

---

## [2026-05-08] fix | 再拉六页，继续收《怪物之锤 第二卷》早期旧稿（ig / yu-mengtis / gol-goroth / quachil-uttaus / bugg-shash / rhan-tegoth）

**操作类型**: 内容修复 + 结构重建 + 原文二次对页
**描述**: 继续提速。这一轮集中处理 6 张仍停留在 4 月早期粗填状态、但还没完成第二轮原 PDF 校准的神祇页。问题形态不完全一样：有的是背景前段明显残缺，有的是战斗块和能力块仍是早期粗接，有的则是双来源页虽然“能读”但还没有按原文重新压实结构，因此统一回到《怪物之锤 第二卷》原文重建。
**修复的页面**:
- entities/ig.md（按原文重排伊格主体页，补回完整战斗、毒液、抓握与护甲说明）
- entities/yu-mengtis.md（重建犹-蒙提斯页，补齐生长、附身、完整数值与攻击块）
- entities/gol-goroth.md（按原文重建戈尔-格罗斯页，补清迷魂、灌注魔石与完整战斗结构）
- entities/quachil-uttaus.md（重建夸切-乌陶斯页，补齐赋予无序状态、操纵时间/空间与定身）
- entities/bugg-shash.md（重建巴格·沙斯页，补清控光、低语、创造傀儡与完整战斗数据）
- entities/rhan-tegoth.md（重建兰-提格斯页，补清饥饿、休眠、梦境影响与完整数据块）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十七批修复记录）

**备注**:
- 这一轮最重的是 `rhan-tegoth.md`，旧页开头已经明显残缺，继续在旧稿上补会越来越不可信
- `ig.md` 属于典型的“双来源条目已存在，但第二卷主体页仍需重新压实”的情况，所以这次按原文把主轴重新梳顺了

---

## [2026-05-08] fix | 补齐伊波-兹特尔，并二次压实三张偏薄页（yibb-tstll / vorvadoss / minister-of-hali / yaddith-gho）

**操作类型**: 内容修复 + 来源链校正 + 二次原文对页
**描述**: 继续加快节奏，但不放松来源边界。这一轮先拿下唯一还停留在 `2026-04-15` 的 `yibb-tstll.md`，确认它其实来自《怪物之锤 第二卷》而不是旧页误挂的 `coc-40th-anniversary`，然后顺手把三张虽然已经“能读”、但和 OCR 对齐度还不够高的页面再压实一遍。
**修复的页面**:
- entities/yibb-tstll.md（改正来源链为《怪物之锤 第二卷》，补回黑血、智慧之触、夜魇之母与黑血独立数据块）
- entities/vorvadoss.md（按第二卷 OCR 补回诺登斯梦境起源、看守者定位、召唤代价与异星教团背景）
- entities/minister-of-hali.md（按第一卷原文补强宫廷侍臣、精神链接、现世征兆与死亡之舞说明）
- entities/yaddith-gho.md（保持其档案页定位，补入索斯星调查、天津四与雅迪斯毁灭/流亡背景）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十八批修复记录）

**备注**:
- `yibb-tstll.md` 这一轮最关键，因为它之前不只是偏薄，而是连来源链都挂错了，继续放着会污染后续校对判断
- `vorvadoss.md`、`minister-of-hali.md`、`yaddith-gho.md` 属于“旧页不算坏，但还没完全压实”的类型，这类页凑批处理比单页零修快很多

---

## [2026-05-08] fix | 再收三张高位页，继续压掉早期骨架稿（hydra / nodens / umr-at-tawil）

**操作类型**: 内容修复 + 二次原文对页 + 双来源链校正
**描述**: 继续按大批次推进。这一轮处理 3 张仍保留早期骨架痕迹的高位条目：`hydra.md` 还停留在 4 月 13 日的旧稿状态，且没有真正吸收第二卷里“大衮与海德拉”的并列正文；`nodens.md` 与 `umr-at-tawil.md` 虽然已经能读，但和 OCR 对齐后仍能明显看出教团、遭遇、氛围与典型显现层不够厚，因此统一再压一轮。
**修复的页面**:
- entities/hydra.md（按第二卷“大衮与海德拉”原文重建海德拉独立页，补回深海统御者定位、现代海洋教团、完整共享数据与双来源链）
- entities/nodens.md（按第二卷 OCR 补回多重面貌、人类伪装、与奈亚拉托提普的映照关系、典型显现与教团赐福）
- entities/umr-at-tawil.md（按第二卷 OCR 补回终极之门的多种解释、召唤代价、无教团设定、时间停滞氛围与完整战斗/能力块）
- wiki/synthesis/wiki-repair-tracker.md（同步第七十九批修复记录）

**备注**:
- `hydra.md` 这一轮属于典型的“旧页不是错得离谱，但明显比同主题的大衮页落后一整代”，直接重做比继续修补干净很多
- `nodens.md` 和 `umr-at-tawil.md` 则是“高位设定在、机制层还薄”的页，适合成批做第二轮 OCR 压实

---

## [2026-05-08] fix | 再拉三张高概括页，继续补厚外神与梦境旧神（cxaxukuth / ghroth / hypnos）

**操作类型**: 内容修复 + 二次原文对页 + 机制层补厚
**描述**: 继续保持大批次推进。这一轮处理 3 张“结构已经大致正确，但仍明显停留在高概括早期稿”的页面：`cxaxukuth.md` 需要把“能力故意留白”这件事和克希拉守卫、拉莱耶囚禁逻辑一起压实；`ghroth.md` 虽然已有主体，但原文里关于弑星者、轨道偏转争议、教团和米-戈/夏恩态度还没吃满；`hypnos.md` 则需要把古典脉络、教团与梦境机制层补得更完整。
**修复的页面**:
- entities/cxaxukuth.md（按第二卷 OCR 补回拉莱耶囚禁、克希拉守卫、四子嗣关系、能力留白说明与完整显现/战斗块）
- entities/ghroth.md（按第二卷 OCR 补回弑星者定位、轨道偏转争议、格罗斯密教、米-戈与夏恩态度，以及完整宇宙重构说明）
- entities/hypnos.md（按第二卷 OCR 补回古希腊/古罗马脉络、睡梦之子、梦境管理者立场、击溃意识细节与完整显现数据）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十批修复记录）

**备注**:
- `cxaxukuth.md` 这一轮最要紧的是守住原文边界: 来源既给了完整显现数据，又明确把核心能力留白，所以不能为了“完整”乱补
- `ghroth.md` 和 `hypnos.md` 则都是典型的“能读，但离原文厚度还有一截”的页，特别适合成批压实

---

## [2026-05-08] fix | 再收三张，继续补厚外神与死亡边界页（cxaxukluth / dagon / cythulos）

**操作类型**: 内容修复 + 二次原文对页 + 层次补厚
**描述**: 继续按整批方式推进。这一轮选了 3 张已经“结构正确”、但仍明显偏薄的页面：`cxaxukluth.md` 需要把深夜之幕、米-戈回避和死亡教团逻辑补实；`dagon.md` 虽然已有主体，但在教团、遭遇、深渊氛围层面已经落后于刚补厚的 `hydra.md`；`cythulos.md` 则需要补回原文里非常关键的塑像机制、完整显现数据和“死亡或转变”边界。
**修复的页面**:
- entities/cxaxukluth.md（按第二卷 OCR 补回深夜之幕、米-戈撤离、死亡教团、完整伪足战斗机制与重生说明）
- entities/dagon.md（按第二卷 OCR 补回历史神名脉络、海洋教团样态、遭遇路径与深渊氛围）
- entities/cythulos.md（按第二卷 OCR 补回塑像致幻机制、完整显现数据、即死之手与“死亡或转变”解释边界）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十一批修复记录）

**备注**:
- `dagon.md` 这次本质上是在和 `hydra.md` 对齐，不然同一并列条目会出现明显厚度落差
- `cythulos.md` 的关键不在“补更多”，而在把原文确实给出的塑像与雾区机制完整接回去，同时不把它压扁成普通近战怪物卡

---

## [2026-05-08] fix | 再拉四张概念型高位页，继续压实第二卷主体（iod / tru-nembra / nug-and-yeb / hastalyk）

**操作类型**: 内容修复 + 二次原文对页 + 概念页补厚
**描述**: 继续加快收口。这一轮处理 4 张“已经能用，但仍明显像摘要稿”的高位条目：`iod.md` 需要把《伊欧德之书》、追猎与不死赐福层补回；`tru-nembra.md` 要把音乐残章、灾难性重演和声波毁灭层接实；`nug-and-yeb.md` 需要把依安-洪、黑色太阳与昆扬仪式补满；`hastalyk.md` 则要把宇宙子群、地球瘟疫痕迹与局部苏醒的后果补清。
**修复的页面**:
- entities/iod.md（按第二卷 OCR 补回伊欧德之书、跨梦境追猎、阴影之膜/不死之生与完整白光猎杀机制）
- entities/tru-nembra.md（按第二卷 OCR 补回音乐残章、灾难性重演、音乐天才、交响化身与声波毁灭层级）
- entities/nug-and-yeb.md（按第二卷 OCR 补回依安-洪、黑色太阳、昆扬仪式、终末预言与完整双子数据）
- entities/hastalyk.md（按第二卷 OCR 补回宇宙子群假说、地球瘟疫痕迹、携带者与局部苏醒导致的转变后果）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十二批修复记录）

**备注**:
- 这一轮的共同点是“不能硬压成普通怪物卡”。这几页的重点都在宇宙机制、崇拜链、显现方式和后果层，而不是近战数值本身
- `tru-nembra.md` 和 `hastalyk.md` 尤其如此，真正可怕的是它们的影响方式，而不是一个站在地图上互殴的实体

---

## [2026-05-08] ingest | 第三卷：新手模组

**操作类型**: ingest
**描述**: 摄入 `raw/第三卷：新手模组.pdf`。核对后确认该本地 PDF 并非完整三模组正文，而是“《追书人》完整 + 《死者的顿足舞》完整 + 《黑暗边缘》仅标题页/元信息”的残缺版本；据此新增来源摘要与 3 张模组页，并在索引中登记来源与状态，避免后续把《黑暗边缘》误判成提取遗漏。
**影响的文件**:
- wiki/sources/coc-starter-set-vol3.md
- wiki/entities/module-paper-chase.md
- wiki/entities/module-edge-of-darkness.md
- wiki/entities/module-dead-man-stomp.md
- wiki/index.md
- wiki/log.md

**备注**: 这一轮严格按本地 PDF 实际内容落库，没有用外部记忆补写《黑暗边缘》正文；后续若拿到完整来源，应在保留“本来源残缺”结论的前提下另行补源。

---

## [2026-05-08] fix | 继续补厚四张仍能从原文再压出信息的页面（lesser-old-ones / zathog / ossadagowah / eihort）

**操作类型**: 内容修复 + 二次原文对页 + 规则层补全
**描述**: 继续保持快节奏，但严格贴着本地 PDF/OCR 走。这一轮没有去开全新重灾区，而是选了 4 张“主结构已经正确、但和原文相比仍有明确缺口”的页面继续补厚：`lesser-old-ones.md` 缺少归零后的爆发与重生说明；`zathog.md` 还可以补回起源争议、祈愿术不确定性与随机攻击细节；`ossadagowah.md` 还缺欧洲传播线索与更具体的遭遇链；`eihort.md` 则补回了 40 周年规则书里能稳定落地的教团与战斗数据。
**修复的页面**:
- entities/lesser-old-ones.md（补回典型物理显现注记、`10D10` 爆发伤害与 `1D100` 年后太空重生）
- entities/zathog.md（补回逃离旧神说、`向扎索格祈愿术` 的未知性质与随机攻击/忽略近身者说明）
- entities/ossadagowah.md（补回欧洲传播线索、混合族群教团趋势与误入其领域的遭遇路径）
- entities/eihort.md（补回塞文河谷教团限定、艾霍特之子啃食尺度，以及完整属性/战斗/护甲数据块）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十三批修复记录）

**备注**:
- 这批的共同点是“不是坏页，但还能从原文里再榨出一层确定信息”，因此适合成批推进
- `eihort.md` 是本轮最重的一张，因为它之前偏向机制总述，这次把规则层的缺口也一起补齐了

---

## [2026-05-08] fix | 继续补厚四张中后段神祇页（zhar-and-lloigor / bast / mordiggian / nyogtha）

**操作类型**: 内容修复 + 二次原文对页 + 设定层补厚
**描述**: 继续按批次推进第二卷。这一轮选择了 4 张“已经可读，但仍明显比原文薄一层”的页面继续压实：`zhar-and-lloigor.md` 还缺高原幻视、双生教团内部分化和环境吞食感；`bast.md` 还可以补回庞贝传播线索、外行星猫族边界与设定争议；`mordiggian.md` 需要补回与食尸鬼关系的立场边界、重点遗骸献祭线索和关键典籍；`nyogtha.md` 则补回了多地召唤记录与驱逐仪式的协助施法细节。
**修复的页面**:
- entities/zhar-and-lloigor.md（补回阿洛扎尔幻视、同名罗伊格尔种族争议、双生教团目标与环境层面的成对吞食异状）
- entities/bast.md（补回庞贝传播线索、外行星猫族不在其统御范围内的边界与“人塑神/猫塑神”解释分歧）
- entities/mordiggian.md（补回与食尸鬼关系的立场边界、重点遗骸献祭线索，以及《食尸鬼教团》《食尸鬼抄本》两份关键典籍）
- entities/nyogtha.md（补回叙利亚/利比亚/芬兰召唤记录、调查驱逐法的风险与伐蹉-吠罗耶仪式的协助施法细节）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十四批修复记录）

**备注**:
- 这批更像“压实第二层信息”，不是推翻重做，但收益很高
- `zhar-and-lloigor.md` 是本轮最明显的老页，它此前的更新时间还停在 `2026-05-06`

---

## [2026-05-08] fix | 继续压实四张高位主轴与中段页（qyth-az / zoth-ommog / azathoth / yog-sothoth）

**操作类型**: 内容修复 + 二次原文对页 + 设定层补厚
**描述**: 继续快推第二卷，但仍只补原文里明确存在的一层信息。这一轮同时处理 2 张中段页和 2 张主轴页：`qyth-az.md` 补回离散传播式崇拜和 1908 年玻利维亚“水晶人”案例定位；`zoth-ommog.md` 补回整日召唤的危险与拉莱耶枷锁正在损耗的忧虑；`azathoth.md` 补回死亡邪教、空洞者、额外赐福与毁灭半径量化；`yog-sothoth.md` 则补回“狱墙”解释、球体现身时的神话/理智暴涨，以及未被召唤时不会完整显现的边界。
**修复的页面**:
- entities/qyth-az.md（补回离散传播式崇拜与 1908 年“水晶人”案例定位）
- entities/zoth-ommog.md（补回整日召唤风险与拉莱耶枷锁持续损耗的忧虑）
- entities/azathoth.md（补回死亡邪教、空洞者传闻、厄运之触/传送赐福与毁灭半径量化）
- entities/yog-sothoth.md（补回狱墙解释、球体现身导致的神话/理智暴涨与“未召唤不完全显现”边界）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十五批修复记录）

**备注**:
- `azathoth.md` 和 `yog-sothoth.md` 这次不是修坏块，而是把 OCR 主体里非常关键但之前没完全吃进来的解释层补回来了
- `qyth-az.md`、`zoth-ommog.md` 则更像补钩子，能明显提升后续写团和引用时的可用性

---

## [2026-05-08] fix | 继续压实四张核心神祇主体页（shub-niggurath / cthulhu / ghlaaki / tsathoggua）

**操作类型**: 内容修复 + 二次原文对页 + 主体页补厚
**描述**: 继续快推第二卷，但仍严格只补本地 PDF/OCR 里能明确落地的层。这一轮处理 4 张已经基本成型、但仍明显比原文少一层解释和遭遇信息的核心主体页: `shub-niggurath.md` 补回希腊/潘神/玛格那玛特等地球神祇化误读机制、恩凯与昆扬神庙线索，以及凡人多经教团与神庙接触黑暗之母的路径；`cthulhu.md` 补回艺术创作往往不是模仿而是梦触后的物质翻译，并压实基层教徒对全球网络的不自知与梦境对创作者/暴力者的典型影响；`ghlaaki.md` 补回它把人类视作“有用工具”的明确态度、活人与不死仆从并行工作的关系，以及《格拉基启示录》本身也是意志传播媒介这一层；`tsathoggua.md` 则补回其可能仍受旧神残余禁锢的边界、蛇人教团的最高组织性与蟾蜍状神像/碗形祭坛等遭遇细节。
**修复的页面**:
- entities/shub-niggurath.md（补回地球神祇化误读机制、恩凯/昆扬神庙与教团-神庙式接触路径）
- entities/cthulhu.md（补回梦触艺术、全球教团层级感与梦境对艺术家/暴力者的典型反应）
- entities/ghlaaki.md（补回“人类作为有用工具”的态度、活人与不死仆从协作关系，以及《格拉基启示录》的传播媒介性质）
- entities/tsathoggua.md（补回旧神残余禁锢边界、蛇人教团组织性与蟾蜍状神像/碗形祭坛遭遇细节）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十六批修复记录）

**备注**:
- 这一批四页的共同点是“主体已经能读，但原文还藏着一层特别好用的解释框架”，补上之后，后续引用会稳很多
- 这次没有扩写化身页，也没有发散去补外部设定，全部内容仍来自本地 PDF/OCR 对页

---

## [2026-05-08] update | 第三卷模组页从摘要版升级为主持提纲版

**操作类型**: update
**描述**: 根据用户反馈，第一轮对《第三卷：新手模组》的摄入仍偏摘要化，不足以直接支持 KP 从开场主持到结尾。因此将 `module-paper-chase.md` 与 `module-dead-man-stomp.md` 重写为“可开跑”的场景化提纲页，显著补厚模组用途、玩家公开信息、守秘人真相、场景顺序、关键检定、线索网、NPC 使用方式、分支结局与收尾提示。`module-edge-of-darkness.md` 保持不变，因为本地 PDF 仍只有标题页与元信息，不能凭记忆补正文。
**影响的文件**:
- wiki/entities/module-paper-chase.md
- wiki/entities/module-dead-man-stomp.md
- wiki/log.md

**备注**: 这次更新的目标不是“更详细的简介”，而是把两张页提升到“KP 可以直接据此顺场主持”的粒度；后续若继续深挖，还可以再补 NPC 数值索引、展示材料编号与场景间跳转提示。

---

## [2026-05-08] update | 第三卷模组页再升级为“双层版：Wiki概览 + KP实跑流程”

**操作类型**: update
**描述**: 根据用户继续反馈，前一轮“主持提纲版”仍不够贴近桌上实际使用，因此进一步把 `module-paper-chase.md` 与 `module-dead-man-stomp.md` 改写为双层结构：上半保留 wiki 友好的概览，下半明确写入 KP 在各场景中该如何描述、何时抛检定、失败如何处理、玩家卡住时如何推，以及可直接拿来口述的旁白与 NPC 对话语气。目标从“能辅助主持”提升为“能直接拿来主持”。
**影响的文件**:
- wiki/entities/module-paper-chase.md
- wiki/entities/module-dead-man-stomp.md
- wiki/log.md

**备注**: `module-edge-of-darkness.md` 仍保持部分填充状态，因为本地 PDF 缺正文，当前不能在保持来源边界的前提下做同等级扩写。

---

## [2026-05-08] plan | 建立第二阶段剩余高价值待补页清单

**操作类型**: 计划整理 + 收口台账
**描述**: 用户要求改用“方式 B”，因此不再平均推进所有页面，而是把剩余仍值得补厚的页面单独整理成可持续维护的收口清单。基于当前实体页的更新时间、页长分布以及已完成的核心神祇主体页进度，新增 `wiki-remaining-high-value-pages.md`，把后续页面划分为 `高优先级 / 中优先级 / 低优先级` 三层，并给出建议的后续批次顺序。结论上，第二卷核心神祇主体页已基本脱离重灾区，后续重点转向眷族、子嗣、文明与强关联怪物页。
**影响的文件**:
- wiki/synthesis/wiki-remaining-high-value-pages.md
- wiki/synthesis/wiki-repair-tracker.md

**备注**:
- 这一步不是内容补写，而是把“还剩哪些页最值得做”固定成外部记忆，后面不用再靠上下文临时判断
- 清单是动态的，后续每做完一批都可以在这份文件上继续降级、移除或改批次

---

## [2026-05-08] fix | 按剩余高价值清单推进第一批（spawn-of-zathog / young-of-the-outer-gods / children-of-ig / spawn-of-yog-sothoth）

**操作类型**: 内容修复 + 二次原文对页 + 眷族/子嗣页补厚
**描述**: 按新建立的第二阶段收口清单直接推进第一批 4 页。`spawn-of-zathog.md` 主要补回第二卷扎索格主体页里关于巢穴生态、持续诞生与近缘血统关系的解释，让它不再只是“沿用乌波-萨斯拉之裔数据”的注脚页；`young-of-the-outer-gods.md` 则按第一卷 OCR 补回阿撒托斯神庭分裂/抛射起源、无限多样性、星际漂流与行星灾变路径，使页面从摘要稿提升为真正的概念实体页；`children-of-ig.md` 补回“伊格无所不知”的神罚氛围、与“伊格的眷族”概念的边界，以及咬后迅速退去的典型猎杀模式；`spawn-of-yog-sothoth.md` 补回人类父/母与“移入体内”两种诞生方式、快速成长和鲜肉需求、古书吸引机制，以及伊本-加兹之粉可以令无形子嗣现形这一细节。
**修复的页面**:
- entities/spawn-of-zathog.md（补回巢穴生态、近缘血统解释与遭遇定位）
- entities/young-of-the-outer-gods.md（补回阿撒托斯神庭起源、星际漂流与“事件源”式遭遇）
- entities/children-of-ig.md（补回神罚感、概念边界与猎杀模式）
- entities/spawn-of-yog-sothoth.md（补回诞生方式、成长/食性、古书吸引与伊本-加兹之粉现形细节）
- wiki/synthesis/wiki-remaining-high-value-pages.md（把第一批 4 页标记为已处理）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十七批修复记录）

**备注**:
- 这批不是在救坏页，而是在把“早期已成型但仍偏薄”的眷族页压到更接近原文厚度
- 这样一来，第二阶段清单就不只是计划表，而开始变成真正的动态收口台账

---

## [2026-05-08] fix | 按剩余高价值清单推进第二批（formless-spawn / loigar / rlim-shaikorth / space-eater）

**操作类型**: 内容修复 + 二次原文对页 + 高价值长尾页补厚
**描述**: 继续按第二阶段收口清单推进第 2 批 4 页。`formless-spawn.md` 按第一卷与 40 周年 OCR 补回其作为黑池式活守卫的遭遇感、吞噬容量上限与“神殿本身在反应”的定位；`loigar.md` 补回罗伊格尔对人类食物社群的谨慎经营、时间丧失/嗜睡案例，以及会被现代人误归入 UFO 近距离接触的线索；`rlim-shaikorth.md` 补回其在地球与幻梦境间反复显身、信徒也常只是食物，以及伊基尔斯对信徒与普通航海者的不同意义；`space-eater.md` 则补回仪式后显光、蕨叶状肢体探脑、护目装备对光灼难度的更具体缓解，以及“信徒误认神圣、实体只把他们当饲料”的事件型遭遇定位。
**修复的页面**:
- entities/formless-spawn.md（补回黑池守卫感、吞噬容量上限与遭遇定位）
- entities/loigar.md（补回时间丧失、UFO 式线索与社群经营感）
- entities/rlim-shaikorth.md（补回跨地球/幻梦境显身判断、食信徒边界与伊基尔斯双重意义）
- entities/space-eater.md（补回仪式后显光、探脑肢体、护目裁定与事件型遭遇定位）
- wiki/synthesis/wiki-remaining-high-value-pages.md（把第二批 4 页标记为已处理）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十八批修复记录）

**备注**:
- 这一批已经明显进入“高收益长尾”阶段：不是在救命，但补完后页面的来源气味和可跑性都提升很多
- 尤其 `loigar.md`，补回“时间丧失 / 近距离接触”后，和现代怪谈、调查线索之间的桥一下就搭起来了

---

## [2026-05-08] fix | 按剩余高价值清单推进第三批（people-of-yaddith / hyperborean / tcho-tcho / spawn-of-tsathoggua）

**操作类型**: 内容修复 + 二次原文对页 + 文明/族群/后裔页补厚
**描述**: 继续按第二阶段收口清单推进第 3 批 4 页。`people-of-yaddith.md` 按第一卷 OCR 补回雅迪斯人真正的时间逆转动机、对米-戈技术的潜在兴趣，以及《雅迪斯幻景》中雅迪斯与巨噬蠕虫互相崇拜同一污染源、最终双双走向毁灭的背景；`hyperborean.md` 补回其知识流入亚特兰蒂斯与后世文明的链条、“已灭绝但仍疑似存有冰川遗民”的边界，以及梦中保存文明精神残响的入梦者定位；`tcho-tcho.md` 补回其全球碎片化、难以按单一种族理解的边界、血脉污染可能延后显现的趋势，以及米里·尼格里混血起源说的非唯一定位；`spawn-of-tsathoggua.md` 则补回“神之后裔 / 独立种族 / 被早期人类直接当神崇拜”三重解释并存的边界，以及它们更像神殿报复者而非普通游荡怪的用法。
**修复的页面**:
- entities/people-of-yaddith.md（补回时间逆转动机、米-戈兴趣与《雅迪斯幻景》背景）
- entities/hyperborean.md（补回文明知识链条、残存边界与入梦者定位）
- entities/tcho-tcho.md（补回碎片化/混血边界、延后显现污染与米里·尼格里起源说）
- entities/spawn-of-tsathoggua.md（补回三重解释边界与神殿报复者定位）
- wiki/synthesis/wiki-remaining-high-value-pages.md（把第三批 4 页标记为已处理）
- wiki/synthesis/wiki-repair-tracker.md（同步第八十九批修复记录）

**备注**:
- 这一批把“文明页”和“污染人群页”又往前推了一层，现在剩余高价值清单里的前三批已经全部清完
- 后续如果继续顺着表走，就会进入第 4 批那种更纯粹的主神派生/眷族收口阶段

---

## [2026-05-08] fix | 按剩余高价值清单推进第四批（spawn-of-abhoth / spawn-of-nyogtha / hasturs-spawn / servants-of-cthulhu）

**操作类型**: 内容修复 + 二次原文对页 + 主神派生/眷族页补厚
**描述**: 继续按第二阶段收口清单推进第 4 批 4 页。`spawn-of-abhoth.md` 按第一卷 OCR 补回这些后裔并非稳定种族，而是阿布霍斯持续不断产出的失败体、半成品与成熟造物混流，并补回部分成熟个体会留在父神身边照料与满足其需求的定位；`spawn-of-nyogtha.md` 补回尼约格萨对子嗣的梦境联络其实在童年末期就已开始，以及“包裹”是把受害者拖入冰冷胶状、充满黑暗与巨虫感的肉体中这一更准确的遭遇感；`hasturs-spawn.md` 补回其极少离开哈利湖与黑水边界、作为卡尔克萨外围自动防线的用法，并压实“召唤它们的蠢巫师通常先被吃掉”的风险逻辑；`servants-of-cthulhu.md` 则补回新近转化而仍保留部分人类社交外壳的阶段反而最危险，以及这类仆役特别适合放在长期腐坏却仍在运作的老教团据点中。
**修复的页面**:
- entities/spawn-of-abhoth.md（补回连续造物混流定位与成熟个体留在父神身边服侍的边界）
- entities/spawn-of-nyogtha.md（补回童年末期梦联络与“包裹”的冰冷胶状肉体遭遇感）
- entities/hasturs-spawn.md（补回哈利湖/黑水边界防线定位与召唤者先成猎物的风险）
- entities/servants-of-cthulhu.md（补回转化早期社交外壳危险性与腐坏教团据点场景适配）
- wiki/synthesis/wiki-remaining-high-value-pages.md（把第四批 4 页标记为已处理）
- wiki/synthesis/wiki-repair-tracker.md（同步第九十批修复记录）

**备注**:
- 这一批进一步压实了主神派生页最有用的一层：它们在团里到底怎么出现、什么时候最危险、应该放在什么环境里
- 仍然没有外扩设定，全部内容都来自本地 PDF/OCR 的二次对页
