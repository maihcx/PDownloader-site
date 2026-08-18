import { en } from "./en.js";

export const ja = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "コンテンツへ移動", primaryNavigation: "メインナビゲーション", language: "言語", openMenu: "メニューを開く", closeMenu: "メニューを閉じる" },
  theme: { toggle: "テーマを切り替える", toLight: "ライトモードに切り替える", toDark: "ダークモードに切り替える" },
  language: { choose: "言語を選択" },
  meta: { title: "PDownloader — Windows用ダウンロードマネージャー", description: "並列ダウンロード、途中再開、ブラウザー連携に対応したWindowsネイティブアプリです。" },
  nav: { features: "機能", architecture: "構成", extension: "拡張機能", docs: "ドキュメント", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "マルチセグメント・ダウンロードマネージャー · Windows", titlePrefix: "ファイルを分割。", titleGrad: "待ち時間を短縮。", subtitle: "PDownloaderは大きなファイルを並列セグメントで取得し、中断したタスクを再開し、ブラウザーからメディアリンクを受け取ります。", ctaPrimary: "Windows版をダウンロード", ctaSecondary: "GitHubでソースを見る", ctaExtension: "ブラウザー拡張をインストール" },
  features: { ...en.features, eyebrow: "機能", title: "あらゆるダウンロードを一つのエンジンで", subtitle: "通常ファイル、切断された通信、ストリーミングメディアを一つのアプリで管理します。" },
  architecture: { ...en.architecture, eyebrow: "内部構成", title: "四つの小さなプロセスと一つのローカルブリッジ", subtitle: "拡張機能はローカルHTTPブリッジと通信し、その先をPDownloaderのCFSが接続します。" },
  extension: { ...en.extension, eyebrow: "ブラウザー拡張", title: "ページを離れずにリンクを取得", subtitle: "Chromium系ブラウザー向けにChromeウェブストアで正式公開中です。" },
  cta: { ...en.cta, eyebrow: "はじめる", title: "インストール、またはソースからビルド", primary: "最新版をダウンロード", secondary: "ソースを見る" },
  footer: { tagline: "Windows用マルチセグメント・ダウンロードマネージャー。", source: "ソース", releases: "リリース", license: "ライセンス (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "PDownloader ドキュメント", eyebrow: "ドキュメント", title: "PDownloader ガイド", intro: "インストール、ブラウザー連携、トラブル対処の項目を選択してください。", menu: "ドキュメントメニュー", loading: "記事を読み込んでいます…", loadError: "記事を読み込めませんでした。", retry: "再試行", fallbackTitle: "英語版を表示しています", fallbackDesc: "この記事は選択した言語にまだ翻訳されていません。", backHome: "ホームへ戻る", categories: { gettingStarted: "はじめに", integration: "ブラウザー連携", support: "サポート" }, articles: { introduction: "概要", installation: "インストール", browserExtension: "ブラウザー拡張", troubleshooting: "トラブルシューティング", uninstallation: "アンインストール" } },
};
