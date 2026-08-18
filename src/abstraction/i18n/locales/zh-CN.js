import { en } from "./en.js";

export const zhCN = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "跳到主要内容", primaryNavigation: "主导航", language: "语言", openMenu: "打开菜单", closeMenu: "关闭菜单" },
  theme: { toggle: "切换主题", toLight: "切换到浅色模式", toDark: "切换到深色模式" },
  language: { choose: "选择语言" },
  meta: { title: "PDownloader — Windows 下载管理器", description: "支持并行下载、断点续传和浏览器集成的 Windows 原生应用。" },
  nav: { features: "功能", architecture: "架构", extension: "扩展", docs: "文档", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "多分段下载管理器 · Windows", titlePrefix: "分割文件。", titleGrad: "不消耗耐心。", subtitle: "PDownloader 将大文件拆分为并行分段，恢复中断任务，并从浏览器接收媒体链接。", ctaPrimary: "下载 Windows 版", ctaSecondary: "在 GitHub 查看源码", ctaExtension: "安装浏览器扩展" },
  features: { ...en.features, eyebrow: "功能", title: "一个引擎处理各种下载", subtitle: "普通文件、中断连接和流媒体都可在一个应用中管理。" },
  architecture: { ...en.architecture, eyebrow: "内部结构", title: "四个小进程，一个本地桥接", subtitle: "浏览器扩展连接本地 HTTP 桥接，PDownloader 通过 CFS 处理其余通信。" },
  extension: { ...en.extension, eyebrow: "浏览器扩展", title: "无需离开网页即可捕获链接", subtitle: "已在 Chrome 应用商店正式发布，支持 Chromium 内核浏览器。" },
  cta: { ...en.cta, eyebrow: "开始使用", title: "安装应用或从源码构建", primary: "下载最新版本", secondary: "浏览源码" },
  footer: { tagline: "Windows 多分段下载管理器。", source: "源码", releases: "版本", license: "许可证 (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "PDownloader 文档", eyebrow: "文档", title: "PDownloader 使用指南", intro: "请选择安装、浏览器集成或故障排除主题。", menu: "文档菜单", loading: "正在加载文章…", loadError: "无法加载此文章。", retry: "重试", fallbackTitle: "正在显示英文版本", fallbackDesc: "此文章尚未翻译为所选语言。", backHome: "返回首页", categories: { gettingStarted: "入门", integration: "浏览器集成", support: "支持" }, articles: { introduction: "简介", installation: "安装", browserExtension: "浏览器扩展", troubleshooting: "故障排除", uninstallation: "卸载" } },
};
