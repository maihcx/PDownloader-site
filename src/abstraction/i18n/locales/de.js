import { en } from "./en.js";

export const de = {
  ...en,
  accessibility: {
    ...en.accessibility,
    skipToContent: "Zum Inhalt springen",
    primaryNavigation: "Hauptnavigation",
    language: "Sprache",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  theme: {
    toggle: "Farbschema wechseln",
    toLight: "Zum hellen Modus wechseln",
    toDark: "Zum dunklen Modus wechseln",
  },
  language: { choose: "Sprache auswählen" },
  meta: {
    title: "PDownloader — Download-Manager für Windows",
    description:
      "Parallele Downloads, Fortsetzen nach Unterbrechungen und Browser-Integration in einer nativen Windows-App.",
  },
  nav: {
    features: "Funktionen",
    architecture: "Architektur",
    extension: "Erweiterung",
    docs: "Dokumentation",
    github: "GitHub",
  },
  hero: {
    ...en.hero,
    eyebrow: "Download-Manager mit mehreren Segmenten · Windows",
    titlePrefix: "Datei aufteilen.",
    titleGrad: "Geduld behalten.",
    subtitle:
      "PDownloader lädt große Dateien in parallelen Segmenten, setzt unterbrochene Aufgaben fort und übernimmt Medienlinks direkt aus dem Browser.",
    ctaPrimary: "Für Windows herunterladen",
    ctaSecondary: "Quellcode auf GitHub",
    ctaExtension: "Browser-Erweiterung installieren",
    metaThreads: "Standardmäßig 8 parallele Segmente",
    metaLicense: "Lizenziert unter GPL-3.0",
    previewLabel:
      "PDownloader.Runner in drei Zuständen: Download, Zusammenführen und abgeschlossen",
    runner: {
      ...en.hero.runner,
      title: "PDownloader — Download-Manager",
      downloading: "Wird heruntergeladen",
      merging: "Datei wird zusammengeführt...",
      completed: "Abgeschlossen",
      streamsTitle: "Fortschritt der Download-Threads · Datei",
      thread: "Thread {number}",
      pause: "Pausieren",
      cancel: "Abbrechen",
      done: "Abgeschlossen",
      openFolder: "Ordner öffnen",
      openFile: "Datei öffnen",
    },
  },
  segbar: {
    ...en.segbar,
    statusRunning: "Download läuft — 8 Segmente",
    statusMerged: "zu 1 Datei zusammengeführt",
    caption:
      "Jedes Segment ist eine eigene Bereichsanfrage. Ein fehlerhaftes Segment wird mit Wartezeit erneut versucht, während die übrigen weiterlaufen.",
  },
  features: {
    ...en.features,
    eyebrow: "Funktionen",
    title: "Eine Engine für alle Downloads",
    subtitle:
      "Dateien, unterbrochene Verbindungen und Streaming-Medien werden in einer Anwendung verwaltet.",
    segments: {
      title: "Download in mehreren Segmenten",
      desc: "Teilt Dateien in parallele Byte-Bereichsanfragen auf — standardmäßig 8 Threads — und wechselt automatisch zu einem einzelnen Stream, wenn der Server keine Bereiche unterstützt.",
    },
    resume: {
      title: "Fortsetzen und erneut versuchen",
      desc: "Der Fortschritt jedes Segments wird gespeichert. Auch nach dem Schließen oder einem Absturz bleibt der Download erhalten; fehlgeschlagene Segmente werden mit steigender Wartezeit wiederholt.",
    },
    hls: {
      title: "HLS-/DASH-Streaming",
      desc: "Erkennt .m3u8-Wiedergabelisten, lädt Fragmente begrenzt parallel und fügt sie anschließend zu einer Ausgabedatei zusammen.",
    },
    ytdlp: {
      title: "YouTube über yt-dlp",
      desc: "yt-dlp ermittelt Formate und Stream-URLs, einschließlich Cookie-Anmeldung gegen Bot-Prüfungen; die Übertragung übernimmt die PDownloader-Engine.",
    },
    extension: {
      title: "Browser-Erweiterung",
      desc: "Offizielle Erweiterung für Chromium- und Firefox-Browser mit Kontextmenü, URL-Eingabe und automatischer Erkennung von Download-Links.",
    },
    tray: {
      title: "Infobereich und Hintergrunddienst",
      desc: "Ein schlanker Hintergrunddienst verbindet Hauptfenster, Download-Fenster und Symbol im Infobereich über lokales IPC und bleibt unauffällig, bis er gebraucht wird.",
    },
  },
  architecture: {
    ...en.architecture,
    eyebrow: "Unter der Haube",
    title: "Vier kleine Prozesse, eine lokale Verbindung",
    subtitle:
      "Die Browser-Erweiterung kommuniziert mit einer lokalen HTTP-Brücke; intern verwendet PDownloader CFS.",
    diagramLabel: "Prozessarchitektur von PDownloader",
    browser: "Browser-Erweiterung",
    browserSub: "Kontextmenü / Popup",
    coreSub: "HTTP-Brücke + CFS-Router",
    mainuiSub: "Hauptoberfläche, Einstellungen",
    traySub: "Symbol im Infobereich",
    legendTitle: "Lokale HTTP-Brücke — localhost:6287",
    legend1v: "Zustandsprüfung",
    legend2v: "regulären Datei-Download einreihen",
    legend3v: "Formate über yt-dlp ermitteln",
    legend4v: "aufgelösten YouTube-/Website-Download starten",
  },
  extension: {
    ...en.extension,
    eyebrow: "Browser-Erweiterung",
    title: "Links direkt von der Webseite übernehmen",
    subtitle:
      "Offiziell für Chromium- und Firefox-basierte Browser verfügbar.",
    storeButton: "Browser-Erweiterung installieren",
    bridgeOnline: "Lokale Brücke bereit",
    item1: "Kontextmenüeinträge für Links, Videos und Seiten.",
    item2:
      "Popup zur manuellen URL-Eingabe, Auswahl des Speicherordners und Anzeige herunterladbarer Links auf der Seite.",
    item3:
      "Automatische Erfassung von Klicks auf gängige herunterladbare Dateitypen.",
    item4:
      "Desktop-Benachrichtigungen bei erfolgreicher Einreihung oder Verbindungsfehlern.",
    flowStep1: "„Mit PDownloader herunterladen“ anklicken",
    flowStep3: "Core verarbeitet und leitet über CFS weiter",
    flowStep4: "Runner reiht ein → DownloadEngine startet",
    modal: {
      eyebrow: "Offizielle Browser-Erweiterung",
      title: "Browser-Engine auswählen",
      subtitle:
        "Ein Erweiterungspaket unterstützt alle Browser mit derselben Engine.",
      close: "Schließen",
      available: "Verfügbar",
      chromiumTitle: "Chromium-Engine",
      chromiumDesc:
        "Installieren Sie die offizielle Erweiterung aus dem Chrome Web Store.",
      chromiumBrowsersLabel: "Unterstützte Chromium-Browser",
      geckoTitle: "Firefox-Engine (Gecko)",
      geckoDesc: "Installieren Sie die offizielle Erweiterung über Firefox Add-ons.",
      geckoBrowsersLabel: "Unterstützte Gecko-Browser",
      openStore: "Chrome Web Store öffnen",
      openFirefoxAddons: "Firefox Add-ons öffnen",
    },
  },
  cta: {
    ...en.cta,
    eyebrow: "Loslegen",
    title: "Aus dem Quellcode bauen oder Installer verwenden",
    subtitle:
      "PDownloader ist unter GPL-3.0 quelloffen. Klonen Sie das Projekt, lesen Sie die Engine oder installieren Sie einfach die App.",
    primary: "Neueste Version herunterladen",
    secondary: "Quellcode ansehen",
    req2: "Windows 10 oder neuer, x64",
    req3: "yt-dlp für YouTube-/Website-Auflösung",
    copy: "Befehle kopieren",
    copied: "Kopiert",
    copyError: "Kopieren fehlgeschlagen",
    terminalComment1: "# Repository klonen und Quellordner öffnen",
    terminalComment2: "# alle Apps und den Einzeldatei-Installer bauen",
  },
  footer: {
    tagline: "Download-Manager mit mehreren Segmenten für Windows.",
    source: "Quellcode",
    releases: "Versionen",
    license: "Lizenz (GPL-3.0)",
  },
  docs: {
    ...en.docs,
    metaTitle: "PDownloader-Dokumentation",
    metaDescription:
      "Anleitungen zu Installation, Browser-Integration, Fehlerbehebung und Deinstallation von PDownloader.",
    eyebrow: "Dokumentation",
    title: "PDownloader-Anleitungen",
    intro:
      "Wählen Sie ein Thema zu Installation, Browser-Verbindung oder Fehlerbehebung.",
    menu: "Dokumentationsmenü",
    loading: "Artikel wird geladen…",
    loadError: "Dieser Artikel konnte nicht geladen werden.",
    retry: "Erneut versuchen",
    fallbackTitle: "Englische Version",
    fallbackDesc:
      "Dieser Artikel ist in der gewählten Sprache noch nicht verfügbar.",
    backHome: "Zur Startseite",
    categories: {
      gettingStarted: "Erste Schritte",
      integration: "Browser-Integration",
      support: "Hilfe",
    },
    articles: {
      introduction: "Einführung",
      installation: "Installation",
      browserExtension: "Browser-Erweiterung",
      troubleshooting: "Fehlerbehebung",
      uninstallation: "Deinstallation",
    },
  },
};
