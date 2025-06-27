# GitHub Helper Chrome 扩展

该扩展为 GitHub 仓库页面添加了一组实用按钮，方便开发者快速访问与仓库相关的开发工具和搜索功能。

## 效果图

![效果图](https://github.com/wongchisum/github-helper/blob/release/TinySnap.png?raw=true)

## 功能特性

- **Copilot**：快速启动 GitHub Copilot 聊天
- **Deep Wiki**：跳转到该仓库的 DeepWiki 页面
- **VsCode Online**：在 GitHub 的在线 VSCode 环境中打开仓库
- **StackBlitz**：在 StackBlitz 中打开仓库
- **Similar Search**：根据仓库主题(topics)搜索相似仓库

## 使用场景

当你在 GitHub 上浏览一个仓库时，本扩展会在页面顶部添加一组按钮，你可以：

1. 快速启动 Copilot 对话
2. 跳转到该仓库的 DeepWiki 页面查看文档
3. 在浏览器中直接使用 VSCode 在线编辑仓库
4. 在 StackBlitz 中打开仓库进行在线开发
5. 根据仓库主题搜索相似仓库，方便项目调研

## 开发方式

### 技术栈

- React 19
- TypeScript
- Vite 构建工具
- CRXJS Vite 插件（用于 Chrome 扩展开发）

### 项目结构

```
├── src
│ ├── components # 公共组件
│ ├── content # 内容脚本（注入到网页的脚本）
│ └── ... # 其他扩展部分（如弹窗、后台脚本等）
├── manifest.config.ts # 扩展的 manifest 配置文件
└── ... # 其他配置文件


```

### 快速开始

1. **安装依赖**

```bash
npm install

```

2. **启动项目**

```bash
npm run dev
```

开发模式下，Vite 会启动热重载服务，并在 dist 目录生成开发版本的扩展。在 Chrome 中加载 dist 目录即可测试。

3. **构建生产版本**

```bash
npm run build
```

构建完成后，dist 目录下将生成生产版本的扩展。

### 代码说明

核心内容脚本位于 `src/content/github-helper.tsx`，它会在 GitHub 仓库页面注入一组按钮。主要逻辑：

获取当前仓库信息（作者、仓库名、主题）

根据仓库信息生成各个服务的链接

渲染按钮组件

### 依赖说明

@crxjs/vite-plugin：用于将 Vite 项目打包为 Chrome 扩展

vite：构建工具

react & react-dom：UI 库
