# 🖥️ Topaz Blog · 数字桌面

> 一个用 Next.js 14 搭建的 Windows 风格桌面个人网站，打开网站像在用一台迷你电脑：点图标、开窗口、拖动窗口。

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![framer-motion](https://img.shields.io/badge/framer--motion-12-ff69b4)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](#许可证)

🌐 在线预览：https://blog-topaz.pages.dev

---

## 📖 目录

- [项目简介](#项目简介)
- [✨ 特性](#特性)
- [🛠 技术栈](#技术栈)
- [📁 目录结构](#目录结构)
- [🚀 快速开始](#快速开始)
- [✍️ 内容管理](#内容管理)
- [🚢 部署](#部署)
- [📄 许可证](#许可证)

## 项目简介

大多数个人博客逃不出两种形态：要么首页 + 文章列表 + 详情页的文档站，要么炫酷的落地页。这个项目的思路不一样，把个人网站做成一个可以交互的桌面操作系统：

- 桌面上有图标，点一下就打开一个窗口；
- 窗口能拖动、最小化、最大化、关闭，底部任务栏和顶部菜单栏会和窗口状态联动；
- 每个窗口是一个独立模块（文章、随笔、项目、关于、友链……），互不干扰；
- 文章和随笔用 Markdown 书写，自动渲染并高亮代码。

项目代号 `topaz-desktop`，对外展示名 Topaz Blog。

## ✨ 特性

- **桌面窗口系统**：自研窗口管理（打开 / 最小化 / 最大化 / 关闭 / 拖拽 / 层级），毛玻璃标题栏加 framer-motion 弹簧动画，交互流畅。
- **菜单栏 + 任务栏**：顶部菜单点一下打开对应窗口，底部任务栏显示已开窗口，可最小化或恢复，并带一个搜索框。
- **任务栏搜索深链**：在任务栏搜索框输入关键词，点结果可直接打开对应随笔并滚动到那篇。
- **多个窗口模块**：文章、随笔、项目、关于、友链、邮箱、此电脑、回收站。
- **文章 / 随笔用 Markdown 驱动**：写法和写 GitHub README 一样，提交即发布，代码块用 react-syntax-highlighter 高亮（oneLight 主题）。
- **时间线视图**：文章按 日 / 周 / 月 / 年 / 分类 分组，随笔时间线支持标签页切换。
- **关于页统计**：实时显示已写文章字数和网站已运行时间。
- **视频壁纸**：桌面背景是一段循环视频，通过 GitHub Releases 外链加载。
- **微交互**：点击波纹（DesktopRipple）、视差背景等。
- **容器查询响应式**：窗口内部用 `cqw` 单位，字号相对窗口宽度缩放，窗口拉大拉小排版都好看。
- **数据驱动**：加内容只改数据文件，不用碰核心逻辑，配置集中在 `constants.ts`。
- **纯静态、零服务端依赖**：`next export` 导出 `out/`，可部署到任意静态托管（Cloudflare Pages）。

## 🛠 技术栈

| 类别   | 选择                                                     | 说明                        |
| ---- | ------------------------------------------------------ | ------------------------- |
| 框架   | Next.js 14                                 | React 生态成熟，自带路由与构建，支持静态导出 |
| 语言   | TypeScript                                             | 窗口状态、数据结构多，类型更稳           |
| 样式   | Tailwind CSS 3.4                                       | 原子化类，主题色集中管理              |
| 动画   | framer-motion                                          | 窗口弹出、拖拽、过渡动画              |
| 内容渲染 | react-markdown + remark-gfm + react-syntax-highlighter | Markdown 渲染与代码高亮          |
| 部署   | `output: 'export'` 静态导出                                | 产出 `out/` 目录，纯静态          |

## 📁 目录结构

```
topaz-desktop/
├─ next.config.mjs          # 静态导出配置
├─ tailwind.config.ts       # 主题色 / 字体 / 动画 keyframes
├─ postcss.config.mjs
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # 根布局
│  │  ├─ page.tsx           # 入口：拼装 MenuBar + Desktop
│  │  ├─ globals.css        # Tailwind 指令 + 基础样式
│  │  └─ fonts/             # 自托管 Geist 字体
│  ├─ components/
│  │  ├─ Desktop.tsx        # ★ 核心：桌面 + 窗口系统
│  │  ├─ MenuBar.tsx        # 顶部菜单栏
│  │  ├─ Dock.tsx           # 底部任务栏（含搜索框）
│  │  ├─ DesktopIcon.tsx    # 桌面图标
│  │  ├─ ArticlesPage.tsx   # 文章窗口
│  │  ├─ EssaysPage.tsx     # 随笔窗口（Markdown）
│  │  ├─ ProjectsPage.tsx   # 项目窗口
│  │  ├─ AboutPage.tsx      # 关于窗口
│  │  ├─ FriendsLinkPage.tsx# 友链窗口
│  │  ├─ EmailPage.tsx      # 邮箱窗口
│  │  ├─ ThisPCPage.tsx     # 此电脑窗口
│  │  ├─ RecycleBinPage.tsx # 回收站窗口
│  │  ├─ DesktopRipple.tsx  # 点击波纹
│  │  ├─ parallax/          # 视差背景
│  │  └─ icons/             # 各窗口 / 图标的 SVG 组件
│  └─ lib/
│     ├─ constants.ts       # 桌面图标、菜单配置
│     ├─ articlesData.ts    # 文章列表数据
│     ├─ articlesContent.ts # 文章正文（Markdown 字符串）
│     ├─ essaysData.ts      # 随笔正文（Markdown 字符串）
│     ├─ friendsData.ts     # 友链数据
│     └─ markdownComponents.tsx # Markdown 渲染配置
└─ public/                  # 图片等静态资源
```

设计原则：配置与数据是声明式的，组件是通用的。加一个窗口，基本只改 `constants.ts` + 写一个 `XxxPage.tsx`，不动核心逻辑。

## 🚀 快速开始

环境要求：Node.js 18.17 及以上。

```bash
# 1. 克隆仓库
git clone https://github.com/Topaz059/blog.git
cd blog
```

```bash
# 2. 安装依赖
npm install
```

```bash
# 3. 本地开发（默认 http://localhost:3000）
npm run dev
```

```bash
# 4. 静态构建（产出 out/ 目录）
npm run build
```

常用脚本：

| 命令              | 作用                               |
| --------------- | -------------------------------- |
| `npm run dev`   | 启动开发服务器（http://localhost:3000） |
| `npm run build` | 静态导出到 `out/`                     |
| `npm run lint`  | 代码检查                             |

## ✍️ 内容管理

所有内容都是数据驱动的，写文章 / 随笔就像改一份数据，不用动组件逻辑。

- **加一篇文章**：在 `src/lib/articlesData.ts` 的 `articles` 数组里加一条，如果要有正文详情，把 Markdown 串放进 `src/lib/articlesContent.ts` 的 `ARTICLES_MARKDOWN`，再在文章对象里引用 `markdown` 字段。
- **加一篇随笔**：在 `src/lib/essaysData.ts` 的 `essays` 数组里加一条，把正文写进 `markdown` 字段即可（支持图片、代码块）。
- **加一个项目**：在 `src/components/ProjectsPage.tsx` 的 `projects` 数组里加一条。
- **加一条友链**：在 `src/lib/friendsData.ts` 的 `friendsData` 数组里加一条，`avatar` 留空时，会自动用首字母 + 渐变色生成头像。
- **改桌面图标 / 菜单**：编辑 `src/lib/constants.ts`（`leftIcons` / `rightIcons` / `menuLinks`）。
- **改关于页介绍**：编辑 `src/components/AboutPage.tsx` 顶部的 `introLines`，改网站运行起点改同文件的 `SITE_START_TIME`。
- **主题色 / 动画**：集中在 `tailwind.config.ts`。

> 提示：视频壁纸 `bizhi.mp4` 体积约 95MB，不要放进 Git 仓库。本项目通过 GitHub Releases 外链加载。

## 🚢 部署

本项目是纯静态站，构建后把 `out/` 整个目录部署到任意静态托管即可。

```bash
npm run build   # 产出 out/
# 把 out/ 上传 / 部署到你的静态托管
```

- 当前部署在 Cloudflare Pages，在线地址：https://blog-topaz.pages.dev
- 仓库根目录的 `out/` 是构建产物，建议加进 `.gitignore`。

> ⚠️ 静态导出的限制：`output: 'export'` 下不能使用服务端特性，不能在服务端组件读取请求头，不能用 `next/image` 的图片优化，也不能写 API Route。本项目所有窗口组件都是 `'use client'`，正好契合。

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。你可以自由使用、修改和分发，只需保留版权声明。
