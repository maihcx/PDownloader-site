import { en } from "./en.js";

export const es = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "Saltar al contenido", primaryNavigation: "Navegación principal", language: "Idioma", openMenu: "Abrir menú", closeMenu: "Cerrar menú" },
  theme: { toggle: "Cambiar tema", toLight: "Usar tema claro", toDark: "Usar tema oscuro" },
  language: { choose: "Elegir idioma" },
  meta: { title: "PDownloader — Gestor de descargas para Windows", description: "Descargas paralelas, reanudación de tareas e integración con el navegador en una aplicación nativa para Windows." },
  nav: { features: "Funciones", architecture: "Arquitectura", extension: "Extensión", docs: "Documentación", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "Gestor de descargas multisegmento · Windows", titlePrefix: "Divide el archivo.", titleGrad: "No tu paciencia.", subtitle: "PDownloader divide archivos grandes en segmentos paralelos, reanuda tareas interrumpidas y recibe enlaces multimedia desde el navegador.", ctaPrimary: "Descargar para Windows", ctaSecondary: "Ver código en GitHub", ctaExtension: "Instalar extensión" },
  features: { ...en.features, eyebrow: "Funciones", title: "Un motor para todas tus descargas", subtitle: "Gestiona archivos, conexiones interrumpidas y contenido multimedia desde una sola aplicación." },
  architecture: { ...en.architecture, eyebrow: "Cómo funciona", title: "Cuatro procesos pequeños y un puente local", subtitle: "La extensión se comunica con un puente HTTP local; PDownloader enruta el resto mediante CFS." },
  extension: { ...en.extension, eyebrow: "Extensión del navegador", title: "Captura enlaces sin salir de la página", subtitle: "Disponible oficialmente en Chrome Web Store para navegadores basados en Chromium." },
  cta: { ...en.cta, eyebrow: "Comenzar", title: "Instala la aplicación o compílala", primary: "Descargar la última versión", secondary: "Explorar el código" },
  footer: { tagline: "Gestor de descargas multisegmento para Windows.", source: "Código", releases: "Versiones", license: "Licencia (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "Documentación de PDownloader", eyebrow: "Documentación", title: "Guías de PDownloader", intro: "Elige un tema sobre instalación, integración con el navegador o solución de problemas.", menu: "Menú de documentación", loading: "Cargando artículo…", loadError: "No se pudo cargar este artículo.", retry: "Reintentar", fallbackTitle: "Versión en inglés", fallbackDesc: "Este artículo todavía no está disponible en el idioma seleccionado.", backHome: "Volver al inicio", categories: { gettingStarted: "Primeros pasos", integration: "Integración con el navegador", support: "Ayuda" }, articles: { introduction: "Introducción", installation: "Instalación", browserExtension: "Extensión del navegador", troubleshooting: "Solución de problemas", uninstallation: "Desinstalación" } },
};
