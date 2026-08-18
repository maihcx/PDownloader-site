import { en } from "./en.js";

export const ko = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "본문으로 건너뛰기", primaryNavigation: "기본 탐색", language: "언어", openMenu: "메뉴 열기", closeMenu: "메뉴 닫기" },
  theme: { toggle: "테마 전환", toLight: "라이트 모드로 전환", toDark: "다크 모드로 전환" },
  language: { choose: "언어 선택" },
  meta: { title: "PDownloader — Windows용 다운로드 관리자", description: "병렬 다운로드, 이어받기, 브라우저 연동을 제공하는 Windows 네이티브 앱입니다." },
  nav: { features: "기능", architecture: "구조", extension: "확장 프로그램", docs: "문서", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "다중 세그먼트 다운로드 관리자 · Windows", titlePrefix: "파일을 나누고.", titleGrad: "기다림은 줄이세요.", subtitle: "PDownloader는 큰 파일을 병렬 세그먼트로 받고, 중단된 작업을 재개하며, 브라우저에서 미디어 링크를 전달받습니다.", ctaPrimary: "Windows용 다운로드", ctaSecondary: "GitHub에서 소스 보기", ctaExtension: "브라우저 확장 설치" },
  features: { ...en.features, eyebrow: "기능", title: "모든 다운로드를 위한 하나의 엔진", subtitle: "일반 파일, 끊긴 연결, 스트리밍 미디어를 하나의 앱에서 관리합니다." },
  architecture: { ...en.architecture, eyebrow: "내부 구조", title: "네 개의 작은 프로세스와 하나의 로컬 브리지", subtitle: "확장 프로그램은 로컬 HTTP 브리지와 통신하며 이후 연결은 PDownloader의 CFS가 처리합니다." },
  extension: { ...en.extension, eyebrow: "브라우저 확장", title: "페이지를 떠나지 않고 링크 캡처", subtitle: "Chromium 기반 브라우저용 Chrome 웹 스토어에 공식 배포됩니다." },
  cta: { ...en.cta, eyebrow: "시작하기", title: "앱을 설치하거나 소스에서 빌드하세요", primary: "최신 버전 다운로드", secondary: "소스 코드 보기" },
  footer: { tagline: "Windows용 다중 세그먼트 다운로드 관리자.", source: "소스", releases: "릴리스", license: "라이선스 (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "PDownloader 문서", eyebrow: "문서", title: "PDownloader 가이드", intro: "설치, 브라우저 연동 또는 문제 해결 주제를 선택하세요.", menu: "문서 메뉴", loading: "문서를 불러오는 중…", loadError: "문서를 불러올 수 없습니다.", retry: "다시 시도", fallbackTitle: "영어 버전을 표시합니다", fallbackDesc: "이 문서는 선택한 언어로 아직 번역되지 않았습니다.", backHome: "홈으로", categories: { gettingStarted: "시작하기", integration: "브라우저 연동", support: "지원" }, articles: { introduction: "소개", installation: "설치", browserExtension: "브라우저 확장", troubleshooting: "문제 해결", uninstallation: "제거" } },
};
