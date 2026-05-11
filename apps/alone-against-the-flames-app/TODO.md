# 向火独行 — 后续开发待办

> 更新于 2026-05-11

---

## 已完成

- [x] 指令→效果系统：`module.js` 的 `toNode()` 将 directives 转换为引擎可执行的 effects
- [x] 引擎新增 `tickSkill` 效果 + 骰子表达式（1D3/1D6 等）内部解析
- [x] `checkHints` 从 directives 自动生成，含 difficulty（hard/extreme）和 mode（bonus/penalty）
- [x] 检定 UI 改造：移除奖励骰/惩罚骰手动选择器，检定前隐藏路径按钮，检定后只显示对应路径
- [x] Debug 跳转不再重置角色状态
- [x] localStorage 游戏进度持久化（自动存/读，重开时清除）
- [x] 骰子内联模式：检定掷骰全屏透明 overlay + 右下角 toast 2 秒自动消失
- [x] 结局复盘页面：18 个结局条目到达后展示复盘面板（路径/状态/里程碑/技能成长/重开按钮）
- [x] 孤立 check 修饰符修复：parser 正则扩展支持中文弯引号，新增 consequence 上下文标记
- [x] 检定与路径精确绑定：`classifyOutcome()` 支持多种中文成功/失败/大失败表述，fumble/non_fumble 门控
- [x] ENTRY_SCRIPTS 手动效果系统：19 个条目的 HP/SAN/MP/Luck/技能/物品变化手动配置
- [x] 效果通知 UI：故事区域显示 effect pills（伤害/治疗/成长/物品等）
- [x] 物品获得在角色面板正确显示（inventory 合并修复）
- [x] 属性检定目标值修复：`directivesToCheckHints` 区分 attribute/derived/skill 类型，`resolveCheck` 正确读取属性值和派生值（理智/幸运）
- [x] 伤害阈值自动分支：entry-55 类型条目根据伤害值 vs maxHP/2 自动选择路径，无需玩家手动判断
- [x] 对抗检定 & 战斗系统：5 个战斗场景（entry-150/155/173/235/262）完整实现，含对抗检定解算器、多回合近战状态机、战斗弹出层 UI、DiceBox 3D 骰子集成
- [x] 检定门控效果修复：检定节点的属性损失（adjustSan/adjustHp 等）只在检定失败后才触发，不再进入即扣（entry-191、entry-250 修复）

---

## 待办

### 优先级 1：核心机制补全

1. **孤注一掷（Pushed Roll）**
   - 模组中有"如果你的孤注一掷失败"分支（已被 `classifyOutcome` 识别）
   - 玩家检定失败后应出现"孤注一掷"按钮，允许重掷一次
   - 孤注一掷失败可能有额外惩罚（跳转到不同节点）
   - 需要在检定 UI 流程中插入 push 选项

2. **幸运消耗（Spending Luck）**
   - 规则允许玩家花费幸运值弥补差额通过检定
   - 检定失败后显示"花费 N 点幸运通过"选项（N = roll - target）
   - 需要判断玩家剩余幸运是否足够
   - 花费后更新 luck 值并视为成功

3. **重伤/昏迷状态**
   - HP 降到 maxHP/2 以下时标记"重伤"状态
   - HP 降到 0 时标记"濒死/昏迷"
   - 状态影响后续检定或触发特殊分支

### 优先级 2：体验优化

4. **叙事 flag 触发**
   - `getContextualNotes()` 已有大量 flag 条件文本，但 flag 需要被实际触发
   - 需要在特定条目的 `onEnterEffects` 中添加 `setFlag` 效果
   - 梳理哪些 flag 应该在哪些条目被 set

5. **角色面板 tickSkill 展示验证**
   - 确认技能成长勾选在面板中正确显示绿色标记
   - 游戏结束时汇总展示所有成长的技能

6. **parser 改进**
   - 检查 270 个条目中是否有遗漏的游戏机制文本未被解析为 directives
   - 考虑增加 `gainItem`/`loseItem` directive 类型的自动提取

### 优先级 3：内容与完善

7. **插图资源**
   - `assets/figures/` 目录下的 12 张插图需确认路径正确
   - 条目 1 的 `opening-full-page.png` 是否存在

8. **角色创建流程集成**
   - 当前只支持导入 .coc7 文件或使用示例角色
   - 考虑内嵌简化版角色创建（选属性→选职业→开始游戏）

9. **结局复盘页增强**
   - 完整路径回顾可视化
   - 解锁的结局列表（已解锁 vs 未解锁）
   - 统计数据（总步数、检定成功率、幸运消耗等）

### 优先级 4：长期规划

10. **完整 character-tracker 渲染模块复用**
    - 当前是轻量级只读面板，未来可考虑接入完整追踪器功能

11. **多存档支持**
    - localStorage 当前只存一个存档，考虑支持多个存档槽位

12. **移动端适配**
    - 三栏布局在移动端需要折叠为单栏
    - 骰子 overlay 在小屏幕上的表现

---

## 数据现状

| 指标 | 数值 |
|------|------|
| 总条目数 | 270 |
| 含指令条目 | 90 |
| 检定条目 | 60 |
| 结局条目 | 18 |
| HP 调整指令 | 11 |
| SAN 调整指令 | 9 |
| 技能成长指令 | 21 |
| MP 调整指令 | 1 |
| 困难检定 | 9 |
| 极难检定 | 2 |
| 奖励骰 | 2 |
| 惩罚骰 | 2 |
| 手动 ENTRY_SCRIPTS | 19 |
| 阈值自动分支 | 1 |
| 战斗场景 | 5 |

---

## 关键文件索引

| 文件 | 职责 |
|------|------|
| `js/app.js` | 主入口，状态管理，事件绑定，战斗集成 |
| `js/engine/module-engine.js` | 引擎核心：节点流转、效果执行、阈值门控 |
| `js/engine/opposed-roll.js` | CoC 7e 对抗检定纯函数（成功等级比较） |
| `js/engine/combat-engine.js` | 战斗状态机：回合驱动、骰子请求、伤害应用 |
| `js/data/module.js` | 数据适配：parsed JSON → 引擎节点，ENTRY_SCRIPTS，THRESHOLD_GATES |
| `js/data/combat-scripts.js` | 5 个战斗场景的声明式配置 |
| `js/data/parsed-entries.json` | 解析后的 270 条目原始数据 |
| `js/adapters/dice-adapter.js` | DiceBox 骰子适配器 |
| `js/adapters/character-adapter.js` | 角色卡适配器，检定解析 |
| `js/ui/render.js` | UI 渲染函数 |
| `js/ui/character-panel.js` | 角色面板渲染 |
| `js/ui/combat-overlay.js` | 战斗弹出层 UI |
| `css/app.css` | 主样式 |
| `css/combat.css` | 战斗弹出层样式 |
| `scripts/parse-fulltext.mjs` | 全文解析脚本（生成 parsed-entries.json） |
