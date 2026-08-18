import { en } from "./en.js";

export const fr = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "Aller au contenu", primaryNavigation: "Navigation principale", language: "Langue", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
  theme: { toggle: "Changer de thème", toLight: "Activer le thème clair", toDark: "Activer le thème sombre" },
  language: { choose: "Choisir la langue" },
  meta: { title: "PDownloader — Gestionnaire de téléchargements Windows", description: "Téléchargements parallèles, reprise des tâches et intégration au navigateur dans une application Windows native." },
  nav: { features: "Fonctions", architecture: "Architecture", extension: "Extension", docs: "Documentation", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "Gestionnaire de téléchargements multisegment · Windows", titlePrefix: "Divisez le fichier.", titleGrad: "Pas votre patience.", subtitle: "PDownloader découpe les fichiers volumineux en segments parallèles, reprend les tâches interrompues et reçoit les liens multimédias depuis le navigateur.", ctaPrimary: "Télécharger pour Windows", ctaSecondary: "Voir le code sur GitHub", ctaExtension: "Installer l’extension" },
  features: { ...en.features, eyebrow: "Fonctions", title: "Un moteur pour tous vos téléchargements", subtitle: "Fichiers, connexions interrompues et médias en ligne sont gérés dans une seule application." },
  architecture: { ...en.architecture, eyebrow: "Fonctionnement", title: "Quatre petits processus, un pont local", subtitle: "L’extension communique avec un pont HTTP local, puis PDownloader route les échanges avec CFS." },
  extension: { ...en.extension, eyebrow: "Extension de navigateur", title: "Capturez les liens sans quitter la page", subtitle: "Disponible officiellement sur le Chrome Web Store pour les navigateurs Chromium." },
  cta: { ...en.cta, eyebrow: "Commencer", title: "Installez l’application ou compilez-la", primary: "Télécharger la dernière version", secondary: "Parcourir le code" },
  footer: { tagline: "Gestionnaire de téléchargements multisegment pour Windows.", source: "Code source", releases: "Versions", license: "Licence (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "Documentation PDownloader", eyebrow: "Documentation", title: "Guides PDownloader", intro: "Choisissez un sujet concernant l’installation, le navigateur ou le dépannage.", menu: "Menu de documentation", loading: "Chargement de l’article…", loadError: "Impossible de charger cet article.", retry: "Réessayer", fallbackTitle: "Version anglaise affichée", fallbackDesc: "Cet article n’est pas encore disponible dans la langue choisie.", backHome: "Retour à l’accueil", categories: { gettingStarted: "Bien démarrer", integration: "Intégration au navigateur", support: "Assistance" }, articles: { introduction: "Introduction", installation: "Installation", browserExtension: "Extension de navigateur", troubleshooting: "Dépannage", uninstallation: "Désinstallation" } },
};
