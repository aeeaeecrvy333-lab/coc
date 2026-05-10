# 向火独行 · 电子陪跑原型

这是《向火独行》独立 app 的最小脚手架。

当前目标：

- 先验证 `剧情优先` 的主舞台布局
- 先明确 `engine / adapters / data / ui` 的代码边界
- 先把复用 `character-tracker` 和 DiceBox 的接口位置留出来

当前还没有做的事：

- 真实接入 `character-tracker` render 模块
- 真实接入 DiceBox
- 把完整《向火独行》正文结构化
- 结局复盘页

入口文件：

- `index.html`
- `js/app.js`
- `js/engine/module-engine.js`
- `js/adapters/*.js`
- `js/data/module-stub.js`
