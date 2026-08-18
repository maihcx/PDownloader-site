import { initI18n, t, getCurrentLocaleInfo, onLanguageChange } from "../src/abstraction/i18n/core.js";
import { applyConfigLinks } from "../src/abstraction/navigation/apply-config-links.js";
import { initThemeSwitcher } from "../src/abstraction/theme/theme-switcher.js";
import { initLangSwitcher } from "../src/sections/header/lang-switcher.js";
import { initNavbar } from "../src/sections/header/navbar.js";
import { renderMarkdown } from "./markdown.js";

const DOCS = [
  {
    category: "docs.categories.gettingStarted",
    items: [
      { id: "introduction", label: "docs.articles.introduction" },
      { id: "installation", label: "docs.articles.installation" },
    ],
  },
  {
    category: "docs.categories.integration",
    items: [{ id: "browser-extension", label: "docs.articles.browserExtension" }],
  },
  {
    category: "docs.categories.support",
    items: [
      { id: "troubleshooting", label: "docs.articles.troubleshooting" },
      { id: "uninstallation", label: "docs.articles.uninstallation" },
    ],
  },
];

const VALID_DOCS = new Set(DOCS.flatMap((category) => category.items.map((item) => item.id)));
let activeDoc = "introduction";
let requestId = 0;

const sidebar = document.querySelector("[data-docs-sidebar]");
const content = document.querySelector("[data-doc-content]");
const loading = document.querySelector("[data-doc-loading]");
const error = document.querySelector("[data-doc-error]");
const fallback = document.querySelector("[data-doc-fallback]");
const retry = document.querySelector("[data-doc-retry]");
const menuToggle = document.querySelector("[data-docs-menu-toggle]");

function getDocFromUrl() {
  const id = new URL(window.location.href).searchParams.get("doc");
  return id && VALID_DOCS.has(id) ? id : "introduction";
}

function setUrlDoc(id, { replace = false } = {}) {
  const url = new URL(window.location.href);
  if (id === "introduction") url.searchParams.delete("doc");
  else url.searchParams.set("doc", id);
  history[replace ? "replaceState" : "pushState"]({ doc: id }, "", url);
}

function setView(state) {
  loading.hidden = state !== "loading";
  error.hidden = state !== "error";
  content.hidden = state !== "content";
}

function closeMobileMenu() {
  sidebar?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function renderSidebar() {
  if (!sidebar) return;
  sidebar.replaceChildren();

  DOCS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "docs-sidebar__group";
    const title = document.createElement("h2");
    title.textContent = t(group.category);
    section.append(title);

    const list = document.createElement("ul");
    group.items.forEach((item) => {
      const listItem = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.docId = item.id;
      button.textContent = t(item.label);
      if (item.id === activeDoc) button.setAttribute("aria-current", "page");
      button.addEventListener("click", () => selectDoc(item.id));
      listItem.append(button);
      list.append(listItem);
    });
    section.append(list);
    sidebar.append(section);
  });
}

async function fetchMarkdown(locale, id) {
  try {
    const url = new URL(`./${locale}/${id}.md`, import.meta.url);
    const response = await fetch(url);
    if (!response.ok) return null;
    const text = await response.text();
    if (/^\s*<!doctype html/i.test(text)) return null;
    return text;
  } catch {
    return null;
  }
}

async function loadDoc() {
  if (!content || !loading || !error || !fallback) return;
  const currentRequest = ++requestId;
  setView("loading");
  fallback.hidden = true;

  const locale = getCurrentLocaleInfo()?.docsLocale || "en-US";
  let markdown = await fetchMarkdown(locale, activeDoc);
  let usedFallback = false;

  if (!markdown && locale !== "en-US") {
    markdown = await fetchMarkdown("en-US", activeDoc);
    usedFallback = Boolean(markdown);
  }

  if (currentRequest !== requestId) return;
  if (!markdown) {
    setView("error");
    return;
  }

  content.innerHTML = renderMarkdown(markdown);
  content.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener";
  });
  fallback.hidden = !usedFallback;
  setView("content");

  const activeItem = DOCS.flatMap((group) => group.items).find((item) => item.id === activeDoc);
  document.title = `${activeItem ? t(activeItem.label) : t("docs.title")} · ${t("docs.metaTitle")}`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("docs.metaDescription"));
}

function selectDoc(id, { updateHistory = true } = {}) {
  if (!VALID_DOCS.has(id)) return;
  activeDoc = id;
  if (updateHistory) setUrlDoc(id);
  renderSidebar();
  closeMobileMenu();
  loadDoc();
  document.querySelector("#docs-article")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncLanguage() {
  renderSidebar();
  loadDoc();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = sidebar?.classList.toggle("is-open") || false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

retry?.addEventListener("click", loadDoc);
window.addEventListener("popstate", () => selectDoc(getDocFromUrl(), { updateHistory: false }));
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeMobileMenu();
});

initI18n();
applyConfigLinks();
initNavbar();
initLangSwitcher();
initThemeSwitcher();

activeDoc = getDocFromUrl();
setUrlDoc(activeDoc, { replace: true });
onLanguageChange(syncLanguage);
renderSidebar();
loadDoc();
