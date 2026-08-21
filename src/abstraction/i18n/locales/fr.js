import { en } from "./en.js";

export const fr = {
  ...en,
  accessibility: {
    ...en.accessibility,
    skipToContent: "Aller au contenu",
    primaryNavigation: "Navigation principale",
    language: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  theme: {
    toggle: "Changer de thème",
    toLight: "Activer le thème clair",
    toDark: "Activer le thème sombre",
  },
  language: { choose: "Choisir la langue" },
  meta: {
    title: "PDownloader — Gestionnaire de téléchargements Windows",
    description:
      "Téléchargements parallèles, reprise des tâches et intégration au navigateur dans une application Windows native.",
  },
  nav: {
    features: "Fonctions",
    architecture: "Architecture",
    extension: "Extension",
    docs: "Documentation",
    github: "GitHub",
  },
  hero: {
    ...en.hero,
    eyebrow: "Gestionnaire de téléchargements multisegment · Windows",
    titlePrefix: "Divisez le fichier.",
    titleGrad: "Pas votre patience.",
    subtitle:
      "PDownloader découpe les fichiers volumineux en segments parallèles, reprend les tâches interrompues et reçoit les liens multimédias depuis le navigateur.",
    ctaPrimary: "Télécharger pour Windows",
    ctaSecondary: "Voir le code sur GitHub",
    ctaExtension: "Installer l’extension",
    metaThreads: "8 segments parallèles par défaut",
    metaLicense: "Sous licence GPL-3.0",
    previewLabel:
      "PDownloader.Runner dans trois états : téléchargement, fusion du fichier et terminé",
    runner: {
      ...en.hero.runner,
      title: "PDownloader — Gestionnaire de téléchargements",
      downloading: "Téléchargement",
      merging: "Fusion du fichier...",
      completed: "Terminé",
      streamsTitle: "Progression des threads · Fichier",
      thread: "Thread {number}",
      pause: "Pause",
      cancel: "Annuler",
      done: "Terminé",
      openFolder: "Ouvrir le dossier",
      openFile: "Ouvrir le fichier",
    },
  },
  segbar: {
    ...en.segbar,
    statusRunning: "téléchargement — 8 segments",
    statusMerged: "fusionnés en 1 fichier",
    caption:
      "Chaque segment utilise sa propre requête par plage. En cas d’échec, il réessaie avec un délai progressif pendant que les autres continuent.",
  },
  features: {
    ...en.features,
    eyebrow: "Fonctions",
    title: "Un moteur pour tous vos téléchargements",
    subtitle:
      "Fichiers, connexions interrompues et médias en ligne sont gérés dans une seule application.",
    segments: {
      title: "Téléchargement multisegment",
      desc: "Découpe un fichier en requêtes parallèles par plages d’octets — 8 threads par défaut — et revient automatiquement à un flux unique si le serveur ne gère pas les plages.",
    },
    resume: {
      title: "Reprise et nouvelle tentative",
      desc: "La progression des segments est enregistrée sur le disque : fermer l’application ou subir un plantage ne fait pas perdre le téléchargement. Les segments en échec sont relancés avec un délai exponentiel.",
    },
    hls: {
      title: "Streaming HLS / DASH",
      desc: "Détecte les listes .m3u8, télécharge les fragments en parallèle avec une limite contrôlée, puis les fusionne en un seul fichier.",
    },
    ytdlp: {
      title: "YouTube via yt-dlp",
      desc: "yt-dlp détermine les formats et URL de flux, avec authentification par cookies pour franchir les contrôles anti-robots ; le moteur de PDownloader assure le transfert.",
    },
    extension: {
      title: "Extension de navigateur",
      desc: "Extension officielle pour les navigateurs Chromium et Firefox avec menu contextuel, saisie d’URL et détection automatique des liens téléchargeables.",
    },
    tray: {
      title: "Zone de notification et service en arrière-plan",
      desc: "Un service léger coordonne l’interface principale, la fenêtre de téléchargement et l’icône de notification via l’IPC local, en toute discrétion.",
    },
  },
  architecture: {
    ...en.architecture,
    eyebrow: "Fonctionnement",
    title: "Quatre petits processus, un pont local",
    subtitle:
      "L’extension communique avec un pont HTTP local, puis PDownloader route les échanges avec CFS.",
    diagramLabel: "Architecture des processus PDownloader",
    browser: "Extension de navigateur",
    browserSub: "menu contextuel / fenêtre",
    coreSub: "pont HTTP + routeur CFS",
    mainuiSub: "interface principale, paramètres",
    traySub: "icône de notification",
    legendTitle: "Pont HTTP local — localhost:6287",
    legend1v: "contrôle de disponibilité",
    legend2v: "ajouter un téléchargement ordinaire",
    legend3v: "déterminer les formats avec yt-dlp",
    legend4v: "lancer un téléchargement YouTube/site résolu",
  },
  extension: {
    ...en.extension,
    eyebrow: "Extension de navigateur",
    title: "Capturez les liens sans quitter la page",
    subtitle:
      "Disponible officiellement pour les navigateurs Chromium et Firefox.",
    storeButton: "Installer l’extension",
    bridgeOnline: "Pont local prêt",
    item1: "Entrées du menu contextuel sur les liens, vidéos et pages.",
    item2:
      "Fenêtre pour saisir une URL, choisir le dossier de destination et afficher les liens téléchargeables de la page.",
    item3:
      "Capture automatique des clics sur les types de fichiers couramment téléchargeables.",
    item4:
      "Notifications de bureau en cas de mise en file réussie ou d’erreur de connexion.",
    flowStep1: "cliquer sur « Télécharger avec PDownloader »",
    flowStep3: "Core analyse et transmet via CFS",
    flowStep4: "Runner met en file → DownloadEngine démarre",
    modal: {
      eyebrow: "Extension officielle",
      title: "Choisissez le moteur du navigateur",
      subtitle:
        "Un même paquet d’extension prend en charge tous les navigateurs basés sur le même moteur.",
      close: "Fermer",
      available: "Disponible",
      chromiumTitle: "Moteur Chromium",
      chromiumDesc:
        "Installez l’extension officielle depuis le Chrome Web Store.",
      chromiumBrowsersLabel: "Navigateurs Chromium pris en charge",
      geckoTitle: "Moteur Firefox (Gecko)",
      geckoDesc: "Installez l’extension officielle depuis Firefox Add-ons.",
      geckoBrowsersLabel: "Navigateurs Gecko pris en charge",
      openStore: "Ouvrir le Chrome Web Store",
      openFirefoxAddons: "Ouvrir Firefox Add-ons",
    },
  },
  cta: {
    ...en.cta,
    eyebrow: "Commencer",
    title: "Compilez le code ou utilisez l’installateur",
    subtitle:
      "PDownloader est un logiciel libre sous GPL-3.0. Clonez-le, explorez son moteur ou installez simplement l’application.",
    primary: "Télécharger la dernière version",
    secondary: "Parcourir le code",
    req2: "Windows 10 ou version ultérieure, x64",
    req3: "yt-dlp pour analyser YouTube et les sites",
    copy: "Copier les commandes",
    copied: "Copié",
    copyError: "Échec de la copie",
    terminalComment1: "# cloner et ouvrir le dossier du code source",
    terminalComment2:
      "# compiler toutes les applications et l’installateur monofichier",
  },
  footer: {
    tagline: "Gestionnaire de téléchargements multisegment pour Windows.",
    source: "Code source",
    releases: "Versions",
    license: "Licence (GPL-3.0)",
  },
  docs: {
    ...en.docs,
    metaTitle: "Documentation PDownloader",
    eyebrow: "Documentation",
    title: "Guides PDownloader",
    intro:
      "Choisissez un sujet concernant l’installation, le navigateur ou le dépannage.",
    menu: "Menu de documentation",
    loading: "Chargement de l’article…",
    loadError: "Impossible de charger cet article.",
    retry: "Réessayer",
    fallbackTitle: "Version anglaise affichée",
    fallbackDesc:
      "Cet article n’est pas encore disponible dans la langue choisie.",
    backHome: "Retour à l’accueil",
    categories: {
      gettingStarted: "Bien démarrer",
      integration: "Intégration au navigateur",
      support: "Assistance",
    },
    articles: {
      introduction: "Introduction",
      installation: "Installation",
      browserExtension: "Extension de navigateur",
      troubleshooting: "Dépannage",
      uninstallation: "Désinstallation",
    },
  },
};

fr.docs.metaDescription =
  "Guides d’installation, d’intégration au navigateur, de dépannage et de désinstallation de PDownloader.";
