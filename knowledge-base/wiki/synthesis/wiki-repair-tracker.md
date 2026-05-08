# Wiki 修复追踪

> 创建日期: 2026-05-06
> 最后更新: 2026-05-08
> 状态: 进行中
> 维护方式: 仅追加或更新状态，不删除历史记录

## 目标

本文件用于持续追踪 COC 知识库中已发现的问题、修复优先级、执行计划与修复记录。

这样做的目的有三点：

1. 让后续修复工作有稳定的外部记忆，不依赖单次会话上下文。
2. 把“待修复”“修复中”“已修复”“待考证”分开，避免状态混乱。
3. 让每次修复都能回溯到原始问题、来源 PDF 和修复决策。

---

## 使用规则

### 状态定义

- `待修复`：已确认存在问题，尚未开始处理。
- `修复中`：正在对照 PDF 或正在改写页面。
- `已修复`：已完成修复，并完成基本复核。
- `待考证`：暂未确认是否属于当前 4 本 PDF 的正式内容。
- `已跳过`：确认当前不处理，但保留原因。

### 记录原则

- 每修完一批页面，都在“修复记录”追加一条。
- 每个问题项尽量写清楚“问题类型”和“处理方式”。
- 若发现新问题，直接补入对应分组，不覆盖旧判断。
- 若判断发生变化，在“决策备注”中记录原因。

---

## 当前结论总览

基于 2026-05-06 的首轮仓库审计与 PDF 文本对照，当前已识别出以下问题层级：

- 高风险正文问题：`11` 项
- 目录/索引漂移：`7` 项
- 来源待考证占位条目：`3` 项
- 缺少来源段或元数据异常：`若干`
- 《怪物之锤 第一卷》野兽组疑似批量提取异常：`重点关注`

当前判断：

- 风险最高的区域是 `knowledge-base/wiki/entities/` 中来自《怪物之锤 第一卷》的野兽与部分怪物条目。
- `调查员手册` 的双栏串文大问题此前已处理过，目前优先级低于野兽组。
- `yuggya`、`star-worm`、`titus-terence` 暂不应视为正式完成条目。
- 首轮发现的索引漂移问题已在 2026-05-06 完成收口，`nyos-kegai` 命名漂移也已处理完成，当前主要剩余待考证条目与台账清洁问题。
- 第二阶段收口已建立单独清单：[wiki-remaining-high-value-pages.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/wiki-remaining-high-value-pages.md)，后续优先按该表推进。

---

## 修复优先级

### P0：高风险正文错误

这类问题会直接影响页面可信度或可用性，包括串页、错页、截断、表格塌陷、正文内容错配。

1. [knowledge-base/wiki/entities/giant-octopus.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/giant-octopus.md)
2. [knowledge-base/wiki/entities/horse.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/horse.md)
3. [knowledge-base/wiki/entities/spider.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spider.md)
4. [knowledge-base/wiki/entities/rlim-shaikorth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rlim-shaikorth.md)
5. [knowledge-base/wiki/entities/serpent-people-degenerate.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/serpent-people-degenerate.md)
6. [knowledge-base/wiki/entities/wild-boar.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/wild-boar.md)
7. [knowledge-base/wiki/entities/alligator-crocodile.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/alligator-crocodile.md)
8. [knowledge-base/wiki/entities/bear.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bear.md)
9. [knowledge-base/wiki/entities/nyos-kegai.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nyos-kegai.md)
10. [knowledge-base/wiki/entities/servants-of-ygolonac.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/servants-of-ygolonac.md)
11. [knowledge-base/wiki/entities/will-o-the-wisp.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/will-o-the-wisp.md)

### P1：来源待考证与正式目录隔离问题

1. [knowledge-base/wiki/synthesis/yuggya.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/yuggya.md)
2. [knowledge-base/wiki/synthesis/star-worm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/star-worm.md)
3. [knowledge-base/wiki/synthesis/titus-terence.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/titus-terence.md)

### P1：索引与文件不一致

> 状态更新：本组已于 2026-05-06 完成首轮收口，以下清单保留为历史问题记录。

未被索引收录：

1. [knowledge-base/wiki/concepts/climb.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/concepts/climb.md)
2. [knowledge-base/wiki/concepts/computer-use.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/concepts/computer-use.md)
3. [knowledge-base/wiki/concepts/rules-summary.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/concepts/rules-summary.md)
4. [knowledge-base/wiki/entities/ghizguth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghizguth.md)
5. [knowledge-base/wiki/entities/rlim-shaikorth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rlim-shaikorth.md)
6. [knowledge-base/wiki/entities/serpent-people-degenerate.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/serpent-people-degenerate.md)

索引中存在悬空链接：

1. `entities/dhole-earth.md`（索引存在，文件不存在）

### P2：野兽组批量复核

以下条目已出现“裸数值”“攻击表错位”“混入其他生物内容”“缺来源段”等信号，需要统一二次审查：

- `african-elephant`
- `alligator-crocodile`
- `bat-swarm`
- `bear`
- `big-cat`
- `bigfoot-sasquatch`
- `camel`
- `giant-octopus`
- `gorilla`
- `hippopotamus`
- `horse`
- `lake-monster`
- `megalodon`
- `orca`
- `piranha`
- `rats-swarm`
- `rhinoceros`
- `scorpion`
- `snake`
- `snapping-turtle`
- `spider`
- `wild-boar`

---

## 问题清单

| 路径 | 状态 | 优先级 | 问题类型 | 备注 |
|------|------|--------|----------|------|
| `entities/giant-octopus.md` | 已修复 | P0 | 正文错配 | 已按原文恢复章鱼数据，去除水虎鱼串入内容 |
| `entities/horse.md` | 已修复 | P0 | 标题/正文错配 | 已恢复为普通马条目，并拆出 `invisible-horse.md` |
| `entities/spider.md` | 已修复 | P0 | 正文错配 | 已恢复为蜘蛛环境危险条目，并拆出 `cat.md` |
| `entities/rlim-shaikorth.md` | 已修复 | P0 | 正文串页 | 已移除混入的撒埃蒂内容并按原文重整条目 |
| `entities/serpent-people-degenerate.md` | 已修复 | P0 | 内容截断 | 已改为诚实的说明页，明确其并非完整独立条目 |
| `entities/wild-boar.md` | 已修复 | P0 | 属性表塌陷 | 已按原文恢复属性标签与战斗数据 |
| `entities/alligator-crocodile.md` | 已修复 | P0 | 攻击表错位 | 已恢复技能、闪避与战技表述 |
| `entities/bear.md` | 已修复 | P0 | 表格残缺 | 已恢复属性均值、护甲与生命值 |
| `entities/nyos-kegai.md` | 已修复 | P0 | 元数据断裂 | 已修正为“尼约斯-科盖”正文页，且已完成文件名漂移清理 |
| `entities/servants-of-ygolonac.md` | 已修复 | P0 | 元数据断裂/正文脏污 | 已恢复标题、属性块、理智损失与关联实体 |
| `entities/will-o-the-wisp.md` | 已修复 | P0 | 元数据断裂 | 已恢复完整元数据、属性与护甲说明 |
| `entities/loigar.md` | 已修复 | P2 | 正文重复/表格塌陷/条目混淆 | 已重建为独立的罗伊格尔种族页，并与“双子神祇”条目分离 |
| `entities/petsuchos.md` | 已修复 | P2 | 属性段塌陷/OCR 串列 | 已按原文恢复完整属性、战斗、护甲与理智损失 |
| `entities/star-sea-eagle.md` | 已修复 | P2 | 属性段塌陷/技能值错位 | 已按原文恢复完整数据并补回抓取战技说明 |
| `entities/miri-nigri.md` | 已修复 | P2 | 属性段塌陷/尾部残片 | 已重建为完整仆从页，移除“神话中的怪物”残留标题 |
| `entities/skeleton.md` | 已修复 | P2 | 补充块重复/表格残缺 | 已重建为双来源整合页，移除尾部坏块 |
| `entities/zombie.md` | 已修复 | P2 | 补充块重复/属性残缺 | 已重建为双来源整合页，移除尾部坏块并补回变体说明 |
| `entities/fire-vampire.md` | 已修复 | P2 | 补充块残缺/战斗段截断 | 已重建为双来源整合页，恢复个体与团簇攻击规则 |
| `entities/sand-dweller.md` | 已修复 | P2 | 属性段塌陷/均值缺失 | 已重建为双来源整合页，恢复组合体注释与宗教关联 |
| `entities/xiclotl-death-vine.md` | 已修复 | P2 | 表格断裂/正文穿插 | 已重建为完整植物怪物页，恢复成熟体数据与花粉云 |
| `entities/hyperborean.md` | 已修复 | P2 | 属性段塌陷/数值缺失 | 已重建为完整希帕波利亚遗民页，恢复 INT/EDU 均值与法术概率 |
| `entities/bhole.md` | 已修复 | P2 | 严重串页/正文错配 | 已按 40 周年规则书重建为真正的巨噬蠕虫页 |
| `entities/spawn-of-yog-sothoth.md` | 已修复 | P2 | 整页误植/文件名正文错配 | 已移除误植的“莎布-尼古拉斯之子”内容，恢复为真正的犹格索托斯子嗣页 |
| `entities/formless-spawn.md` | 已修复 | P2 | 正文混入他物/双来源坏块叠加 | 已重建为统一条目，恢复通常体型/庞大体型数据 |
| `entities/spawn-of-nyogtha.md` | 已修复 | P2 | 双形态表塌陷/数值块断裂 | 已重建为完整双形态条目，恢复包裹战技与理智损失 |
| `entities/spawn-of-tsathoggua.md` | 已修复 | P2 | 属性表脱落/仅剩骰子串 | 已重建为完整的撒托古亚之后裔条目，恢复属性、战斗和法术说明 |
| `entities/hasturs-spawn.md` | 已修复 | P2 | 属性表断列/段落粘连 | 已重建为完整哈斯塔眷族条目，恢复属性、攫紧、法术与理智损失 |
| `entities/spawn-of-abhoth.md` | 已修复 | P2 | 属性块碎裂/尾段连写 | 已重建为完整阿布霍斯眷族模板，恢复均值、再生与理智损失说明 |
| `entities/foster-child-of-the-old-gods.md` | 已修复 | P2 | 属性表脱落/技能段连写 | 已重建为完整寄养儿模板，恢复属性均值、法术与理智损失 |
| `entities/spectre-hunter.md` | 已修复 | P2 | 属性表碎裂/结构未模板化 | 已重建为完整灵体猎手页，恢复容器束缚、隐形规则与完整战斗数据 |
| `entities/space-eater.md` | 已修复 | P2 | 属性块断裂/攻击表串页 | 已重建为空间吞噬者条目，恢复光灼、吞噬规则与完整数据块 |
| `entities/zu-che-quon.md` | 已修复 | P2 | 双栏串页/属性块断裂 | 已重建为完整祖-图米-戈条目，恢复惧光、黑暗视觉与完整属性数据 |
| `entities/people-of-yaddith.md` | 已修复 | P2 | 双栏串页/技能段漂移 | 已重建为完整雅迪斯之民条目，恢复先进武器、技能、护甲与法术说明 |
| `entities/xiclotl.md` | 已修复 | P2 | 属性块断裂/战斗段未模板化 | 已重建为完整齐克洛尔星怪条目，恢复六臂攻击、抓取战技与弱点说明 |
| `entities/nython-ghuli.md` | 已修复 | P2 | 属性块断裂/战技误植 | 已重建为完整尼洪·古力条目，移除误植抓握战技并恢复寒冷冲击与退化规则 |
| `entities/servitor-of-the-outer-gods.md` | 已修复 | P2 | 属性表碎裂/战斗表断行 | 已重建为完整外神仆役条目，恢复疯狂之乐、触手抓取与完整数据块 |
| `entities/star-spawn-of-cthulhu.md` | 已修复 | P2 | 双来源拼接页/补充块残留 | 已重建为统一的双来源条目，移除损坏补充块并恢复示梦、完整属性和法术说明 |
| `entities/child-of-ubbo-sathla.md` | 已修复 | P2 | 双体型表塌陷/段落断裂 | 已重建为中型/大型双模板条目，恢复属性、攫取/猛冲与消化规则 |
| `entities/shoggoth-master.md` | 已修复 | P1 | 文件名/正文错配 | 已按文件名重建为真正的修格斯使役者页，移除误植的原型修格斯内容 |
| `entities/star-vampire.md` | 已修复 | P2 | 属性块断裂/战斗段残缺 | 已重建为完整星之精条目，恢复隐形、缠绕/撕咬与完整属性数据 |
| `entities/gottswood-goblin.md` | 已修复 | P2 | 属性块断裂/标题残片插入 | 已重建为完整戈茨伍德地精条目，恢复月相设定、属性、护甲与法术说明 |
| `entities/bigfoot-sasquatch.md` | 已修复 | P2 | 属性块断裂/残余标题污染 | 已重建为完整大脚怪/雪人条目，恢复属性、投石攻击和雪人体型注释 |
| `entities/cold-ones.md` | 已修复 | P2 | 属性块断裂/战斗段截断 | 已重建为完整寒冷者条目，恢复冰冻之触、技能、法术与理智损失说明 |
| `entities/cthughan.md` | 已修复 | P2 | 属性块断裂/战斗段塌陷 | 已重建为完整蠕行者条目，恢复解体、属性、武器使用与法术说明 |
| `entities/chakota.md` | 已修复 | P2 | 属性块残缺/尾段旧模板残留 | 已重建为完整查寇塔页，恢复可变体型、噬咬机制、护甲与理智损失说明 |
| `entities/chthonian.md` | 已修复 | P1 | 文件重复/正文截断 | 已重建为正式钻地魔虫页，恢复成年体数据、心灵控制与地震能力，并与 `dhole` 冲突页分离 |
| `entities/dark-crawler.md` | 已修复 | P2 | 特殊能力段断裂/尾段连写 | 已重建为完整黑暗蠕行者页，恢复能量虹吸、护甲、法术与理智说明 |
| `entities/dhol-retainers.md` | 已修复 | P2 | 相邻条目串页/正文错配 | 已重建为真正的多尔眷族页，移除混入的绿渊眷族内容并恢复吸收、隐形与傀儡规则 |
| `entities/dream-crystal-guardian.md` | 已修复 | P2 | 残余旧标题/结构未模板化 | 已重建为完整梦境结晶器守护者页，清除旧标题残片并恢复完整战斗、法术与理智说明 |
| `entities/fishers-from-outside.md` | 已修复 | P2 | 双模板表断裂/攻击段连写 | 已重建为空鱼双模板页，恢复次级/上级数据、抓取规则与致死判定说明 |
| `entities/follower-of-unutterable-oath.md` | 已修复 | P2 | 基础数据挤压/技能护甲段连写 | 已重建为完整不可名状誓言信徒页，恢复进食成长、抓取战技、护甲与法术说明 |
| `entities/ghast.md` | 已修复 | P2 | 双来源拼接页/补充块残留 | 已重建为统一的双来源妖鬼条目，移除损坏补充块并恢复完整属性与背景说明 |
| `entities/ithaquas-spawn.md` | 已修复 | P2 | 双形态表塌陷/旧标题残留 | 已重建为完整伊塔库亚眷族页，恢复人形/怪物形态双模板、天气控制与护甲说明 |
| `entities/people-of-kn-yan.md` | 已修复 | P2 | 属性块断裂/攻击表粘连 | 已重建为完整昆扬之民条目，恢复心灵感应、虚体化、裂解射线枪与完整属性数据 |
| `entities/dagon.md` | 已修复 | P2 | 旧标题残留/正文过于片段化 | 已重建为完整大衮页，恢复大衮与海德拉的设定、魔法、典型显现与三重誓言上下文 |
| `entities/umr-at-tawil.md` | 已修复 | P1 | 文件名/正文严重错配 | 已重建为真正的塔维尔·亚特乌姆尔页，并将误植的“界外幽鬼”正文迁出为排查记录 |
| `entities/windwalker.md` | 已修复 | P2 | 旧模板残留/战斗段未模板化 | 已重建为完整风行者页，恢复形成方式、啃咬恐惧、冰心与法术说明 |
| `entities/witherer.md` | 已修复 | P2 | 旧模板残留/感染机制与尾段连写 | 已重建为完整枯败者页，恢复感染流程、孢子之吻、护甲与理智损失说明 |
| `synthesis/bloodworm.md` | 已修复 | P1 | 文件名/正文重复误植 | 已确认原 `entities/bloodworm.md` 为重复的巨噬蠕虫误建页，现迁出实体目录并保留为误植排查记录 |
| `synthesis/dhole.md` | 已修复 | P1 | 文件名/正文冲突误植 | 已确认原 `entities/dhole.md` 与 `chthonian.md` 正文重复，现迁出实体目录并保留为命名冲突排查记录 |
| `synthesis/umr-at-tawil.md` | 已修复 | P1 | 文件名/正文错配误植 | 已确认原 `entities/umr-at-tawil.md` 曾误落为“界外幽鬼”，现迁出错误正文并保留为排查记录 |
| `synthesis/star-spawn.md` | 已修复 | P1 | 文件名/正文重复误植 | 已确认原 `entities/star-spawn.md` 为重复误建页，现迁出实体目录并保留为误植排查记录 |
| `synthesis/yuggya.md` | 待考证 | P1 | 来源未确认 | 已迁出实体目录，作为待核来源占位页保留 |
| `synthesis/star-worm.md` | 待考证 | P1 | 来源未确认 | 已迁出实体目录，作为待核来源占位页保留 |
| `synthesis/titus-terence.md` | 待考证 | P1 | 来源未确认 | 已迁出实体目录，作为待核来源占位页保留 |
| `concepts/climb.md` | 已修复 | P1 | 索引遗漏 | 已纳入正式索引 |
| `concepts/computer-use.md` | 已修复 | P1 | 索引遗漏 | 已纳入正式索引 |
| `concepts/rules-summary.md` | 已修复 | P1 | 索引遗漏 | 已纳入正式索引 |
| `entities/ghizguth.md` | 已修复 | P1 | 索引遗漏 | 已纳入正式索引 |
| `entities/serpent-people-degenerate.md` | 已修复 | P1 | 索引遗漏 | 已纳入正式索引 |
| `entities/rlim-shaikorth.md` | 已修复 | P1 | 索引遗漏 | 已纳入正式索引 |
| `entities/dhole-earth.md` | 已修复 | P1 | 悬空索引 | 已从索引移除悬空链接 |
| `entities/shan-insect-from-shaggai.md` | 已修复 | P2 | 战斗段缺失/早期长段堆叠 | 已重建为寄生种族页，恢复神经鞭、寄宿控制与夏盖背景 |
| `entities/mi-go-freeze-spray.md` | 已修复 | P2 | 串入无关正文/页面类型错误 | 已清除混入的百万蒙宠者内容，并收束为异星武器页 |
| `entities/nagaae.md` | 已修复 | P2 | 属性块半成品/战斗段未标准化 | 已重建为完整纳伽埃条目，恢复毒液啃咬与尸解黑泥机制 |
| `entities/voormi.md` | 已修复 | P2 | 双模板表塌陷/战斗区缺损 | 已重建平常与变异沃米人双结构，并补清史前背景与战斗数据 |
| `entities/lesser-old-ones.md` | 已修复 | P2 | 上位类别页过薄/缺正式结构 | 已重建为无名守望者总述页，补回教团、遭遇、完整数据与能力 |
| `entities/hypnos.md` | 已修复 | P2 | 旧神页过薄/真实形态与能力说明不足 | 已补清梦境本质、历史形象、击溃意识与正式结构 |
| `entities/nodens.md` | 已修复 | P2 | 旧神页过薄/高位能力与立场说明不足 | 已重写为高位旧神设定页，补回人类投射、夜魇调遣与策略性合作关系 |
| `entities/nug-and-yeb.md` | 已修复 | P2 | 终末双子页内容偏薄/关键设定缺层次 | 已补清黑色太阳、终末预言、昆扬教团与完整数据 |
| `entities/tru-nembra.md` | 已修复 | P2 | 外神页过薄/音乐灾变与教团段缺层次 | 已补清史前灾音、音乐天才崇拜链、声波攻击与完整结构 |
| `entities/iod.md` | 已修复 | P2 | 旧日支配者页过薄/战斗与追猎段缺层次 | 已补清灵魂猎者结构、定身/意志吸取与追猎机制 |
| `entities/ossadagowah.md` | 已修复 | P2 | 串入他页残片/结构失真 | 已移除尼约格萨残片，重建欧萨达格瓦条目与召唤条件 |
| `entities/cymaeghi.md` | 已修复 | P2 | 教团机制与神泪效果散乱 | 已重建为完整塞梅格里页，补清神泪、眼泪酒与黑暗能力 |
| `entities/zathog.md` | 已修复 | P2 | 长段堆叠/战斗与能力结构松散 | 已重建扎索格页，补清子嗣、抓握、汲取之触与地外背景 |
| `entities/hastalyk.md` | 已修复 | P2 | 概念页过薄/变异机制未结构化 | 已重建为“转变力量”页，补清宇宙尺度、携带者与变异规则 |
| `entities/cxaxukuth.md` | 已修复 | P2 | 隐秘支配者页过薄/保密机制未充分表达 | 已重写克希拉守秘结构，并保留来源故意留白的能力边界 |
| `entities/cythulos.md` | 已修复 | P2 | 死亡神祇页堆叠过长/核心机制未收束 | 已重建为迷雾、绝望与触手之手主题页，明确其“死亡或转变”边界 |
| `entities/eihort.md` | 已修复 | P2 | 信息过密但结构失衡 | 已重整迷宫、交易、宿主化、艾霍特之子与精神操纵结构 |
| `entities/hziulquoigmnzhah.md` | 已修复 | P2 | 相邻词条串页/战斗块错植 | 已移除误混入的修普诺斯段，按原文恢复赫祖尔夸伊耿扎正文与完整数据块 |
| `entities/baoht-zuqqa-mogg.md` | 已修复 | P2 | 早期粗填/数据块缺失 | 已按原文补回完整战斗、尾蛰毒素、护甲与重生说明 |
| `entities/cyaegha.md` | 已修复 | P2 | 旧版结构松散/能力尾段遗漏 | 已按原文重排塞伊格亚页，并补回“赐予活力”能力段 |
| `entities/ythogtha.md` | 已修复 | P2 | 能力段断裂/数值块错位 | 已按原文重建伊索格达页，补回完整偶像显现、精神投射与战斗数据 |
| `entities/alvas.md` | 已修复 | P2 | 旧式拼接结构/段落次序失衡 | 已按原文重排阿尔瓦萨页，保留原文附带表格并恢复尖叫机制与完整数据 |
| `entities/ig.md` | 已修复 | P2 | 双来源页早期粗填/战斗块不完整 | 已按原文重排伊格页，补回完整战斗、毒液与护甲说明 |
| `entities/yu-mengtis.md` | 已修复 | P2 | 数值块偏薄/结构未二次对页 | 已按原文重建犹-蒙提斯页，补齐生长、附身与完整战斗数据 |
| `entities/gol-goroth.md` | 已修复 | P2 | 旧式长段粗填/战斗与能力块需原文校准 | 已按原文重建戈尔-格罗斯页，补清迷魂、灌注魔石与完整战斗块 |
| `entities/quachil-uttaus.md` | 已修复 | P2 | 段落次序失衡/战斗块与能力块早期粗填 | 已按原文重建夸切-乌陶斯页，补齐赋予无序状态与时间/空间能力 |
| `entities/bugg-shash.md` | 已修复 | P2 | 早期粗填/能力与光照机制散乱 | 已按原文重建巴格·沙斯页，补清低语、傀儡、控光与完整战斗数据 |
| `entities/rhan-tegoth.md` | 已修复 | P2 | 截断严重/背景与前段缺损 | 已按原文重建兰-提格斯页，补清饥饿、休眠、梦境影响与完整数据 |
| `entities/yibb-tstll.md` | 已修复 | P2 | 旧来源链误标/黑血附属块缺失 | 已按第二卷原文重建伊波-兹特尔页，改正来源并补回黑血独立数据块 |
| `entities/vorvadoss.md` | 已修复 | P2 | 二次对页增补/旧神背景层偏薄 | 已按原文补回诺登斯梦境起源、召唤代价与看守者定位 |
| `entities/minister-of-hali.md` | 已修复 | P2 | 二次对页增补/侍臣定位与现世征兆偏薄 | 已按原文补强卡尔克萨宫廷角色、死亡之舞与现世出现征兆 |
| `entities/yaddith-gho.md` | 已修复 | P2 | 档案页二次对页增补 | 已按原文补入索斯星调查、天津四、流亡与持续追猎背景 |
| `entities/hydra.md` | 已修复 | P2 | 早期独立页粗排/未对齐第二卷并列条目 | 已按“大衮与海德拉”原文重建海德拉独立页并补回双来源链 |
| `entities/nodens.md` | 已修复 | P2 | 二次对页增补/数值与教团层仍偏薄 | 已按原文补回典型显现、教团赐福、与奈亚拉托提普映照关系 |
| `entities/umr-at-tawil.md` | 已修复 | P2 | 二次对页增补/遭遇与时空机制层不足 | 已按原文补回终极之门解释、召唤代价、时间球域氛围与完整数据 |
| `entities/cxaxukuth.md` | 已修复 | P2 | 高概括早期稿/能力留白边界未充分表达 | 已按原文补回克希拉守卫、拉莱耶囚禁、四子嗣关系与完整显现数据 |
| `entities/ghroth.md` | 已修复 | P2 | 外神页偏薄/教团与弑星机制层不足 | 已按原文补回弑星者背景、轨道偏转争议、格罗斯密教与完整毁灭层级 |
| `entities/hypnos.md` | 已修复 | P2 | 梦境旧神页偏薄/古典脉络与教团层不足 | 已按原文补回希腊-罗马脉络、睡梦之子、梦境管理者立场与完整战斗块 |
| `entities/cxaxukluth.md` | 已修复 | P2 | 外神页偏薄/米-戈与死亡教团层不足 | 已按原文补回深夜之幕、米-戈撤离、死亡教团与完整伪足战斗机制 |
| `entities/dagon.md` | 已修复 | P2 | 双神页偏薄/教团与遭遇层未充分展开 | 已按原文补回历史神名脉络、海洋教团、遭遇与深渊氛围说明 |
| `entities/cythulos.md` | 已修复 | P2 | 死亡神祇页高概括/塑像与显现数据缺层 | 已按原文补回塑像机制、完整显现数据与“死亡或转变”边界 |
| `entities/iod.md` | 已修复 | P2 | 旧日支配者页偏薄/追猎与赐福层不足 | 已按原文补回伊欧德之书、追猎机制、阴影之膜与完整战斗块 |
| `entities/tru-nembra.md` | 已修复 | P2 | 声音外神页偏薄/乐谱重演与显现层不足 | 已按原文补回音乐残章、天才音乐家、交响化身与声波毁灭机制 |
| `entities/nug-and-yeb.md` | 已修复 | P2 | 双子终末页偏薄/昆扬仪式与黑色太阳层不足 | 已按原文补回依安-洪、黑色太阳、昆扬崇拜与完整双子数据 |
| `entities/hastalyk.md` | 已修复 | P2 | 变异支配者页偏薄/宇宙尺度与局部苏醒层不足 | 已按原文补回子群假说、地球瘟疫痕迹、携带者与转变机制 |
| `entities/lesser-old-ones.md` | 已修复 | P2 | 总述页偏薄/结局与重生机制缺口 | 已按原文补回典型显现注记、归零爆发与太空重生说明 |
| `entities/zathog.md` | 已修复 | P2 | 地外支配者页偏薄/起源争议与遭遇细节不足 | 已按原文补回逃离旧神说、祈愿术不确定性与随机攻击说明 |
| `entities/ossadagowah.md` | 已修复 | P2 | 星之恶魔页偏薄/传播链与现代教团形态不足 | 已按原文补回欧洲传播线索、混合教团形态与直接遭遇路径 |
| `entities/eihort.md` | 已修复 | P2 | 迷宫交易页机制强但规则数据层缺口 | 已按第二卷与 40 周年原文补回教团限定、子嗣啃食尺度与完整战斗数据 |

### [2026-05-08] 第七十六批修复（继续整批清串页与断裂神祇页）

- 修复 [knowledge-base/wiki/entities/hziulquoigmnzhah.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hziulquoigmnzhah.md)：切除误混入的 `修普诺斯` 段，恢复赫祖尔夸伊耿扎本体、金属赐福与完整战斗数据。
- 修复 [knowledge-base/wiki/entities/baoht-zuqqa-mogg.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/baoht-zuqqa-mogg.md)：按原 PDF 补回典型物理显现、尾蛰毒素、护甲与食腐虫群能力。
- 修复 [knowledge-base/wiki/entities/cyaegha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cyaegha.md)：重排塞伊格亚页结构，补回 `赐予活力` 段并清顺纳伽埃、威恩与教团关系。
- 修复 [knowledge-base/wiki/entities/ythogtha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ythogtha.md)：补齐伊索格达的数值块、偶像显现与精神投射，清掉旧页断裂尾段。
- 修复 [knowledge-base/wiki/entities/alvas.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/alvas.md)：按原文重排阿尔瓦萨页，恢复尖叫能力与完整战斗块，并保留 PDF 中附带的命中部位表。

当前剩余重点：

- 优先继续处理仍停留在 4 月早期粗填状态、且已确认有结构风险的神祇页
- 下一批建议继续推进 `ig.md` 及同类仍未完成二次原文对页的高复杂实体页

### [2026-05-08] 第七十七批修复（继续整批收第二卷旧稿神祇页）

- 修复 [knowledge-base/wiki/entities/ig.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ig.md)：按《怪物之锤 第二卷》重排伊格主体页，补回完整战斗、毒液、抓握与护甲说明。
- 修复 [knowledge-base/wiki/entities/yu-mengtis.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yu-mengtis.md)：重建犹-蒙提斯页，补齐生长、附身、完整数值与攻击块。
- 修复 [knowledge-base/wiki/entities/gol-goroth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/gol-goroth.md)：按原文重建戈尔-格罗斯页，补清迷魂、灌注魔石与完整战斗结构。
- 修复 [knowledge-base/wiki/entities/quachil-uttaus.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/quachil-uttaus.md)：重建夸切-乌陶斯页，补齐赋予无序状态、操纵时间/空间与定身。
- 修复 [knowledge-base/wiki/entities/bugg-shash.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bugg-shash.md)：重建巴格·沙斯页，补清控光、低语、创造傀儡与完整战斗数据。
- 修复 [knowledge-base/wiki/entities/rhan-tegoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rhan-tegoth.md)：重建兰-提格斯页，补清饥饿、休眠、梦境影响与完整数据块。

当前剩余重点：

- 继续优先处理仍停留在 4 月早期状态、且尚未完成二次原文对页的神祇页
- 后续继续抽检其余仍偏薄、但尚未彻底损坏的神祇页，优先做“第二轮原文压实”

### [2026-05-08] 第七十八批修复（补齐伊波-兹特尔并二次压实三张薄弱页）

- 修复 [knowledge-base/wiki/entities/yibb-tstll.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yibb-tstll.md)：确认其实际来源属于《怪物之锤 第二卷》，改正错误来源链，补回黑血、智慧之触、夜魇之母与黑血独立数据块。
- 修复 [knowledge-base/wiki/entities/vorvadoss.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/vorvadoss.md)：按第二卷 OCR 二次对页，补回诺登斯梦境起源、看守者定位、召唤代价与异星教团背景。
- 修复 [knowledge-base/wiki/entities/minister-of-hali.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/minister-of-hali.md)：按第一卷原文补强黄衣之王侍臣的宫廷角色、精神链接、现世征兆与死亡之舞说明。
- 修复 [knowledge-base/wiki/entities/yaddith-gho.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yaddith-gho.md)：保持其“档案/设定页”定位不变，按第一卷原文补入索斯星调查、天津四与雅迪斯毁灭/流亡脉络。

当前剩余重点：

- 继续优先处理仍停留在 4 月早期状态、但还没完成第二轮原文压实的神祇页
- 对已经“能读但偏薄”的条目继续做整批补厚，不再只做零散修补

### [2026-05-08] 第七十九批修复（继续补厚高位神祇薄弱页）

- 修复 [knowledge-base/wiki/entities/hydra.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hydra.md)：按《怪物之锤 第二卷》“大衮与海德拉”原文重建海德拉独立页，补回深海统御者定位、现代海洋教团、双来源链与完整共享数据。
- 修复 [knowledge-base/wiki/entities/nodens.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nodens.md)：按第二卷 OCR 二次压实，补回多重面貌、人类伪装、与奈亚拉托提普的映照关系、典型显现与教团赐福层。
- 修复 [knowledge-base/wiki/entities/umr-at-tawil.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/umr-at-tawil.md)：按第二卷 OCR 补回终极之门的多种解释、召唤代价、无教团设定、时间停滞氛围与完整战斗/能力块。

当前剩余重点：

- 继续抽检那些“已经能引用，但高度概括、还没彻底压实”的旧神与化身页
- 优先选择仍保留 4 月早期骨架痕迹、但原文信息量更高的页面成批推进

### [2026-05-08] 第八十批修复（继续压实高概括外神与旧神页）

- 修复 [knowledge-base/wiki/entities/cxaxukuth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cxaxukuth.md)：按第二卷 OCR 补回拉莱耶囚禁、克希拉守卫、四子嗣关系、能力留白说明与完整物理显现/战斗块。
- 修复 [knowledge-base/wiki/entities/ghroth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghroth.md)：按第二卷 OCR 补回弑星者定位、轨道偏转争议、格罗斯密教、米-戈与夏恩态度，以及完整宇宙重构说明。
- 修复 [knowledge-base/wiki/entities/hypnos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hypnos.md)：按第二卷 OCR 补回古希腊/古罗马脉络、睡梦之子、梦境管理者立场、击溃意识细节与完整显现数据。

当前剩余重点：

- 继续优先处理那些“结构已对，但层次仍薄”的旧神、外神与化身页
- 下一轮仍以整批补厚为主，不回退到单页零散修补

### [2026-05-08] 第八十一批修复（继续补厚外神与死亡神祇页）

- 修复 [knowledge-base/wiki/entities/cxaxukluth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cxaxukluth.md)：按第二卷 OCR 补回深夜之幕、米-戈撤离、死亡教团、伪足攻击范围与完整护甲/重生机制。
- 修复 [knowledge-base/wiki/entities/dagon.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dagon.md)：按第二卷 OCR 补回历史神名脉络、海洋教团样态、遭遇路径与深渊氛围，并与已补厚的 `hydra.md` 保持同层级。
- 修复 [knowledge-base/wiki/entities/cythulos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cythulos.md)：按第二卷 OCR 补回塑像致幻机制、完整显现数据、即死之手与“死亡或转变”解释边界。

当前剩余重点：

- 继续抽检仍显著偏薄的高位页，优先处理旧神、外神与“概念型神祇”条目
- 继续按整批推进，把还能压实的第二卷神祇页尽快收口

### [2026-05-08] 第八十二批修复（继续补厚概念型神祇与宇宙级外神页）

- 修复 [knowledge-base/wiki/entities/iod.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/iod.md)：按第二卷 OCR 补回伊欧德之书、跨梦境追猎、阴影之膜/不死之生与完整白光猎杀机制。
- 修复 [knowledge-base/wiki/entities/tru-nembra.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tru-nembra.md)：按第二卷 OCR 补回音乐残章、灾难性重演、音乐天才、交响化身与声波毁灭层级。
- 修复 [knowledge-base/wiki/entities/nug-and-yeb.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nug-and-yeb.md)：按第二卷 OCR 补回依安-洪、黑色太阳、昆扬仪式、双子分离终末预言与完整数据。
- 修复 [knowledge-base/wiki/entities/hastalyk.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hastalyk.md)：按第二卷 OCR 补回宇宙子群假说、地球瘟疫痕迹、携带者与局部苏醒导致的转变后果。

当前剩余重点：

- 继续优先处理那些“结构对了但仍然像摘要稿”的第二卷神祇页
- 争取用整批压实的方式把剩余高位页尽快收口

### [2026-05-08] 第八十三批修复（继续补厚四张仍可从原文再压一层的页面）

- 修复 [knowledge-base/wiki/entities/lesser-old-ones.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/lesser-old-ones.md)：按第二卷 OCR 补回典型物理显现注记、生命值归零后的 `10D10` 爆发伤害与 `1D100` 年后太空重生说明。
- 修复 [knowledge-base/wiki/entities/zathog.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zathog.md)：按第二卷 OCR 补回“逃离旧神”起源说、`向扎索格祈愿术` 的不确定性，以及其可能忽略或随机攻击近身目标的说明。
- 修复 [knowledge-base/wiki/entities/ossadagowah.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ossadagowah.md)：按第二卷 OCR 补回新英格兰之外的欧洲传播线索、教团吸纳多族群成员的趋势与误入其领域的遭遇路径。
- 修复 [knowledge-base/wiki/entities/eihort.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/eihort.md)：按第二卷与 40 周年规则书原文补回塞文河谷教团限定、艾霍特之子啃食尺度，以及完整属性/战斗/护甲数据块。

本轮说明：

- 这一批不是推翻重写，而是把 4 张“主方向已对、但还能从原文稳定再补一层”的页继续压实。
- `eihort.md` 是本轮最重的一张，因为它原本机制层已经比较完整，这次主要把规则数据层缺口一起补齐。
| `entities/ithaqua.md` | 已修复 | P2 | 页面偏薄/缺失化身与造物层 | 已补回《怪物之锤》主体设定、死亡行者与伊塔库亚之徽记结构 |
| `entities/daoloth.md` | 已修复 | P2 | 主体/化身/子体混排 | 已重建为本体页，分离神圣之光与道罗斯子体说明 |
| `entities/groth-golka.md` | 已修复 | P2 | 旧式长段堆叠/数值结构松散 | 已重排黑锥、教团、能力与战斗数据，收束为正式页面 |
| `entities/abhoth.md` | 已修复 | P2 | 旧页粗排/数值与来源表述不稳 | 已重建为不净之源主体页，重排眷族、心灵感应与吞噬结构 |
| `entities/kassogtha.md` | 已修复 | P2 | 后半串入莉莉丝正文 | 已清除跨页污染，重建为独立的宇宙疾厄页 |
| `entities/atlach-nacha.md` | 已修复 | P2 | 战斗块插入教团段/寄生虫段残缺 | 已重建主体页并补回蜘蛛寄生虫附属结构 |
| `entities/idh-yaa.md` | 已修复 | P2 | 旧式长段堆叠/战斗块未结构化 | 已重建为星之母页，补清造物、吞噬与谱系关联 |
| `entities/ygolonac.md` | 已修复 | P2 | 后半能力与收尾错位 | 已重建为堕落与附身主题页，恢复附身、召唤与伊戈罗纳克之触 |
| `entities/bast.md` | 已修复 | P2 | 头部串入鲍特·祖卡-莫格数据 | 已恢复芭丝特独立页边界，重排猫群、形态变化与战斗结构 |
| `entities/mordiggian.md` | 已修复 | P2 | 典型显现插入正文中段/结构错位 | 已重建为藏骸所之神页，收束食尸鬼教团与吞噬机制 |
| `entities/qyth-az.md` | 已修复 | P2 | 尾段串入兰·提戈斯正文 | 已恢复结晶智能独立页，重排晶体交流、转变肉体与接触机制 |
| `entities/nyogtha.md` | 已修复 | P2 | 典型显现前置/法术仪式与正文交错 | 已重建为暗潜者页，整理驱逐仪式、吸血与强烈气息结构 |
| `entities/zoth-ommog.md` | 已修复 | P2 | 旧式长段堆叠/主体页信息承载不足 | 已重建为克苏鲁子嗣页，补清教团、嗡鸣、冲撞与尾击结构 |
| `entities/qyth-az.md` | 已修复 | P2 | 结晶支配者页二次对页/离散传播链与案例层不足 | 已按原文补回零散崇拜扩散方式与 1908 年“水晶人”案例定位 |
| `entities/zoth-ommog.md` | 已修复 | P2 | 克苏鲁子嗣页二次对页/召唤风险与封印损耗层不足 | 已按原文补回整日召唤风险与拉莱耶枷锁持续损耗的忧虑 |
| `entities/azathoth.md` | 已修复 | P2 | 外神主轴页二次对页/死亡邪教与空洞者层不足 | 已按原文补回死亡邪教、空洞者传闻、厄运之触/传送赐福与毁灭半径细节 |
| `entities/yog-sothoth.md` | 已修复 | P2 | 外神主轴页二次对页/狱墙、宇宙知识与显现边界层不足 | 已按原文补回狱墙解释、球体现身导致的神话/理智暴涨与“未召唤不完全显现”边界 |
| `entities/zhar-and-lloigor.md` | 已修复 | P2 | 双子页偏薄/高原与双生祭仪细节不足 | 已按原文补回阿洛扎尔幻视、同名种族争议、双生教团目标与环境吞食感 |
| `entities/bast.md` | 已修复 | P2 | 猫之旧神页二次对页/古代传播与设定争议层不足 | 已按原文补回庞贝传播、外行星猫族边界与“猫塑神”解释分歧 |
| `entities/mordiggian.md` | 已修复 | P2 | 食尸鬼主神页二次对页/人类线索与立场层不足 | 已按原文补回与食尸鬼关系边界、重点遗骸献祭线索与相关典籍 |
| `entities/nyogtha.md` | 已修复 | P2 | 暗潜者页二次对页/地域召唤记录与驱逐实务层不足 | 已按原文补回叙利亚-利比亚-芬兰召唤记录、调查风险与协助施法细节 |

---

## 执行计划

### 已完成阶段

1. 阶段 1：P0 高风险正文页抢修
2. 阶段 2：待考证条目语义降级与正式目录隔离
3. 阶段 3：索引漂移与命名漂移收口
4. 阶段 4：《怪物之锤 第一卷》野兽组重点复核
5. 阶段 5：首轮回归审计（索引存在性、统计数字、旧路径残留）

### 当前执行阶段：阶段 6（持续补全与抽检）

目标：把工作从“集中救火”切换为“稳定增量修复”，边补内容边维持台账可信度。

建议按以下顺序循环推进：

1. 抽取一个小批次页面（建议每次 `5-10` 页）进行 PDF 对照复核。
2. 优先处理以下信号页：
   - 来源段缺失或 `来源数量` 可疑
   - 存在裸数字、断裂表格、异常标题、明显 OCR 串行
   - 与相邻条目风格差异过大的页面
3. 每修完一批，立即同步三处：
   - 对应页面正文
   - [knowledge-base/wiki/synthesis/wiki-repair-tracker.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/wiki-repair-tracker.md)
   - [knowledge-base/wiki/log.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/log.md)
4. 每批结束后做一次最小回归检查：
   - `index.md` 链接是否仍全部存在
   - 统计数字是否仍与文件系统一致
   - 是否残留旧文件名或旧路径引用

### 阶段 6 的分解清单

- `进行中`：维持台账与日志的当前状态准确性
- `待执行`：继续筛查 `entities/` 中未系统复核的非野兽页
- `待执行`：补做“来源数字段 vs 相关来源列表”一致性抽检
- `待执行`：补做“状态字段取值”与页面模板一致性抽检
- `待执行`：对 `synthesis/` 下占位页决定长期保留策略

### 新近批次记录

#### 第七十三批（2026-05-08）

- `entities/ithaqua.md`
- `entities/daoloth.md`
- `entities/groth-golka.md`

本批继续沿着“主体页与化身/附属设定分层”的修复策略推进，重点清理三类问题：

1. 主体页明显偏薄，无法承载原文中的高价值设定。
2. 本体、化身、附属造物或子体被旧页揉成一团，后续维护成本很高。
3. 数值块与战斗段虽大体可读，但结构仍停留在早期粗填阶段。

处理结果：

- `ithaqua.md` 已从偏薄版本升级为双来源主体页，并补回 `死亡行者` 与 `伊塔库亚之徽记`。
- `daoloth.md` 已从混排页重建为“本体 + 神圣之光 + 子体说明”的可维护结构。
- `groth-golka.md` 已重排黑锥、教团、仆从、战斗和护甲说明，去掉旧式长段堆叠。

#### 第七十四批（2026-05-08）

- `entities/abhoth.md`
- `entities/kassogtha.md`
- `entities/atlach-nacha.md`
- `entities/idh-yaa.md`
- `entities/ygolonac.md`

本批继续提速，集中处理 5 张仍停留在 4 月早期状态、且明显存在结构性问题的神祇页，重点清掉两类高风险问题：

1. 后半页直接串入相邻条目正文。
2. 战斗块、寄生块、化身块或能力块插入错误位置，导致页面虽然“有内容”，但已经不适合继续增量修补。

处理结果：

- `abhoth.md` 已按原文重排为不净母体页，恢复复制、心灵感应与眷族关系。
- `kassogtha.md` 已切除误串入的 `lilith` 内容，恢复卡索格萨独立页面边界。
- `atlach-nacha.md` 已把主体、巨网、战斗和蜘蛛寄生虫拆回正确层次。
- `idh-yaa.md` 已重建为完整星之母页，收束谱系、宇宙智慧与吞噬转化。
- `ygolonac.md` 已重建为“堕落 + 附身 + 召唤”核心结构页，清掉后半段错位收尾。

#### 第七十五批（2026-05-08）

- `entities/bast.md`
- `entities/mordiggian.md`
- `entities/qyth-az.md`
- `entities/nyogtha.md`
- `entities/zoth-ommog.md`

本批继续保持高吞吐，直接处理 5 张还带有明显“错页、串页、插卡式结构损坏”的神祇页。主要针对三类问题：

1. 页面头部或尾部混入相邻条目内容。
2. 典型显现/战斗块被插进教团与背景正文中间。
3. 旧页虽然信息量不少，但段落顺序已经不再可信，继续局部修补会持续放大误读风险。

处理结果：

- `bast.md` 已切除误混入的 `鲍特·祖卡-莫格` 数据，恢复为完整旧神页。
- `mordiggian.md` 已重建为以食尸鬼与藏骸所神权为核心的正式页面。
- `qyth-az.md` 已切断与 `rhan-tegoth` 的串页污染，恢复为结晶智能独立页。
- `nyogtha.md` 已重排驱逐仪式、教团、能力和典型显现顺序。
- `zoth-ommog.md` 已从旧式堆叠页升级为结构化的深海子嗣页。

### 阶段 6 首批候选

当前首批候选已清零。

说明：

- 本轮继续完成 `cyaegha`、`ghlaaki`、`module-crimson-letters`、`tcho-tcho` 的来源补齐与正文清理后，Phase 6 首批候选已全部处理完毕。
- 当前批量扫描结果中，实体页已不存在缺失 `## 相关来源` 段的页面。
- 当前批量扫描结果中，实体页未发现“状态字段非法”或“来源数量与来源列表数量不一致”的问题。
- `synthesis/` 下页面属于分析/占位文档，不强制套用实体页的 `状态` / `类型` 头字段模板。

### 阶段 6 第二轮抽检

- `已修复`：`entities/loigar.md`
- `待执行`：继续筛查其余结构可疑页，优先检查是否仍存在表格塌陷、残留 OCR 串页或补充数据块误混入正文的情况。
- `待执行`：继续检查是否还有“文件名正确，但整页正文来自别的实体”的误植页。
- `待执行`：继续核对跨卷整合页是否属于“有意识整合”还是“误套他页数据”，当前 `spawn-of-zathog.md` 初判为前者，暂不列为坏页。

### 单页完成标准

- 标题、类型、来源数、状态字段完整且自洽
- 正文与条目名称一致
- 表格或列表结构可读
- 至少有一条明确来源链接，且与 `来源数量` 不冲突
- 不再含明显串页、截断、错配残片
- 已在台账中登记状态变化

---

## 修复记录

### [2026-05-06] 初始化追踪文件

- 建立本文件，作为长期修复台账。
- 录入首轮审计结论、问题分级与执行计划。
- 暂未开始正文修复。

### [2026-05-06] 第一批修复（1/3）

- 修复 [knowledge-base/wiki/entities/giant-octopus.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/giant-octopus.md)：按《怪物之锤 第一卷》原文恢复巨型章鱼属性与攻击，移除误混入的水虎鱼内容。
- 修复 [knowledge-base/wiki/entities/horse.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/horse.md)：恢复为普通马/骡/驴条目。
- 新建 [knowledge-base/wiki/entities/invisible-horse.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/invisible-horse.md)：保留从 `horse.md` 中拆出的有效“无形马”内容。
- 修复 [knowledge-base/wiki/entities/spider.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spider.md)：恢复为蜘蛛环境危险与毒蜘蛛范例说明。
- 新建 [knowledge-base/wiki/entities/cat.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cat.md)：保留从 `spider.md` 中拆出的有效“猫”条目。

当前剩余 P0：

- 无

### [2026-05-06] 第三批修复（3/3）

- 修复 [knowledge-base/wiki/entities/alligator-crocodile.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/alligator-crocodile.md)：恢复短吻鳄/鳄鱼的完整攻击表、闪避值与技能段。
- 修复 [knowledge-base/wiki/entities/bear.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bear.md)：恢复三种熊的完整属性、护甲、伤害加值与生命值。
- 修复 [knowledge-base/wiki/entities/nyos-kegai.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nyos-kegai.md)：修复断裂元数据，并将正文明确整理为《怪物之锤 第一卷》中的“尼约斯-科盖”。

### [2026-05-06] 第十六批修复（第二轮抽检推进）

- 修复 [knowledge-base/wiki/entities/loigar.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/loigar.md)：移除重复脏块与坍塌表格，按《克苏鲁的呼唤 40 周年纪念版规则书》与《怪物之锤 第一卷》重建为单一的“罗伊格尔”物种页。
- 决策备注：明确将“罗伊格尔种族”与 [knowledge-base/wiki/entities/zhar-and-lloigor.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zhar-and-lloigor.md) 区分，避免再次与“扎尔与罗伊格尔”双子旧日支配者条目混淆。

### [2026-05-06] 第十七批修复（第二轮抽检扩展）

- 修复 [knowledge-base/wiki/entities/petsuchos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/petsuchos.md)：恢复成年佩特苏齐的完整属性、战斗方式与理智损失。
- 修复 [knowledge-base/wiki/entities/star-sea-eagle.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/star-sea-eagle.md)：恢复星海鱼鹰的完整属性块、抓取战技与关联实体。
- 修复 [knowledge-base/wiki/entities/miri-nigri.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/miri-nigri.md)：恢复米里·尼格利的完整属性、技能与从属关系说明。
- 调整 [knowledge-base/wiki/entities/module-crimson-letters.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/module-crimson-letters.md)：将误插在正文中段的 `相关来源` 段移回页尾，避免来源统计与结构检查失真。
- 决策备注：本批主要处理“正文仍大致正确，但属性块被 OCR 拆散”的页面。

### [2026-05-06] 第十八批修复（传统恐怖怪物收口）

- 修复 [knowledge-base/wiki/entities/skeleton.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/skeleton.md)：整合《克苏鲁的呼唤 40 周年纪念版规则书》与《怪物之锤 第一卷》信息，恢复武器、勒住与伤害抵抗说明。
- 修复 [knowledge-base/wiki/entities/zombie.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zombie.md)：整合双来源信息，恢复标准数据、迅速/智能变体与不死规则。
- 决策备注：这两页原先并非完全错页，而是“可读首版 + 坏掉的补充尾块”叠加；本次改为统一的整合页模板，后续更利于维护。

### [2026-05-06] 第十九批修复（OCR 断列表再清理）

- 修复 [knowledge-base/wiki/entities/fire-vampire.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/fire-vampire.md)：整合双来源信息，恢复炎之精的个体/团簇攻击、催眠舞动与水伤害规则。
- 修复 [knowledge-base/wiki/entities/sand-dweller.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/sand-dweller.md)：恢复完整属性块、组合体说明、护甲与法术概率，并补回乌波-萨斯拉、奈亚拉托提普、伊格相关描述。
- 修复 [knowledge-base/wiki/entities/xiclotl-death-vine.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/xiclotl-death-vine.md)：恢复成熟体完整数据、抓取/噬咬规则、花粉云与再生能力。
- 修复 [knowledge-base/wiki/entities/hyperborean.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hyperborean.md)：恢复希帕波利亚人的完整属性、技能、法术说明与撒托古亚关联。
- 决策备注：本批页面的共同问题是“正文主体尚在，但属性表上半列或均值列脱落”；统一改写后更利于后续批量校验。

### [2026-05-06] 第二十批修复（串页页收口）

- 修复 [knowledge-base/wiki/entities/bhole.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bhole.md)：移除误混入的寒冷者相关残片，按《克苏鲁的呼唤 40 周年纪念版规则书》重建为真正的巨噬蠕虫条目。
- 决策备注：`bhole.md` 已确认不是普通“属性列脱落”，而是重度串页；下一批应优先处理同样可能存在“文件名与正文主题错配”的页面。

### [2026-05-06] 第二十一批修复（误植页纠正）

- 修复 [knowledge-base/wiki/entities/spawn-of-yog-sothoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-yog-sothoth.md)：按《怪物之锤 第一卷》恢复真正的“犹格索托斯的子嗣”，补回似人/怪物双形态数据、抓取战技与无形说明。
- 决策备注：此前该页整页误植为“莎布-尼古拉斯之子”，并非简单 OCR 残缺；现已确认当前 4 本 PDF 中两者都是独立条目，不应互相混用。

### [2026-05-06] 第二十二批修复（双来源坏块收口）

- 修复 [knowledge-base/wiki/entities/formless-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/formless-spawn.md)：移除误混入的不相关描述，统一为真正的无形眷族条目，并恢复通常体型/庞大体型数据。
- 修复 [knowledge-base/wiki/entities/spawn-of-nyogtha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-nyogtha.md)：恢复人类/怪物双形态数据、包裹战技、护甲规则与理智损失。
- 决策备注：这两页都属于“原始正文还在，但被后续补充块和断列冲坏”的情形；重建比继续局部缝补更可靠。

### [2026-05-06] 第二十三批修复（单页断列收口）

- 修复 [knowledge-base/wiki/entities/spawn-of-tsathoggua.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-tsathoggua.md)：按《怪物之锤 第一卷》恢复完整属性、触手/撕咬/踩踏攻击、法术与理智损失。
- 决策备注：该页主题本身没有错，但属性表与技能段几乎完全掉列，属于“壳还在、数据全散”的典型 OCR 损坏页。

### [2026-05-06] 第二十四批修复（眷族页再收口）

- 修复 [knowledge-base/wiki/entities/hasturs-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hasturs-spawn.md)：恢复哈斯塔眷族的完整属性、攫紧战技、护甲、法术与理智损失。
- 修复 [knowledge-base/wiki/entities/spawn-of-abhoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-abhoth.md)：恢复阿布霍斯眷族的完整属性均值、碾压战技、再生与可变理智损失。
- 决策备注：这两页与 `spawn-of-tsathoggua` 一样，主题本身正确，但“数据块碎裂 + 尾段粘连”严重影响可用性；重建后结构已恢复正常。

### [2026-05-06] 第二十五批修复（模板断列继续收口）

- 修复 [knowledge-base/wiki/entities/foster-child-of-the-old-gods.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/foster-child-of-the-old-gods.md)：恢复完整属性、典型攻击、法术与理智损失说明。
- 决策备注：`spawn-of-zathog.md` 已复核，其当前状态更像是基于《怪物之锤 第二卷》“扎索格持续产子”设定，对《怪物之锤 第一卷》相近模板数据进行的显式整合，而非新的误植页，因此暂不列为修复对象。

当前剩余 P0：

- 无

### [2026-05-06] 第四批修复（P0 收口）

- 修复 [knowledge-base/wiki/entities/servants-of-ygolonac.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/servants-of-ygolonac.md)：恢复标题、来源数、类型与完整属性块，并补回低语腐化与理智损失说明。
- 修复 [knowledge-base/wiki/entities/will-o-the-wisp.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/will-o-the-wisp.md)：恢复鬼火条目的完整元数据、属性、护甲与理智损失。

当前状态：

- 已确认的 P0 高风险正文问题已全部处理完毕。

### [2026-05-06] 第五批修复（索引收口）

- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md)：补入此前未收录的 `climb`、`computer-use`、`rules-summary`、`ghizguth`、`rlim-shaikorth`、`serpent-people-degenerate`、`cat`、`invisible-horse` 与 `wiki-repair-tracker`。
- 从索引移除悬空条目 `entities/dhole-earth.md`。
- 同步修正综合分析区与统计数字，使索引总数重新与当前文件系统一致。

当前剩余 P1/P2：

- 待考证条目：`yuggya`、`star-worm`、`titus-terence`
- 当时尚未处理：野兽组二次系统复核（现已在后续批次完成）

### [2026-05-06] 第六批处理（待考证条目核销）

- 复核 [knowledge-base/wiki/synthesis/yuggya.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/yuggya.md)：当前 4 本 PDF 中仅检出 `Yuggya Chants` 与 `犹基亚 (Yuggya) 通神术` 一类书名/法术上下文，未见独立怪物条目，继续保持 `待考证`。
- 复核 [knowledge-base/wiki/synthesis/star-worm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/star-worm.md)：当前 4 本 PDF 提取文本中未检出 `Star Worm / 星之虫` 的对应实体页，继续保持 `待考证`。
- 复核 [knowledge-base/wiki/synthesis/titus-terence.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/titus-terence.md)：当前检索更支持其来源为 `Titus Crow / 提图斯·克罗` 的误识别，而不是独立神话怪物，继续保持 `待考证`。

当前剩余重点：

- 当时尚未处理：文件名/标题漂移与野兽组二次系统复核（现均已在后续批次处理）

### [2026-05-06] 第七批修复（命名漂移清理）

- 将旧路径 `entities/nyth-kell.md` 统一收口为 `entities/nyos-kegai.md`，与正文标题“尼约斯-科盖 (Nyos-Kegai)”保持一致。
- 将配图 `images/nyth-kell.jpg` 重命名为 `images/nyos-kegai.jpg`，并同步修正页面内部引用。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md) 与 [knowledge-base/wiki/concepts/cthulhu-mythos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/concepts/cthulhu-mythos.md) 中的旧链接。

当前剩余重点：

- 当时尚未处理：野兽组二次系统复核（现已完成）

### [2026-05-06] 第八批修复（野兽组首轮）

- 修复 [knowledge-base/wiki/entities/african-elephant.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/african-elephant.md)：恢复非洲象的属性表、攻击表、技能与护甲说明。
- 修复 [knowledge-base/wiki/entities/bat-swarm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bat-swarm.md)：恢复蝙蝠集群的完整属性块、群体生命规则与攻击数据。
- 修复 [knowledge-base/wiki/entities/big-cat.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/big-cat.md)：重建山猫/猞猁、山狮/豹、狮子、老虎四组属性与对应战斗数据。
- 修复 [knowledge-base/wiki/entities/camel.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/camel.md)：恢复骆驼属性表、攻击表、技能与护甲。
- 修复 [knowledge-base/wiki/entities/gorilla.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/gorilla.md)：恢复大猩猩属性、战技、技能与护甲说明。
- 修复 [knowledge-base/wiki/entities/hippopotamus.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hippopotamus.md)：恢复河马属性表、摔打/碾压/冲击船只说明与攻击表。

当前剩余重点：

- 当时尚未处理：`lake-monster`、`megalodon`、`orca`、`piranha`、`rats-swarm`、`rhinoceros`、`scorpion`、`snake`、`snapping-turtle`（现已在后续批次处理）

### [2026-05-06] 第九批修复（野兽组第二轮）

- 修复 [knowledge-base/wiki/entities/megalodon.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/megalodon.md)：恢复巨齿鲨的完整属性表、战斗数据、技能、护甲与理智损失。
- 修复 [knowledge-base/wiki/entities/orca.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/orca.md)：恢复杀人鲸属性表、攻击表、技能与护甲说明。
- 修复 [knowledge-base/wiki/entities/rats-swarm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rats-swarm.md)：恢复鼠群属性块、围攻规则与攻击数据。
- 修复 [knowledge-base/wiki/entities/scorpion.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/scorpion.md)：移除损坏结构，改写为基于原文的毒性参考页，不再伪装为缺失属性块的完整战斗页。

当前剩余重点：

- 当时尚未处理：`lake-monster`、`piranha`、`rhinoceros`、`snake`、`snapping-turtle`（现已在后续批次处理）

### [2026-05-06] 第十批修复（野兽组收口）

- 修复 [knowledge-base/wiki/entities/lake-monster.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/lake-monster.md)：恢复湖怪的完整属性表、攻击表、技能、护甲与理智损失。
- 修复 [knowledge-base/wiki/entities/piranha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/piranha.md)：改写为忠实于原文的“群体危险机制说明页”，不再伪造缺失的统一属性块。
- 修复 [knowledge-base/wiki/entities/rhinoceros.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rhinoceros.md)：恢复黑犀牛属性表、冲锋/践踏数据、技能与护甲。
- 整理 [knowledge-base/wiki/entities/snake.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/snake.md)：保留原有有效内容，补齐版式、段落与“常见毒蛇”分节，移除提取残留标题。
- 整理 [knowledge-base/wiki/entities/snapping-turtle.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/snapping-turtle.md)：统一为“鳄龟”总条目，补齐说明结构并移除提取残留标题。

当前剩余重点：

- 待考证条目：`yuggya`、`star-worm`、`titus-terence`
- 追踪文档历史记录仍需持续保持与现状一致

### [2026-05-06] 第十三批修复（Phase 6 首轮抽检）

- 修复 [knowledge-base/wiki/entities/dust-dweller.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dust-dweller.md)：移除截断尾部与提取残片，补全属性、战斗、护甲、理智损失与来源段。
- 修复 [knowledge-base/wiki/entities/ithaqua.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ithaqua.md)：去除误混入的“伊欧德”内容，按 `coc40` 重建伊塔库亚条目与来源段。
- 修复 [knowledge-base/wiki/entities/nofer-kee.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nofer-kee.md)：清理“类神诺弗刻”与寒地怪物 `Gnoph-Keh` 的混杂叙述，按当前文件名收口为诺弗-刻生物页，并补齐来源。
- 修复 [knowledge-base/wiki/entities/vorvadoss.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/vorvadoss.md)：移除误串入的伏尔索姆残片，补全属性、火焰攻击、护甲与来源段。

当前剩余重点：

- Phase 6 首批候选已缩减为：`cyaegha`、`ghlaaki`、`module-crimson-letters`、`tcho-tcho`
- 待考证条目仍保留在 `synthesis/`，后续若找到可靠原始来源再决定去留

### [2026-05-06] 第十四批修复（Phase 6 首轮收口）

- 修复 [knowledge-base/wiki/entities/cyaegha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cyaegha.md)：补齐生命值、伤害加值、护甲规则、相关概念与来源段。
- 修复 [knowledge-base/wiki/entities/ghlaaki.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghlaaki.md)：补齐属性尾部、护甲、法术说明、互链与来源段。
- 修复 [knowledge-base/wiki/entities/module-crimson-letters.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/module-crimson-letters.md)：保留已整理的模组正文，仅补入相关概念与来源段。
- 修复 [knowledge-base/wiki/entities/tcho-tcho.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tcho-tcho.md)：移除误混入的“猪人”条目，改写为基于原文的乔乔人说明页与标准数据。

当前剩余重点：

- Phase 6 首轮候选已全部处理完成，可转入第二轮抽检
- 待考证条目仍保留在 `synthesis/`，后续若找到可靠原始来源再决定去留

### [2026-05-06] 第十五批修复（第二轮抽检启动）

- 修复 [knowledge-base/wiki/entities/children-of-ig.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/children-of-ig.md)：重建伊格之子范例蛇种页，修复损坏表格与断裂元数据，并将类型明确为“神话怪物”。
- 修复 [knowledge-base/wiki/entities/young-of-the-outer-gods.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/young-of-the-outer-gods.md)：将损坏的通用模板页重写为可用的“外神幼体”说明页，补齐属性、护甲、法术与理智损失。
- 修复 [knowledge-base/wiki/entities/daughter-of-atlach-nacha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/daughter-of-atlach-nacha.md)：补全转化、织网、麻痹毒液、进食规则、属性与法术说明。
- 更新 [knowledge-base/wiki/entities/lesser-old-ones.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/lesser-old-ones.md) 与 [knowledge-base/wiki/entities/windwalker.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/windwalker.md)：将历史遗留的 `类型: 未知` 收口为“神话怪物”。
- 修复 [knowledge-base/wiki/entities/zhar-and-lloigor.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zhar-and-lloigor.md)：移除误复制的“罗伊格尔种族”正文，改回基于《怪物之锤 第二卷》的双子旧日支配者条目。

当前剩余重点：

- `entities/` 中 `类型: 未知` 已清零
- 下一轮高优先级页：`loigar.md`，其内容仍与 `zhar-and-lloigor.md` 的旧错页高度重叠，且本身结构脏污

### [2026-05-06] 第二十六批修复（第二轮抽检继续）

- 修复 [knowledge-base/wiki/entities/spectre-hunter.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spectre-hunter.md)：重建灵体猎手页面，恢复隐形、容器束缚与驱逐之吟相关说明，并补齐完整属性和战斗数据。
- 修复 [knowledge-base/wiki/entities/space-eater.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/space-eater.md)：重建空间吞噬者页面，恢复非实体注释、光灼能力、吞噬规则及完整属性块。

当前剩余重点：

- 继续筛查其余结构可疑页，重点留意“正文主题仍对，但属性表和攻击表已被 OCR 撕裂”的页面
- 下一批优先候选：`xiclotl.md`、`zu-che-quon.md`、`nython-ghuli.md`、`people-of-yaddith.md`

### [2026-05-06] 第二十七批修复（第二轮抽检继续）

- 修复 [knowledge-base/wiki/entities/zu-che-quon.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zu-che-quon.md)：重建祖-图米-戈页面，恢复惧光、黑暗视觉、完整属性和战斗数据。
- 修复 [knowledge-base/wiki/entities/people-of-yaddith.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/people-of-yaddith.md)：重建雅迪斯之民页面，恢复先进武器、完整属性、技能、护甲与法术说明。

当前剩余重点：

- 继续处理同类双栏串页和技能段漂移页，优先候选仍包括 `xiclotl.md` 与 `nython-ghuli.md`
- 持续警惕“相邻条目互相咬住”的情况，尤其是 `mm1` 中连续排版区域

### [2026-05-06] 第二十八批修复（第二轮抽检继续）

- 修复 [knowledge-base/wiki/entities/xiclotl.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/xiclotl.md)：重建齐克洛尔星怪页面，恢复六臂攻击、抓取战技、完整属性与冷弱点说明。
- 修复 [knowledge-base/wiki/entities/nython-ghuli.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nython-ghuli.md)：重建尼洪·古力页面，恢复退化、寒冷冲击与完整属性，并移除误植的抓握战技。

当前剩余重点：

- 继续筛查是否还有“技能表或战斗表把相邻条目内容吸进来”的页面
- 下一批可优先检查 `servitor-of-the-outer-gods.md`、`star-spawn.md` 等仍可能存在模板裂缝的页

### [2026-05-07] 第二十九批修复（第二轮抽检继续）

- 修复 [knowledge-base/wiki/entities/servitor-of-the-outer-gods.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/servitor-of-the-outer-gods.md)：重建外神仆役页面，恢复疯狂之乐、触手抓取、完整属性与再生/免疫说明。
- 新增追踪项 [knowledge-base/wiki/entities/star-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/star-spawn.md)：确认其为高疑似重复误植页，当前正文与 `star-vampire.md` 基本重复，而仓库中已另有 `star-spawn-of-cthulhu.md` 承载真正的星之眷族内容。

当前剩余重点：

- 优先裁定 `star-spawn.md` 的去留与处理方式，避免索引中保留重复实体
- 继续检查是否还有“文件名指向 A，正文却完整落在 B”的历史误建页

### [2026-05-07] 第三十批修复（重复误建页降级）

- 迁移 [knowledge-base/wiki/entities/star-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/star-spawn.md) 至 [knowledge-base/wiki/synthesis/star-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/star-spawn.md)，确认其并非独立正式实体页，而是历史重复误建页。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md) 的实体区、综合分析区与统计数字，移除重复实体计数。

当前剩余重点：

- 继续筛查是否还有类似 `star-spawn` 这样的“索引中存在，但正文实际上只是另一条目的重复副本”的页面
- 后续可优先复核 `star-spawn-of-cthulhu.md` 本身的版式与双来源整合质量

### [2026-05-07] 第三十一批修复（双来源拼接页收口）

- 修复 [knowledge-base/wiki/entities/star-spawn-of-cthulhu.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/star-spawn-of-cthulhu.md)：将 40 周年规则书与《怪物之锤 第一卷》的内容重组为统一条目，移除损坏的“怪物之锤补充块”，恢复示梦、完整属性、护甲与法术说明。

当前剩余重点：

- 继续优先筛查仍保留“前半原页 + 后半补充块”结构的双来源实体页
- 复核是否还有旧页中保留了错误的 `关联实体` 或来源段顺序问题

### [2026-05-07] 第三十二批修复（错配与双模板页收口）

- 修复 [knowledge-base/wiki/entities/child-of-ubbo-sathla.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/child-of-ubbo-sathla.md)：重建伊波-萨斯拉之子页面，恢复中型/大型双体型属性、攫取/猛冲与消化规则。
- 修复 [knowledge-base/wiki/entities/shoggoth-master.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shoggoth-master.md)：按文件名和源文重建为真正的修格斯使役者页，清除误植的“原型修格斯”正文。

当前剩余重点：

- 继续追查是否还有像 `shoggoth-master` 这样“文件名和标题看似对，但正文完全落到别的实体”的页面
- 持续筛查保留裸骰串和 `## 神话中的怪物` 残余标题的页

### [2026-05-07] 第三十三批修复（裸骰串页继续收口）

- 修复 [knowledge-base/wiki/entities/star-vampire.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/star-vampire.md)：重建星之精页面，恢复隐形、缠绕/撕咬机制与完整属性块。
- 修复 [knowledge-base/wiki/entities/gottswood-goblin.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/gottswood-goblin.md)：重建戈茨伍德地精页面，恢复属性、月相相关设定、护甲和法术说明。

当前剩余重点：

- 继续处理仍保留裸骰串或残留 `## 神话中的怪物` 标题的页
- 当前下一批可优先复核：`cthughan.md`、`bigfoot-sasquatch.md`、`cold-ones.md`

### [2026-05-07] 第三十四批修复（裸骰串页继续收口）

- 修复 [knowledge-base/wiki/entities/bigfoot-sasquatch.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bigfoot-sasquatch.md)：重建大脚怪/雪人条目，恢复属性、投石攻击、护甲与雪人体型折半注释。
- 修复 [knowledge-base/wiki/entities/cold-ones.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cold-ones.md)：重建寒冷者条目，恢复冰冻之触、特殊伤害、技能、法术与理智损失说明。

当前剩余重点：

- 继续清理仍保留裸骰串的条目，当前优先候选缩减为 `cthughan.md` 等少数页
- 同步留意仍残留异常标题字符或旧模板污染的页面

### [2026-05-07] 第三十五批修复（裸骰串页继续收口）

- 修复 [knowledge-base/wiki/entities/cthughan.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cthughan.md)：重建蠕行者条目，恢复属性、解体、护甲与法术说明。
- 修复 [knowledge-base/wiki/entities/people-of-kn-yan.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/people-of-kn-yan.md)：重建昆扬之民条目，恢复心灵感应、虚体化、裂解射线枪和完整攻击表。

当前剩余重点：

- 继续扫描仍保留 `## 神话中的怪物` 残余标题的页面，确认其中哪些只是旧版风格，哪些已影响结构可读性
- 裸骰串类问题已明显收缩，后续可以把重点转回“内容错配”和“双来源坏块残留”的精扫

### [2026-05-07] 第三十六批修复（残余旧标题与双来源坏块收口）

- 修复 [knowledge-base/wiki/entities/dream-crystal-guardian.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dream-crystal-guardian.md)：重建梦境结晶器守护者页面，清除残留的 `## 神话中的怪物` 旧标题，恢复完整属性、缠绕机制、法术与理智说明。
- 修复 [knowledge-base/wiki/entities/ghast.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghast.md)：将原“前半旧页 + 后半怪物之锤坏块”重建为统一双来源页，保留妖鬼与食尸鬼/蛇人关联，并移除损坏补充区。

当前剩余重点：

- 继续扫描仍残留 `## 神话中的怪物` 标题的页面，尤其是 `dream-crystal-guardian` 这类“内容大体对，但结构明显还是旧模板”的条目
- 继续追查 `ghast` 这种“双来源拼接页”，优先处理后半段仍挂着“补充数据”坏块的实体页

### [2026-05-07] 第三十七批修复（串页与双形态模板继续收口）

- 修复 [knowledge-base/wiki/entities/dhol-retainers.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dhol-retainers.md)：重建多尔眷族页面，去除混入正文中的绿渊眷族内容，恢复心灵读取、吸收、隐形与傀儡战斗规则。
- 修复 [knowledge-base/wiki/entities/ithaquas-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ithaquas-spawn.md)：重建伊塔库亚的眷族页面，恢复人形/怪物形态双模板、天气控制、护甲与理智损失说明。

当前剩余重点：

- 继续清理仍保留 `## 神话中的怪物` 标题的页面，其中一部分可能只是尾段格式老化，另一部分则像 `dhol-retainers` 一样已伴随正文错配
- 优先复核 `chakota.md`、`fishers-from-outside.md`、`dark-crawler.md` 等仍有明显结构污染的条目

### [2026-05-07] 第三十八批修复（旧模板尾段与双模板断裂继续收口）

- 修复 [knowledge-base/wiki/entities/chakota.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/chakota.md)：重建查寇塔页面，恢复完整属性、可变体型、噬咬对抗、护甲与理智损失说明。
- 修复 [knowledge-base/wiki/entities/fishers-from-outside.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/fishers-from-outside.md)：重建空鱼页面，恢复次级/上级双模板、抓取与脱身规则、上级空鱼致死判定说明。

当前剩余重点：

- 继续收口仍保留 `## 神话中的怪物` 的结构污染页，当前优先目标缩减为 `dark-crawler.md` 等少数页面
- 除了旧标题本身，更要继续留意这类页面是否还伴随“尾段护甲/法术/理智损失连写”或相邻条目串页

### [2026-05-07] 第三十九批修复（特殊能力断裂页收口）

- 修复 [knowledge-base/wiki/entities/dark-crawler.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dark-crawler.md)：重建黑暗蠕行者页面，恢复心电感应、能量虹吸、护甲、法术与理智损失说明。

当前剩余重点：

- 继续复核仍残留 `## 神话中的怪物` 标题的页面，但当前高信号坏页已经明显减少
- 下一轮可优先区分哪些页面只是旧模板残留，哪些页面仍伴随真正的正文错配或结构失真

### [2026-05-07] 第四十批修复（重复误建页降级 + 尾段连写收口）

- 修复 [knowledge-base/wiki/entities/follower-of-unutterable-oath.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/follower-of-unutterable-oath.md)：重建不可名状誓言的信徒页面，恢复基础数据、夜间进食、抓取战技、护甲与法术说明。
- 调整 [knowledge-base/wiki/synthesis/bloodworm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/bloodworm.md)：确认原 `entities/bloodworm.md` 为重复的巨噬蠕虫误建页，迁出实体目录，避免与正式的 [bhole.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bhole.md) 重复。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md) 与 [knowledge-base/wiki/concepts/cthulhu-mythos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/concepts/cthulhu-mythos.md)，收口正式索引与概念互链中的旧 `bloodworm` 指向。

当前剩余重点：

- 继续复核仍残留 `## 神话中的怪物` 标题的页面，当前更需要区分“只是旧风格尾段”与“正文仍有实质错误”的页面
- 下一轮可优先检查 `witherer.md`、`windwalker.md` 或 `umr-at-tawil.md` 这类仍带旧标题但不一定整页坏掉的条目

### [2026-05-07] 第四十一批修复（旧模板残留页继续收口）

- 修复 [knowledge-base/wiki/entities/witherer.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/witherer.md)：重建枯败者页面，恢复感染流程、孢子之吻、治疗说明、护甲与理智损失。
- 修复 [knowledge-base/wiki/entities/windwalker.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/windwalker.md)：重建风行者页面，恢复形成方式、空舞、冰心、啃咬恐惧与法术说明。

当前剩余重点：

- 当前残留 `## 神话中的怪物` 的页面已缩减到 `dagon.md`、`dhole.md`、`chthonian.md`、`umr-at-tawil.md`
- 下一轮应优先判断这 4 页中哪些只是旧模板遗留，哪些还存在真正的正文截断或结构失真

### [2026-05-07] 第四十二批修复（钻地魔虫命名冲突收口）

- 修复 [knowledge-base/wiki/entities/chthonian.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/chthonian.md)：重建正式钻地魔虫页面，恢复成年体数据、心灵控制、地震能力与战斗段。
- 调整 [knowledge-base/wiki/synthesis/dhole.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/dhole.md)：确认原 `entities/dhole.md` 为与 `chthonian` 重复、且又与 `bhole` 命名链冲突的误建页，迁出实体目录。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md)、[knowledge-base/wiki/entities/serpent-people-degenerate.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/serpent-people-degenerate.md) 与 [knowledge-base/wiki/synthesis/bloodworm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/bloodworm.md)，收口旧 `dhole` 路径引用。

当前剩余重点：

- 当前残留 `## 神话中的怪物` 的页面仅剩 `dagon.md` 与 `umr-at-tawil.md`
- 下一轮可优先判断这两页是否只是旧模板遗留，还是仍有结构性问题

### [2026-05-07] 第四十三批修复（旧模板线清零）

- 修复 [knowledge-base/wiki/entities/dagon.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dagon.md)：按《怪物之锤 第二卷》重建为完整大衮页，恢复大衮与海德拉的设定、典型物理显现、法术、召唤仆从与理智损失说明。
- 修复 [knowledge-base/wiki/entities/umr-at-tawil.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/umr-at-tawil.md)：按《怪物之锤 第二卷》重建为真正的塔维尔·亚特乌姆尔页面，恢复门之守卫、门户、全知、典型显现与战斗数据。
- 新增 [knowledge-base/wiki/synthesis/umr-at-tawil.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/umr-at-tawil.md)：记录旧 `umr-at-tawil` 页曾误落为“界外幽鬼”的错配结论。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md) 与 [knowledge-base/wiki/concepts/cthulhu-mythos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/concepts/cthulhu-mythos.md)，同步新的正式实体语义与综合分析索引。

当前剩余重点：

- 以 `## 神话中的怪物` 为特征的旧模板残留页已清零
- 后续工作可以从“结构残留清扫”转向更细粒度的抽检，如双来源整合质量、个别高复杂实体的数值/法术复核

### [2026-05-07] 第四十四批修复（双来源拼接页归一 + 深潜者主条目去缠绕）

- 修复 [knowledge-base/wiki/entities/shoggoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shoggoth.md)：将核心书与《怪物之锤》内容重写为统一双来源页面，恢复伪声、吞噬、抗性与再生说明，并把修格斯主宰/修格斯使役者改为清晰互链。
- 修复 [knowledge-base/wiki/entities/byakhee.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/byakhee.md)：清理旧后半拼接块，按两份来源重建拜亚基页面，恢复星际坐骑、空间折跃推测、紧咬吸血与完整战斗数据。
- 修复 [knowledge-base/wiki/entities/deep-ones.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/deep-ones.md)：将“深潜者 + 大衮誓言 + 修格斯使役者 + 混种深潜者”缝合页重建为正式深潜者主条目，把已拥有独立页面的内容降回互链关系，明确主条目边界。

当前剩余重点：

- 下一轮优先复核 [knowledge-base/wiki/entities/deep-one-hybrid.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/deep-one-hybrid.md)，它虽然已有独立页，但仍保留老式双来源尾块
- 继续抽检其他高复杂双来源页，重点看“主条目是否仍夹带已独立存在的变体/教团/旁支页面”

### [2026-05-07] 第四十五批修复（混种深潜者独立页收口）

- 修复 [knowledge-base/wiki/entities/deep-one-hybrid.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/deep-one-hybrid.md)：按双来源重建混种深潜者独立页，恢复延迟转化、海之召唤、水下适应、完整技能与理智损失，并移除旧尾块与无关互链。

当前剩余重点：

- 深潜者谱系主线已基本收口，下一轮可转向其他仍可能残留“双来源主条目夹带旁支内容”的页面
- 建议继续抽检拥有大量相关实体互链、且历史上常出现拼接尾块的页面，例如大型种族页或兼具核心书/MM 补充的老条目

### [2026-05-07] 第四十六批修复（修格斯系与古老者系双来源页继续归一）

- 修复 [knowledge-base/wiki/entities/shoggoth-lord.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shoggoth-lord.md)：重建修格斯主宰双形态页面，恢复拟态、失控变形、吞噬、双形态均值与理智损失。
- 修复 [knowledge-base/wiki/entities/elder-things.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/elder-things.md)：重建远古种族页面，统一古老者/远古种族表述，恢复战争、退化、南极退守、神秘科技与完整战斗数据。

当前剩余重点：

- 继续沿“仍残留 `## 怪物之锤补充数据` 的双来源页”抽检，优先挑与已修谱系强相关、且尾块仍明显破碎的条目
- 当前候选可优先查看 `shantak-bird.md`、`mi-go.md`、`nightgaunt.md`、`ghoul.md`

### [2026-05-07] 第四十七批修复（幻梦境飞行怪物页继续收口）

- 修复 [knowledge-base/wiki/entities/shantak-bird.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shantak-bird.md)：重建夏塔克鸟页面，恢复星际飞行、危险坐骑、噙咬与高空抛落风险，并理顺与夜魇、阿撒托斯、奈亚拉托提普的关系。
- 修复 [knowledge-base/wiki/entities/nightgaunt.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nightgaunt.md)：重建夜魇页面，恢复诺登斯仆从定位、擒抱协同、搔痒惩罚、梦境牵引与完整战斗数据。

当前剩余重点：

- 仍残留 `## 怪物之锤补充数据` 的实体页已进一步缩减，下一轮可继续处理 `mi-go.md`、`ghoul.md`、`colour-out-of-space.md` 等高频核心页
- 当前更适合优先挑“用户后续最容易引用的核心条目”，避免先花太多时间在边缘生物上

### [2026-05-07] 第四十八批修复（高频核心实体页继续归一）

- 修复 [knowledge-base/wiki/entities/mi-go.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/mi-go.md)：重建米·戈主条目，保留星际真菌、催眠、光隙与脑筒手术等核心设定，并把变体与寒雾喷射器从正文尾块中剥离回独立互链。
- 修复 [knowledge-base/wiki/entities/ghoul.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghoul.md)：重建食尸鬼页面，恢复地下隧道、梦境通路、转化传说、食尸鬼教团与完整战斗说明。
- 修复 [knowledge-base/wiki/entities/colour-out-of-space.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/colour-out-of-space.md)：重建星之彩页面，统一生态循环、厌光、属性吸取、精神攻击、瓦解与实体化规则。

当前剩余重点：

- 可继续优先处理仍残留 `## 怪物之锤补充数据` 的高频条目，如 `hounds-of-tindalos.md`、`flying-polyp.md`、`serpent-people.md`
- `mi-go` 主条目已收口，后续若继续修谱系页，可以考虑抽检 `mi-go-freeze-spray.md` 是否还需要与主条目进一步对齐

### [2026-05-07] 第四十九批修复（高引用古老种族与超维猎手继续收口）

- 修复 [knowledge-base/wiki/entities/hounds-of-tindalos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hounds-of-tindalos.md)：重建廷达罗斯猎犬页面，恢复角度现身、永恒追猎、蓝色脓水、舌击与护甲再生说明。
- 修复 [knowledge-base/wiki/entities/flying-polyp.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/flying-polyp.md)：重建飞水螅页面，恢复远古战争、地下巢穴、隐形、触手、风击波、定身与风暴能力。
- 修复 [knowledge-base/wiki/entities/serpent-people.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/serpent-people.md)：重建蛇人页面，恢复瓦卢西亚/延由迦历史、伊格与撒托古亚派系、休眠与退化、毒牙、法术与科技定位。

当前剩余重点：

- 仍残留 `## 怪物之锤补充数据` 的页面已进一步缩减，下一轮可优先查看 `yithian.md`、`dark-young.md`、`vampire.md` 这类仍高引用或高复杂度条目
- `serpent-people` 主条目已收口，后续可以视需要继续抽检其相关页，如 `children-of-ig.md`、`serpent-people-degenerate.md`

### [2026-05-07] 第五十批修复（高复杂主条目继续归一）

- 修复 [knowledge-base/wiki/entities/yithian.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yithian.md)：重建伟大种族伊斯主条目，保留时间旅行、心智交换、旧锥体与未来甲虫体的总体框架，同时将旧尾部的 `C 型闪电枪` 与整段未来虫群细节从正文剥离回概述。
- 修复 [knowledge-base/wiki/entities/dark-young.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dark-young.md)：重建黑山羊幼崽页面，恢复母神代理、攫取、践踏、异界肉身与法术说明，并把水生变体保留为背景提及而非继续缝在尾段。
- 修复 [knowledge-base/wiki/entities/vampire.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/vampire.md)：重建吸血鬼页面，改为“主规则 + 可选民俗特征”结构，避免把互相冲突的地区传说误写成单一确定设定。

当前剩余重点：

- 仍残留 `## 怪物之锤补充数据` 的页面已进一步缩减，下一轮可优先查看 `dimensional-shambler.md`、`hunting-horror.md`、`mummy.md`
- `yithian` 的未来甲虫体与 `C 型闪电枪` 若后续需要单独落库，可以再评估是否值得新增专题页，而不是继续塞回主条目

### [2026-05-07] 第五十一批修复（收尾阶段继续清核心怪物页）

- 修复 [knowledge-base/wiki/entities/dimensional-shambler.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dimensional-shambler.md)：补回空鬼缺失的完整数值、理智损失、抓握与跨维拖拽规则，不再停留在“只有说明、没有实体数据”的半空状态。
- 修复 [knowledge-base/wiki/entities/hunting-horror.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hunting-horror.md)：重建惊惧猎手页面，恢复奈亚拉托提普关联、缠卷、飞掠搬运、畏光可选弱点与战斗数据。
- 修复 [knowledge-base/wiki/entities/mummy.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/mummy.md)：重建木乃伊页面，统一不死守卫、绞杀、火焰易伤、护甲与理智损失描述。

当前剩余重点：

- 仍残留 `## 怪物之锤补充数据` 的页面只剩 `werewolf.md`、`ghost.md`、`rat-thing.md`、`ghoul-servant-of-ghlaaki.md`、`yugg.md`
- 下一轮可以一口气把这 5 页全部清掉，基本完成本阶段的“双来源尾块清零”

### [2026-05-06] 第十一批处理（待考证语义降级）

- 调整 [knowledge-base/wiki/synthesis/yuggya.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/yuggya.md)、[knowledge-base/wiki/synthesis/star-worm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/star-worm.md)、[knowledge-base/wiki/synthesis/titus-terence.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/synthesis/titus-terence.md) 的类型字段，由“神话怪物”统一降级为“待核来源占位”。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md) 的“待考证条目”区块，避免继续把这 3 页表述为正式怪物实体。
- 本次处理不删除文件与图片，仅进一步降低其正式知识地位，保留后续追溯空间。

当前剩余重点：

- 待考证条目当时仅完成语义降级，目录迁移已在后续批次完成
- `log.md` 若需更细台账，可再补更多维修批次摘要

### [2026-05-06] 第十二批处理（待考证目录迁移）

- 将 `yuggya`、`star-worm`、`titus-terence` 从 `entities/` 目录迁移至 `synthesis/`，使其在目录层面不再伪装为正式实体页。
- 更新 [knowledge-base/wiki/index.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/index.md) 的统计数字与 `synthesis/` 区块。
- 更新本台账中的相关路径引用，保持后续追踪一致。

当前剩余重点：

- 待考证条目后续若找到真实来源，可决定恢复为正式实体页或迁往其他专题目录
- `log.md` 若需更细台账，可再补更多维修批次摘要

### 当前状态总览

- 已确认的 P0 高风险正文问题已全部处理完毕。
- `yuggya`、`star-worm`、`titus-terence` 当前位于 `synthesis/`，作为“待核来源占位”保留，不再算作正式实体页。
- 当前后续工作重点，已从“抢修错页”转为“持续补齐、抽检与来源核销”。

---

## 决策备注

### 关于 `yuggya`

当前检索结果显示，`Yuggya` 在核心书提取文本中更接近咒文或引文残片，而不是独立怪物页来源。

更具体地说，当前可定位到的文本证据主要是 `Yuggya Chants` 书名条目，以及《赞苏石板》中提到的 `犹基亚 (Yuggya) 通神术`，都不支持把它当作独立实体页落库。

### 关于 `titus-terence`

当前检索结果更支持其源头可能是 `Titus Crow / 提图斯·克罗` 的误识别，而非独立实体。

在核心书提取文本中，`Titus Crow` 出现在神话文学与作者背景介绍区，而不是怪物目录或实体统计块附近。

### 关于本文件的位置

本文件放在 `knowledge-base/wiki/synthesis/` 下，作为综合分析与维护台账，不直接混入概念页或实体页。

### 关于新增页面

本轮修复新增了 `invisible-horse.md` 与 `cat.md` 两个实体页，用于承接原先被错误塞入其他页面、但本身有独立价值的有效内容。它们已在 2026-05-06 纳入正式索引。

### 关于 `nyos-kegai.md`

此前文件路径 `nyth-kell.md` 与正文内容“尼约斯-科盖”不一致。根据现有 4 本 PDF 的正文提取文本，当前可确认的独立条目是“尼约斯-科盖 / Nyos-Kegai”，而不是 `Nyth-Kell`。现已完成文件与图片重命名，并同步更新索引与互链。

---

## 历史批次补记

以下内容为前序修复过程中的历史记录补记，用于保留阶段性上下文；其中“当前剩余”类表述仅代表当时状态，不代表现在仍未完成。

### [2026-05-06] 第二批修复（2/3）

- 修复 [knowledge-base/wiki/entities/rlim-shaikorth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rlim-shaikorth.md)：去除误混入的撒埃蒂整段内容，按《怪物之锤 第二卷》重整背景、攻击、能力与相关实体。
- 修复 [knowledge-base/wiki/entities/serpent-people-degenerate.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/serpent-people-degenerate.md)：不再伪装为完整怪物数据页，改为基于原文可确认信息的说明页，并明确“详见地蠕条目”。
- 修复 [knowledge-base/wiki/entities/wild-boar.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/wild-boar.md)：恢复野猪属性表、护甲与技能数据。

当前剩余 P0（历史记录）：

- `alligator-crocodile`
- `bear`
- `nyos-kegai`
- `servants-of-ygolonac`
- `will-o-the-wisp`

### [2026-05-07] 第五十二批修复（双来源尾块清零）

- 修复 [knowledge-base/wiki/entities/ghoul-servant-of-ghlaaki.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghoul-servant-of-ghlaaki.md)：去除页尾旧补充块，并把“新近转化仆从”与“逐渐腐烂老仆”两种常见形态统一纳回正文。
- 修复 [knowledge-base/wiki/entities/ghost.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghost.md)：保留模板化写法，补入典型 INT/POW 基线、锚点、环境干涉与安息路径。
- 修复 [knowledge-base/wiki/entities/rat-thing.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rat-thing.md)：并入魔法援助、POW 供能与异常时空能力说明，校正熟人转化时的理智损失。
- 修复 [knowledge-base/wiki/entities/yugg.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yugg.md)：确认主条目应为“乔乔人”，删除误贴入页尾的“幽格”残段，重整为“受神话污染的人类共同体”结构。
- 修复 [knowledge-base/wiki/entities/werewolf.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/werewolf.md)：统一银、火、再生、诅咒传播与巨狼形态数据，移除残留尾块。

当前结果：

- `entities/` 目录中残留 `## 怪物之锤补充数据` 的页面数量已降为 0。
- 旧模板残留的三类高频问题目前已全部清零：
  - `## 神话中的怪物`
  - `> 类型: 未知`
  - `## 怪物之锤补充数据`

下一阶段建议：

- 优先抽检本轮重写页与高引用主条目的数值一致性、互链完整性与来源措辞边界。
- 对仍在 `synthesis/` 中的待考证页继续做“是否应恢复为正式条目”的来源复核。

### [2026-05-07] 第五十三批修复（第二阶段抽检：高风险神话页）

- 修复 [knowledge-base/wiki/entities/nyos-kegai.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nyos-kegai.md)：把早期“信息堆叠页”重整为统一结构，明确变形、附体、生命汲取、精神回响与感染链的边界。
- 修复 [knowledge-base/wiki/entities/servants-of-ygolonac.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/servants-of-ygolonac.md)：补清巢群扩散、低语腐化与群体攻击逻辑，避免条目只剩数值而看不出其实际恐怖机制。
- 修复 [knowledge-base/wiki/entities/will-o-the-wisp.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/will-o-the-wisp.md)：收束为“民俗征兆型怪物”页面，保留奇异火焰、误导旅者与可选洞察，不额外发明过强能力。

本轮复核结论：

- [knowledge-base/wiki/entities/alligator-crocodile.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/alligator-crocodile.md) 与 [knowledge-base/wiki/entities/bear.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bear.md) 当前更接近“野兽附录页”，虽然结构较简，但核心数据与用途已可接受，暂不优先重写。

当前下一步建议：

- 继续抽检“可用但偏早期模板化”的兽类与神话页，优先处理那些正文正确但来源数、结构层次或互链仍偏粗糙的条目。

### [2026-05-07] 第五十四批修复（大批量野兽附录页标准化）

- 修复 [knowledge-base/wiki/entities/alligator-crocodile.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/alligator-crocodile.md)：统一短吻鳄与鳄鱼的伏击、拖拽与翻甩规则，把它从简表页提升为可直接引用的正式附录页。
- 修复 [knowledge-base/wiki/entities/bear.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bear.md)：按黑熊、灰熊、北极熊分层整理，补清使用场景与战斗定位。
- 修复 [knowledge-base/wiki/entities/horse.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/horse.md)：重整马、骡、驴结构，保留坐骑与役畜定位，并修复原表在后续维护中最容易误读的部分。
- 修复 [knowledge-base/wiki/entities/camel.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/camel.md)：补清沙漠役畜定位、速度信息与战斗方式。
- 修复 [knowledge-base/wiki/entities/african-elephant.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/african-elephant.md)：收束成“大型地形级野兽”条目，补清卷抓与践踏的实际后果。
- 修复 [knowledge-base/wiki/entities/rhinoceros.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rhinoceros.md)：强化其“冲锋型重型野兽”定位，收清冲锋与厚皮结构。
- 修复 [knowledge-base/wiki/entities/wild-boar.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/wild-boar.md)：补清树林伏击与低矮高速近战的威胁感。
- 修复 [knowledge-base/wiki/entities/orca.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/orca.md)：强调群体围猎与水域主场，而不只是一张数值表。
- 修复 [knowledge-base/wiki/entities/hippopotamus.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hippopotamus.md)：补清摔打、碾压与冲击船只规则。
- 修复 [knowledge-base/wiki/entities/megalodon.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/megalodon.md)：统一为灾难级海洋掠食者条目，避免继续停留在孤立表格状态。

本轮策略调整：

- 不再以“每轮少量页面”的方式推进，而改为按主题成组处理。
- 后续优先继续清理这类“数据已在，但正文结构仍像早期附录”的页面。

### [2026-05-07] 第五十五批修复（小型危险生物与群体事件页）

- 修复 [knowledge-base/wiki/entities/bat-swarm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bat-swarm.md)：明确其为“群体扰乱型”敌人，整理规模增减与伤害提升逻辑。
- 修复 [knowledge-base/wiki/entities/rats-swarm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rats-swarm.md)：补清围攻、攻击值分配与“鼠群只是方便游戏设定”的使用边界。
- 修复 [knowledge-base/wiki/entities/spider.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spider.md)：继续保持为机制页，但统一成正式结构，并补入与蜘蛛神相关互链。
- 修复 [knowledge-base/wiki/entities/scorpion.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/scorpion.md)：整理高毒性蝎种的默认判定与地区范例。
- 修复 [knowledge-base/wiki/entities/snake.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/snake.md)：统一蟒蛇与毒蛇双结构，补清缠勒与毒液处理。
- 修复 [knowledge-base/wiki/entities/snapping-turtle.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/snapping-turtle.md)：明确拟鳄龟 / 真鳄龟差异，补清“咬住不放”与断肢后果。
- 修复 [knowledge-base/wiki/entities/piranha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/piranha.md)：保留为机制说明页，但整理伤害、逃生与处理逻辑，避免误以为缺页。

本轮说明：

- 这一批里，`spider`、`scorpion`、`piranha` 本来就更接近“规则事件页”而不是标准怪物卡，因此采取的是“结构化保守整理”而非强行补全不存在的数据。

### [2026-05-07] 第五十六批修复（常见荒野遭遇兽类页）

- 修复 [knowledge-base/wiki/entities/big-cat.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/big-cat.md)：按山猫、豹、狮、虎分层整理，补清扑倒、紧咬与压制逻辑。
- 修复 [knowledge-base/wiki/entities/dog.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/dog.md)：清理 OCR 损坏最严重的字段，重建狗、豺狼、狼、鬣狗四组结构，并对缺损 `STR` 作显式说明。
- 修复 [knowledge-base/wiki/entities/bird.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bird.md)：将金雕、秃鹰、神鹫重整成正式附录页，避免继续停留在近乎裸表格状态。
- 修复 [knowledge-base/wiki/entities/giant-octopus.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/giant-octopus.md)：补清多触手抓取、拖拽与自动撕咬逻辑。
- 修复 [knowledge-base/wiki/entities/gorilla.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/gorilla.md)：明确威吓、捶打、紧抓与猛跃的战斗节奏。
- 修复 [knowledge-base/wiki/entities/lake-monster.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/lake-monster.md)：保持其“奇观型大湖生物”定位，同时补清战斗与叙事边界。

本轮说明：

- `dog.md` 与 `bird.md` 原页都存在较明显的提取损伤，因此本次优先目标是让它们变回“可维护的正式页”，而不是假装原始字段完整无缺。

### [2026-05-07] 第五十七批修复（破损高收益页继续收口）

- 修复 [knowledge-base/wiki/entities/black-dog.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/black-dog.md)：补回完整属性与“燃烧之眼”规则，清除旧页中间断裂的裸数据段。
- 修复 [knowledge-base/wiki/entities/shark.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shark.md)：按锤头鲨、牛鲨、虎鲨、大白鲨四类重整，修正旧页里混乱的护甲与半值字段。
- 修复 [knowledge-base/wiki/entities/wasp-bee-swarm.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/wasp-bee-swarm.md)：保留为机制说明页，但把追击轮数、休克、昏迷、致命条件与非洲化蜂差异写清。

当前策略延续：

- 优先继续处理“旧页明显破碎或字段损伤”的高收益页面。
- 对天然就该写成机制页的条目，继续避免伪造不存在的数据块。

### [2026-05-07] 第五十八批修复（旧页重写与机制页定型）

- 修复 [knowledge-base/wiki/entities/minister-of-hali.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/minister-of-hali.md)：移除错误的“亲吻”战技残留，按原文重建死亡之舞、利刃袍与卡尔克萨宫廷定位。
- 修复 [knowledge-base/wiki/entities/golem.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/golem.md)：重整为民俗造物页，补清《创造之书》、`Aemaeth`、创造代价、失控概率与解除方法。
- 修复 [knowledge-base/wiki/entities/jersey-devil.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/jersey-devil.md)：统一为边陲民俗怪物页，并对原始提取里 `HP 18 / 生命值 19` 的冲突作显式说明。
- 修复 [knowledge-base/wiki/entities/mental-parasite.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/mental-parasite.md)：明确其应为“精神侵染机制页”而非标准战斗卡，补清头脑食粮、觉察、合并 POW 与驱除边界。
- 修复 [knowledge-base/wiki/entities/servants-of-cthulhu.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/servants-of-cthulhu.md)：重建一页此前严重截断的核心神话条目，保守整理转化、成长、再生与基线数据。
- 修复 [knowledge-base/wiki/entities/man-eating-plant.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/man-eating-plant.md)：继续保留为可定制框架页，补清陷阱、逃脱、消化与恢复机制。

本轮说明：

- `mental-parasite.md` 与 `man-eating-plant.md` 都不是适合强行补成“唯一标准怪物卡”的条目，本次采取的是结构化保守整理。
- `servants-of-cthulhu.md` 属于高优先级修复页，原本正文被截断到几乎无法直接使用，这次已恢复为可维护的正式页。

### [2026-05-07] 第五十九批修复（继续收破损神话页）

- 修复 [knowledge-base/wiki/entities/green-abyss-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/green-abyss-spawn.md)：从几乎只有开头描述的状态重建为完整正式页，补回深海社会、催眠之歌、属性与再生机制。
- 修复 [knowledge-base/wiki/entities/martense-clan.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/martense-clan.md)：整理断裂正文与裸公式，重建为“退化食人群体”条目，并补清黑暗视力与群猎特征。
- 修复 [knowledge-base/wiki/entities/tindalosian-hybrid.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tindalosian-hybrid.md)：将单段实验叙述恢复为可引用页面，补回蓝色脓水、吞咬、舌击、相位移动与饥饿裂解机制。
- 修复 [knowledge-base/wiki/entities/brothers-of-chaugnar-faugn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/brothers-of-chaugnar-faugn.md)：清理严重错位数据，重建次级弟兄，并把上级弟兄收束为来源允许的生成框架页。

本轮说明：

- `brothers-of-chaugnar-faugn.md` 的上级弟兄原始来源本就更接近“按父神半值生成”的精英模板，因此本次没有伪造完整定值表。
- `green-abyss-spawn.md` 与 `tindalosian-hybrid.md` 都属于高收益修复：旧页已经不足以稳定引用，本次已恢复核心机制。

### [2026-05-07] 第六十批修复（双形态与设定档案页收束）

- 修复 [knowledge-base/wiki/entities/shaggai-hybrid.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shaggai-hybrid.md)：重建人类形态与成熟形态双数据结构，补清蜕变、女王、酸液口器与 SAN 分层。
- 修复 [knowledge-base/wiki/entities/yaddith-gho.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yaddith-gho.md)：确认其来源本质是“雅迪斯毁灭史摘要”而非单体怪物卡，改写为设定/档案页并补入与雅迪斯之民、巨噬蠕虫的关系。
- 修复 [knowledge-base/wiki/entities/brood-of-eihort.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/brood-of-eihort.md)：清除严重串页与错位数据，重建为“人形集合体 + 蜘蛛群”双结构条目。

本轮说明：

- `yaddith-gho.md` 不再假装是标准怪物页；这是对来源边界更诚实的处理。
- `brood-of-eihort.md` 原页已经混入无关文本，本次优先恢复其可引用性，而不伪造来源未清晰保留的次级字段。

### [2026-05-07] 第六十一批修复（继续收早期模板化神话页）

- 修复 [knowledge-base/wiki/entities/child-of-the-sphinx.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/child-of-the-sphinx.md)：补回古埃及守卫战士定位、基础属性、武器与兽首变体攻击示例。
- 修复 [knowledge-base/wiki/entities/cold-waste-ghoul-hound.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cold-waste-ghoul-hound.md)：整理死亡嚎叫、死亡凝视与完整属性表，恢复墓地追猎者结构。
- 修复 [knowledge-base/wiki/entities/crawler.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/crawler.md)：按“恶魔攀缘者”正式重建为种子寄生 + 破体萌发 + 领地藤蔓三段结构。
- 修复 [knowledge-base/wiki/entities/inhabitants-of-lgyhx.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/inhabitants-of-lgyhx.md)：补回利克斯星住民的金属外壳、异星武器、群体协作与夏恩关联。
- 修复 [knowledge-base/wiki/entities/slor-dwellers.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/slor-dwellers.md)：重整为活体声音/半实体双形态页，补回转译器与音爆机制。
- 修复 [knowledge-base/wiki/entities/reanimator.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/reanimator.md)：恢复化学复生体与身体部位独立活动规则，避免继续停留在长段文字堆叠状态。

本轮说明：

- `crawler.md` 的正式内容应以“恶魔攀缘者”机制为核心，本次已按来源重心收束。
- `slor-dwellers.md` 本质上就是双形态框架页，本次继续保留该结构而非强行压成单表。

### [2026-05-07] 第六十二批修复（高价值总述页与上位实体页）

- 修复 [knowledge-base/wiki/entities/gofnn-hupadgh-shub-niggurath.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/gofnn-hupadgh-shub-niggurath.md)：补回戈弗恩·胡帕德戈、低等萨悌、高等萨悌三层结构，以及“猩红之环”仪式。
- 修复 [knowledge-base/wiki/entities/tindalos-tyrant.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tindalos-tyrant.md)：恢复完整属性、廷达洛斯之力、蓝色脓水、吞咬与舌击机制。
- 修复 [knowledge-base/wiki/entities/million-favored-ones.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/million-favored-ones.md)：确认为“总述 + 已知范例”页，明确百万蒙宠者不止一种形态，并补入沼泽潜伏者范例。

本轮说明：

- `million-favored-ones.md` 不再假装拥有统一标准怪物卡，这是按来源边界作出的收束。
- `gofnn-hupadgh-shub-niggurath.md` 原页断在最关键的萨悌分层前，本次已恢复为可直接引用的正式条目。

### [2026-05-07] 第六十三批修复（收尾最后四张 4 月早期实体页）

- 修复 [knowledge-base/wiki/entities/shan-insect-from-shaggai.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shan-insect-from-shaggai.md)：重建为完整寄生种族页，补回夏盖背景、宿主寄生、精神攻击与神经鞭。
- 修复 [knowledge-base/wiki/entities/mi-go-freeze-spray.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/mi-go-freeze-spray.md)：清除串入的“百万蒙宠者”正文，收束为可直接引用的异星武器条目。
- 修复 [knowledge-base/wiki/entities/nagaae.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nagaae.md)：恢复完整属性表、毒液啃咬、死亡黑泥与技能护甲说明。
- 修复 [knowledge-base/wiki/entities/voormi.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/voormi.md)：重建普通/变异双模板，补清希帕波利亚背景、武器使用与理智损失分层。

本轮说明：

- 这一批清掉了 `entities/` 下最后四张仍停留在 `2026-04-14` 早期模板状态的页面。
- `mi-go-freeze-spray.md` 明确转为“神话造物”页处理，比把装备硬写成怪物卡更符合来源。

### [2026-05-07] 第六十四批修复（补厚一组过薄的神祇与上位实体页）

- 修复 [knowledge-base/wiki/entities/lesser-old-ones.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/lesser-old-ones.md)：从单段说明页扩成正式总述页，补回无名守望者定位、抛掷战技、促服与宇宙洞察。
- 修复 [knowledge-base/wiki/entities/hypnos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hypnos.md)：补清修普诺斯作为梦境管理者/寄生者的双重解释、历史形象、击溃意识与梦境教团。
- 修复 [knowledge-base/wiki/entities/nodens.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nodens.md)：重写为更诚实的高位旧神设定页，补回“非人类盟友”的立场、夜魇调遣与多重显形策略。
- 修复 [knowledge-base/wiki/entities/nug-and-yeb.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nug-and-yeb.md)：补回依安-洪黑色太阳、终末预言、昆扬仪式与子嗣范例。
- 修复 [knowledge-base/wiki/entities/tru-nembra.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tru-nembra.md)：补回史前灾音、音乐家受染、声波伤害尺度与“声音即存在”的外神特征。

本轮说明：

- 这批不是在修明显错页，而是在清理“能看但太薄、难直接支撑引用”的上位实体页。
- `nodens.md` 继续保持为高位设定页，不为了表面完整强行伪造常规近战卡。

### [2026-05-07] 第六十五批修复（继续清理偏薄与错串的支配者页）

- 修复 [knowledge-base/wiki/entities/iod.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/iod.md)：补回灵魂猎者定位、定身、意志吸取、白光猎杀与完整数据。
- 修复 [knowledge-base/wiki/entities/ossadagowah.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ossadagowah.md)：清除误串入的尼约格萨内容，重建星兽条目、暗影形态、魔力吸取与召唤条件。
- 修复 [knowledge-base/wiki/entities/cymaeghi.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cymaeghi.md)：补清澳洲地下教团、神泪、眼泪酒、赘生眼与黑暗区域能力。
- 修复 [knowledge-base/wiki/entities/zathog.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zathog.md)：补回扎尔星背景、乌波-萨斯拉关联、子嗣分娩、可变鞭打与抓握消化机制。

本轮说明：

- `ossadagowah.md` 是这一轮收益最高的一页，因为旧页已经明显混进了别的支配者内容。
- `iod.md`、`cymaeghi.md`、`zathog.md` 则属于“方向没错，但旧版太像压缩笔记”的典型补厚页。

### [2026-05-07] 第六十六批修复（继续补厚高概念支配者页）

- 修复 [knowledge-base/wiki/entities/hastalyk.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hastalyk.md)：重建为“变异力量”页，补清其并非疾病本身，而是推动病原体与生命跃迁的宇宙机制。
- 修复 [knowledge-base/wiki/entities/cxaxukuth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cxaxukuth.md)：重写为克希拉守秘档案页，补回深潜者封锁体系与来源刻意留白能力的边界说明。
- 修复 [knowledge-base/wiki/entities/cythulos.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cythulos.md)：补清死亡教团、迷雾绝望、雾中伸手与“死亡/转变”双重解释。
- 修复 [knowledge-base/wiki/entities/eihort.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/eihort.md)：把原本过度堆叠的长页重整为迷宫、交易、幼体、宿主化与精神操纵五段结构。

本轮说明：

- `cxaxukuth.md` 与 `cythulos.md` 都保留了来源故意留下的高概念模糊性，没有伪造并不存在的固定真相。
- `eihort.md` 这次的重点不是“加内容”，而是把原本已经有的信息重新整理成可直接使用的结构。

### [2026-05-07] 第六十七批修复（收四张神祇错串与表格断裂页）

- 修复 [knowledge-base/wiki/entities/aphoom-zhah.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/aphoom-zhah.md)：按《怪物之锤 第二卷》重排整页，修正属性表断裂、段内换行污染与能力块粘连。
- 修复 [knowledge-base/wiki/entities/cxaxukluth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cxaxukluth.md)：移除误混入的“克希拉”完整战斗卡，恢复为真正的克赛克修克鲁斯条目。
- 修复 [knowledge-base/wiki/entities/ghroth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghroth.md)：清除整段误串入的“基兹古斯”数据与战斗区，恢复为行星级外神总述页。
- 修复 [knowledge-base/wiki/entities/tsathoggua.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tsathoggua.md)：重新梳理双来源页顺序，清除列串、重复标题与段间错位。

本轮说明：

- 这一批都不是“薄页”，而是已经出现明显错串、错位或表格断裂的高风险神祇页，优先级很高。
- `cxaxukluth.md` 与 `ghroth.md` 的问题尤其典型：前者混入了克希拉，后者混入了基兹古斯，若不修会直接误导后续补全工作。

### [2026-05-07] 第六十八批修复（清理修德·梅尔串页）

- 修复 [knowledge-base/wiki/entities/shudde-mell.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shudde-mell.md)：清除后半段误串入的特鲁南伯拉正文，重建为完整的钻地蠕虫之神条目，并恢复地震、腐蚀、地狱魔窟与意念操控结构。

本轮说明：

- `shudde-mell.md` 属于典型的“前半页还能看，后半页突然换怪”的高风险页，继续放着会直接污染同批神祇校对判断。

### [2026-05-07] 第六十九批修复（继续收神祇重灾区）

- 修复 [knowledge-base/wiki/entities/cthugha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cthugha.md)：补回生命值与体格，重排火焰登场、太阳光辉与烈焰爆发结构，并清理旧版关联实体漂移。
- 修复 [knowledge-base/wiki/entities/ghatanothoa.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghatanothoa.md)：清除双栏断句与表格错位，重建石化诅咒、异象发送与战斗段。
- 修复 [knowledge-base/wiki/entities/hastur.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hastur.md)：将本体、琥珀长者、劫掠者、黄衣之王四套内容从混杂长页中拆开重排，恢复为可维护的结构化页面。

本轮说明：

- `hastur.md` 是这一轮最重的一页，旧版已经不是单纯“脏”，而是四套内容互相穿插；继续小修只会越修越乱。
- `cthugha.md` 与 `ghatanothoa.md` 则属于“主题正确但旧 OCR 接页不稳”的高收益页，已同步收口。

### [2026-05-07] 第七十批修复（核心神祇混页再推进）

- 修复 [knowledge-base/wiki/entities/cthulhu.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cthulhu.md)：移除旧页中混入的比莫斯、克拉辛、利维坦长段正文，重建为以克苏鲁本体为中心的正式页面，并将三者收束为“已知化身”说明。
- 修复 [knowledge-base/wiki/entities/nyarlathotep.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nyarlathotep.md)：将被压扁的“千形千面”内容重排为总述页，拆清人类外表化身、怪物化身、代表性面具与共通数据。
- 修复 [knowledge-base/wiki/entities/tulzscha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tulzscha.md)：清除 OCR 污染与表格塌陷，恢复绿火的赐福、能力、攻击表与护甲说明。
- 修复 [knowledge-base/wiki/entities/ghlaaki.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghlaaki.md)：补清碎片设定、梦牵、仆从转化、护甲与重生机制，恢复为可稳定引用的正式页。

本轮说明：

- 这一批的重点不是把所有神祇页压成同一模板，而是先把最危险的串页、错位和结构失真清掉。
- `cthulhu.md` 与 `nyarlathotep.md` 都是高价值核心页；旧页一旦混页，后续补全与引用都会被持续污染，因此优先级很高。

### [2026-05-07] 第七十一批修复（外神主轴页重建）

- 修复 [knowledge-base/wiki/entities/azathoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/azathoth.md)：移除混入的赞达-格拉长段与其他实体残片，重建为以盲目痴愚之神本体为核心的总述页，并将赞达-格拉收束为已知化身。
- 修复 [knowledge-base/wiki/entities/yog-sothoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yog-sothoth.md)：清理被压扁的亚弗戈蒙、塔维尔·亚特乌姆尔内容，重建为主体页加化身概览的结构。
- 修复 [knowledge-base/wiki/entities/shub-niggurath.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shub-niggurath.md)：移除误混入的塞贝克段落与化身正文堆叠，重建为黑暗之母本体页，并将伟大潘神、月透镜守护者收束为化身说明。

本轮说明：

- 这三页都属于“主体页被化身页或其他神祇正文反向污染”的高风险页，不适合继续局部打补丁。
- 本轮处理重点仍然是恢复页面边界、来源诚实度与后续可维护性，而不是强行把所有信息塞进一张怪物卡。

### [2026-05-07] 第七十二批修复（中高风险神祇页再收一批）

- 修复 [knowledge-base/wiki/entities/chaugnar-faugn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/chaugnar-faugn.md)：补回被截断的教团背景、遭遇与选中者结构，重建战斗表与吸血规则。
- 修复 [knowledge-base/wiki/entities/ghizguth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghizguth.md)：重建深海之主页，补清深海谱系争议、卷须缠绕与护甲说明。
- 修复 [knowledge-base/wiki/entities/ubbo-sathla.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ubbo-sathla.md)：按原文重新对齐生命值、体格、子嗣与抓握消化结构，恢复为真正的无本之源页。

本轮说明：

- 这三页的问题不完全相同：`chaugnar-faugn` 偏截断，`ghizguth` 偏薄且数据尾部不稳，`ubbo-sathla` 则是旧版数据和描述与原文对齐度不足。
- 处理策略仍然一致：只接住来源里真正存在的层次，不硬补不存在的“标准答案”。

### [2026-05-08] 第八十四批修复（继续补厚四张中后段神祇页）

- 修复 [knowledge-base/wiki/entities/zhar-and-lloigor.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zhar-and-lloigor.md)：按第二卷 OCR 补回阿洛扎尔幻视、同名罗伊格尔种族争议、双生教团分化目标与环境层面的成对吞食异状。
- 修复 [knowledge-base/wiki/entities/bast.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/bast.md)：按第二卷 OCR 补回庞贝传播线索、外行星猫族不在其统御范围内的边界，以及“人塑神/猫塑神”的解释分歧。
- 修复 [knowledge-base/wiki/entities/mordiggian.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/mordiggian.md)：按第二卷 OCR 补回它与食尸鬼关系的立场边界、重点遗骸献祭线索与《食尸鬼教团》《食尸鬼抄本》两份关键典籍。
- 修复 [knowledge-base/wiki/entities/nyogtha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/nyogtha.md)：按第二卷 OCR 补回叙利亚/利比亚/芬兰召唤记录、调查驱逐法的风险，以及伐蹉-吠罗耶仪式的协助施法细节。

本轮说明：

- 这一批的共同点是“主体没错，但原文里还有一层可稳定落地的教团、遭遇或争议信息”。
- `zhar-and-lloigor.md` 是本轮最值得补厚的一页，因为它先前还停留在 `2026-05-06`，明显比周边第二卷条目老一拍。

### [2026-05-08] 第八十五批修复（继续压实四张高位主轴与中段页）

- 修复 [knowledge-base/wiki/entities/qyth-az.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/qyth-az.md)：按第二卷 OCR 补回离散传播式崇拜方式，以及 1908 年玻利维亚“水晶人”作为局部显现案例的定位。
- 修复 [knowledge-base/wiki/entities/zoth-ommog.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/zoth-ommog.md)：按第二卷 OCR 补回整日召唤的高危性与“拉莱耶枷锁持续损耗”的忧虑层。
- 修复 [knowledge-base/wiki/entities/azathoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/azathoth.md)：按第二卷 OCR 补回死亡邪教、空洞者传闻、厄运之触/传送赐福，以及完整显现毁灭半径的量化尺度。
- 修复 [knowledge-base/wiki/entities/yog-sothoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/yog-sothoth.md)：按第二卷 OCR 补回“狱墙”解释、球体现身导致的神话/理智暴涨与“未召唤不完全显现”的现实边界。

本轮说明：

- 这一批里，`azathoth.md` 和 `yog-sothoth.md` 虽然早已可读，但仍明显比 OCR 主体少了一层关键解释，因此值得二次压实。
- `qyth-az.md` 与 `zoth-ommog.md` 则属于“中段页补钩子”：不是重写，而是把原文里很有用的案例、风险与趋势判断补回来。

### [2026-05-08] 第八十六批修复（继续压实四张核心神祇主体页）

- 修复 [knowledge-base/wiki/entities/shub-niggurath.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/shub-niggurath.md)：按第二卷 OCR 补回希腊/潘神/玛格那玛特等“地球神祇化”误读机制、恩凯与昆扬神庙线索，以及凡人多经教团与神庙接触黑暗之母的路径。
- 修复 [knowledge-base/wiki/entities/cthulhu.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/cthulhu.md)：按第二卷 OCR 补回艺术创作并非单纯模仿、而常是梦触后的物质翻译，补实基层教徒不知自己身处全球结构中的层级感，并压实梦境对创作者与暴力者的典型影响。
- 修复 [knowledge-base/wiki/entities/ghlaaki.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/ghlaaki.md)：按第二卷 OCR 补回格拉基把人类视作有用工具的明确态度、活人与不死仆从并行工作的关系，以及《格拉基启示录》本身也是传播其意志的媒介。
- 修复 [knowledge-base/wiki/entities/tsathoggua.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tsathoggua.md)：按第二卷 OCR 补回其可能仍受旧神残余禁锢的边界、蛇人教团的最高组织性，以及蟾蜍状神像与碗形祭坛等遭遇细节。

本轮说明：

- 这一批四页都不是重做，而是对已经成型的主体页做第二轮 OCR 压实，把“还缺一层原文解释”的地方补平。
- `shub-niggurath.md` 与 `cthulhu.md` 重点在“人类如何误读并接触神祇”，`ghlaaki.md` 与 `tsathoggua.md` 则重点在“教团与媒介如何替主体延伸意志”。

### [2026-05-08] 第八十七批修复（按剩余高价值清单推进第一批）

- 修复 [knowledge-base/wiki/entities/spawn-of-zathog.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-zathog.md)：按第二卷扎索格主体页补回其子嗣并非一次性战斗刷怪，而是巢穴生态与近缘血统逻辑的一部分，并补上遭遇定位。
- 修复 [knowledge-base/wiki/entities/young-of-the-outer-gods.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/young-of-the-outer-gods.md)：按第一卷 OCR 补回它们从阿撒托斯神庭起舞者中分裂/抛射而出的来源、星际漂流与行星灾变路径，以及“事件源”式遭遇定位。
- 修复 [knowledge-base/wiki/entities/children-of-ig.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/children-of-ig.md)：按第一卷 OCR 补回“伊格无所不知”的神罚感、与“伊格的眷族”概念的边界，以及咬后迅速撤离的典型猎杀模式。
- 修复 [knowledge-base/wiki/entities/spawn-of-yog-sothoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-yog-sothoth.md)：按第一卷 OCR 补回人类父/母与“移入体内”两种诞生方式、快速成长与鲜肉需求、古书吸引机制，以及伊本-加兹之粉可令无形子嗣现形的细节。

本轮说明：

- 这批四页里，`young-of-the-outer-gods.md` 与 `spawn-of-yog-sothoth.md` 的补厚收益最大，因为原文里本来就有一层很具体的来源与行为逻辑。
- `spawn-of-zathog.md` 则更像把一张“数据附注页”压实成真正可引用的附属实体页。

### [2026-05-08] 第八十八批修复（按剩余高价值清单推进第二批）

- 修复 [knowledge-base/wiki/entities/formless-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/formless-spawn.md)：按第一卷/40 周年 OCR 补回其作为黑池式活守卫的遭遇感、吞噬容量上限，以及“地底圣所本身在反应”的定位。
- 修复 [knowledge-base/wiki/entities/loigar.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/loigar.md)：按第一卷/40 周年 OCR 补回其对人类社群的长期经营、时间丧失与嗜睡案例，以及可被误归入 UFO 近距离接触的现代线索。
- 修复 [knowledge-base/wiki/entities/rlim-shaikorth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/rlim-shaikorth.md)：按第二卷 OCR 补回其在幻梦境与地球反复显身的判断、信徒也常被吞食的边界，以及伊基尔斯对信徒/航海者的双重意义。
- 修复 [knowledge-base/wiki/entities/space-eater.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/space-eater.md)：按第一卷 OCR 补回仪式后显光、蕨叶状肢体探脑的典型显现、护目装备对光灼难度的更具体影响，以及“信徒误认神圣、实体只把他们当饲料”的遭遇定位。

本轮说明：

- 这批四页里，`loigar.md` 和 `space-eater.md` 的补厚收益最明显，因为原文里那种“现代症状/仪式现场”气味特别强，补回来后页面立刻更像可直接跑团的材料。
- `formless-spawn.md` 与 `rlim-shaikorth.md` 则主要是在把原本正确的页，从“机制说明”压实成“来源气氛也在场”的版本。

### [2026-05-08] 第八十九批修复（按剩余高价值清单推进第三批）

- 修复 [knowledge-base/wiki/entities/people-of-yaddith.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/people-of-yaddith.md)：按第一卷 OCR 补回其时间逆转动机、对米-戈技术的潜在兴趣，以及《雅迪斯幻景》中雅迪斯人与巨噬蠕虫的悲剧背景。
- 修复 [knowledge-base/wiki/entities/hyperborean.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hyperborean.md)：按第一卷 OCR 补回其知识流入亚特兰蒂斯/后世文明的链条、冰川遗民“已灭绝但仍可能残存”的边界，以及入梦者保留文明精神残响的定位。
- 修复 [knowledge-base/wiki/entities/tcho-tcho.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/tcho-tcho.md)：按第一卷与 40 周年 OCR 补回其全球碎片化与混血边界、血脉污染可能延后显现的趋势，以及米里·尼格里起源说的非唯一定位。
- 修复 [knowledge-base/wiki/entities/spawn-of-tsathoggua.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-tsathoggua.md)：按第一卷 OCR 补回“后裔/独立种族/被当神崇拜”三重解释并存的边界，以及其更适合作为神殿报复者而非普通游荡怪的定位。

本轮说明：

- 这一批里，`people-of-yaddith.md` 和 `tcho-tcho.md` 的补厚最有价值，因为原文里对它们的历史动机和社会碎片化写得比旧页更立体。
- `hyperborean.md` 与 `spawn-of-tsathoggua.md` 则是在保持原有正确结构的前提下，把“来源里的余味”补了回来。

### [2026-05-08] 第九十批修复（按剩余高价值清单推进第四批）

- 修复 [knowledge-base/wiki/entities/spawn-of-abhoth.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-abhoth.md)：按第一卷 OCR 补回其并非稳定种族、而是阿布霍斯持续不断产出的失败体、半成品与成熟造物混流，并补清部分成熟个体会留在父神身边照料与服侍他的定位。
- 修复 [knowledge-base/wiki/entities/spawn-of-nyogtha.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/spawn-of-nyogtha.md)：按第一卷 OCR 补回尼约格萨的梦境联络在童年末期就已开始，以及“包裹”并非普通擒抱，而是把目标拖进冰冷胶状、充满黑暗与巨虫感的肉体中。
- 修复 [knowledge-base/wiki/entities/hasturs-spawn.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/hasturs-spawn.md)：按第一卷 OCR 补回其作为哈利湖、黑水桥梁与卡尔克萨边界防线的用法，并压实“愚蠢召唤者通常先被吃掉”的遭遇逻辑。
- 修复 [knowledge-base/wiki/entities/servants-of-cthulhu.md](/Users/alanliu/Projects/CoC-KB/knowledge-base/wiki/entities/servants-of-cthulhu.md)：按第一卷 OCR 补回新近转化者仍保留部分人类社交外壳时反而最危险的阶段感，以及它们特别适合出现在长期腐坏却仍运作的教团据点中。

本轮说明：

- 这一批不是抢救坏结构，而是给四张主神派生/眷族页补上原文里本来就有的行为逻辑、边界用途与过渡阶段危险性。
- 处理完后，剩余高价值清单的前四批已经全部完成，后续基本进入更细的长尾压实阶段。
