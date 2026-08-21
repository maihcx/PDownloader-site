import { en } from "./en.js";

export const es = {
  ...en,
  accessibility: {
    ...en.accessibility,
    skipToContent: "Saltar al contenido",
    primaryNavigation: "Navegación principal",
    language: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  theme: {
    toggle: "Cambiar tema",
    toLight: "Usar tema claro",
    toDark: "Usar tema oscuro",
  },
  language: { choose: "Elegir idioma" },
  meta: {
    title: "PDownloader — Gestor de descargas para Windows",
    description:
      "Descargas paralelas, reanudación de tareas e integración con el navegador en una aplicación nativa para Windows.",
  },
  nav: {
    features: "Funciones",
    architecture: "Arquitectura",
    extension: "Extensión",
    docs: "Documentación",
    github: "GitHub",
  },
  hero: {
    ...en.hero,
    eyebrow: "Gestor de descargas multisegmento · Windows",
    titlePrefix: "Divide el archivo.",
    titleGrad: "No tu paciencia.",
    subtitle:
      "PDownloader divide archivos grandes en segmentos paralelos, reanuda tareas interrumpidas y recibe enlaces multimedia desde el navegador.",
    ctaPrimary: "Descargar para Windows",
    ctaSecondary: "Ver código en GitHub",
    ctaExtension: "Instalar extensión",
    metaThreads: "8 segmentos paralelos de forma predeterminada",
    metaLicense: "Con licencia GPL-3.0",
    previewLabel:
      "PDownloader.Runner en tres estados: descargando, combinando el archivo y completado",
    runner: {
      ...en.hero.runner,
      title: "PDownloader — Gestor de descargas",
      downloading: "Descargando",
      merging: "Combinando archivo...",
      completed: "Completado",
      streamsTitle: "Progreso de los hilos de descarga · Archivo",
      thread: "Hilo {number}",
      pause: "Pausar",
      cancel: "Cancelar",
      done: "Completado",
      openFolder: "Abrir carpeta",
      openFile: "Abrir archivo",
    },
  },
  segbar: {
    ...en.segbar,
    statusRunning: "descargando — 8 segmentos",
    statusMerged: "combinados en 1 archivo",
    caption:
      "Cada segmento es una solicitud de rango independiente. Si uno falla, se reintenta con espera progresiva mientras los demás continúan.",
  },
  features: {
    ...en.features,
    eyebrow: "Funciones",
    title: "Un motor para todas tus descargas",
    subtitle:
      "Gestiona archivos, conexiones interrumpidas y contenido multimedia desde una sola aplicación.",
    segments: {
      title: "Descarga multisegmento",
      desc: "Divide un archivo en solicitudes paralelas por rangos de bytes — 8 hilos por defecto — y vuelve automáticamente a un único flujo si el servidor no admite rangos.",
    },
    resume: {
      title: "Reanudar y reintentar",
      desc: "Guarda en disco el progreso de cada segmento para conservar la descarga al cerrar o bloquearse la aplicación. Los segmentos fallidos se reintentan con espera exponencial.",
    },
    hls: {
      title: "Transmisión HLS / DASH",
      desc: "Detecta listas .m3u8, descarga fragmentos en paralelo con un límite seguro y luego los combina en un solo archivo.",
    },
    ytdlp: {
      title: "YouTube mediante yt-dlp",
      desc: "yt-dlp resuelve formatos y URL de transmisión, incluida la autenticación con cookies para superar comprobaciones de bots; el motor de PDownloader realiza la transferencia.",
    },
    extension: {
      title: "Extensión del navegador",
      desc: "Extensión oficial para navegadores Chromium y Firefox con menú contextual, entrada de URL y detección automática de enlaces descargables.",
    },
    tray: {
      title: "Bandeja y servicio en segundo plano",
      desc: "Un servicio ligero coordina la interfaz principal, la ventana de descargas y el icono de la bandeja mediante IPC local, sin molestar hasta que lo necesites.",
    },
  },
  architecture: {
    ...en.architecture,
    eyebrow: "Cómo funciona",
    title: "Cuatro procesos pequeños y un puente local",
    subtitle:
      "La extensión se comunica con un puente HTTP local; PDownloader enruta el resto mediante CFS.",
    diagramLabel: "Arquitectura de procesos de PDownloader",
    browser: "Extensión del navegador",
    browserSub: "menú contextual / ventana emergente",
    coreSub: "puente HTTP + enrutador CFS",
    mainuiSub: "interfaz principal y ajustes",
    traySub: "icono de la bandeja",
    legendTitle: "Puente HTTP local — localhost:6287",
    legend1v: "comprobación de estado",
    legend2v: "poner en cola una descarga normal",
    legend3v: "resolver formatos mediante yt-dlp",
    legend4v: "iniciar una descarga resuelta de YouTube o sitio",
  },
  extension: {
    ...en.extension,
    eyebrow: "Extensión del navegador",
    title: "Captura enlaces sin salir de la página",
    subtitle:
      "Disponible oficialmente para navegadores basados en Chromium y Firefox.",
    storeButton: "Instalar extensión del navegador",
    bridgeOnline: "Puente local listo",
    item1: "Opciones del menú contextual en enlaces, vídeos y páginas.",
    item2:
      "Ventana emergente para escribir una URL, elegir la carpeta de destino y listar los enlaces descargables de la página.",
    item3:
      "Captura automática de clics en tipos de archivo descargables habituales.",
    item4:
      "Notificaciones de escritorio cuando una tarea se añade o falla la conexión.",
    flowStep1: "pulsa «Descargar con PDownloader»",
    flowStep3: "Core procesa y reenvía mediante CFS",
    flowStep4: "Runner añade a la cola → DownloadEngine inicia",
    modal: {
      eyebrow: "Extensión oficial del navegador",
      title: "Elige el motor del navegador",
      subtitle:
        "Un mismo paquete funciona en todos los navegadores que comparten motor.",
      close: "Cerrar",
      available: "Disponible",
      chromiumTitle: "Motor Chromium",
      chromiumDesc: "Instala la extensión oficial desde Chrome Web Store.",
      chromiumBrowsersLabel: "Navegadores Chromium compatibles",
      geckoTitle: "Motor Firefox (Gecko)",
      geckoDesc: "Instala la extensión oficial desde Firefox Add-ons.",
      geckoBrowsersLabel: "Navegadores Gecko compatibles",
      openStore: "Abrir Chrome Web Store",
      openFirefoxAddons: "Abrir Firefox Add-ons",
    },
  },
  cta: {
    ...en.cta,
    eyebrow: "Comenzar",
    title: "Compílalo desde el código o usa el instalador",
    subtitle:
      "PDownloader es código abierto con licencia GPL-3.0. Clónalo, estudia el motor o instala la aplicación.",
    primary: "Descargar la última versión",
    secondary: "Explorar el código",
    req2: "Windows 10 o posterior, x64",
    req3: "yt-dlp para resolver YouTube y otros sitios",
    copy: "Copiar comandos",
    copied: "Copiado",
    copyError: "Error al copiar",
    terminalComment1: "# clona y abre la carpeta del código fuente",
    terminalComment2:
      "# compila todas las aplicaciones y el instalador de un solo archivo",
  },
  footer: {
    tagline: "Gestor de descargas multisegmento para Windows.",
    source: "Código",
    releases: "Versiones",
    license: "Licencia (GPL-3.0)",
  },
  docs: {
    ...en.docs,
    metaTitle: "Documentación de PDownloader",
    eyebrow: "Documentación",
    title: "Guías de PDownloader",
    intro:
      "Elige un tema sobre instalación, integración con el navegador o solución de problemas.",
    menu: "Menú de documentación",
    loading: "Cargando artículo…",
    loadError: "No se pudo cargar este artículo.",
    retry: "Reintentar",
    fallbackTitle: "Versión en inglés",
    fallbackDesc:
      "Este artículo todavía no está disponible en el idioma seleccionado.",
    backHome: "Volver al inicio",
    categories: {
      gettingStarted: "Primeros pasos",
      integration: "Integración con el navegador",
      support: "Ayuda",
    },
    articles: {
      introduction: "Introducción",
      installation: "Instalación",
      browserExtension: "Extensión del navegador",
      troubleshooting: "Solución de problemas",
      uninstallation: "Desinstalación",
    },
  },
};

es.docs.metaDescription =
  "Guías de instalación, integración con el navegador, solución de problemas y desinstalación de PDownloader.";
