import { initI18n } from "./abstraction/i18n/core.js";
import { applyConfigLinks } from "./abstraction/navigation/apply-config-links.js";
import { initHashNavigation } from "./abstraction/navigation/hash-navigation.js";
import { initThemeSwitcher } from "./abstraction/theme/theme-switcher.js";
import { initBrowserExtensionDialog } from "./components/browser-extension-dialog.js";
import { initCopySnippet } from "./components/copy-snippet.js";
import { initRevealOnScroll } from "./components/reveal-on-scroll.js";
import { initLangSwitcher } from "./sections/header/lang-switcher.js";
import { initNavbar } from "./sections/header/navbar.js";
import { initRunnerPreview } from "./sections/home/runner-preview.js";

function initializePage() {
  initI18n();
  applyConfigLinks();
  initNavbar();
  initLangSwitcher();
  initRevealOnScroll();
  initRunnerPreview();
  initCopySnippet();
  initBrowserExtensionDialog();
  initThemeSwitcher();
  initHashNavigation();
}

async function bootstrap() {
  const root = document.querySelector("#root");
  if (!root) return;

  try {
    const layoutUrl = new URL("./sections/AppLayout.html", import.meta.url);
    const response = await fetch(layoutUrl);
    if (!response.ok) throw new Error(`Unable to load AppLayout (${response.status})`);

    root.innerHTML = await response.text();
    initializePage();
  } catch (error) {
    console.error("[bootstrap]", error);
    root.innerHTML = `
      <main class="bootstrap-error" role="alert">
        <img src="./src/assets/icons/pdownloader-icon.png" alt="" width="52" height="52" />
        <h1>PDownloader</h1>
        <p>Unable to load the page. Please refresh and try again.</p>
        <button type="button" data-reload-page>Reload</button>
      </main>
    `;
    root.querySelector("[data-reload-page]")?.addEventListener("click", () => window.location.reload());
  }
}

bootstrap();
