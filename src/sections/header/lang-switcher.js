import {
  setLanguage,
  getLanguage,
  getCurrentLocaleInfo,
  getLocaleOptions,
  onLanguageChange,
} from "../../abstraction/i18n/core.js";

export function initLangSwitcher() {
  const picker = document.querySelector("[data-lang-picker]");
  if (!picker) return;

  const trigger = picker.querySelector("[data-lang-trigger]");
  const popup = picker.querySelector("[data-lang-menu]");
  const optionsRoot = picker.querySelector("[data-lang-options]");
  const currentCode = picker.querySelector("[data-lang-current-code]");
  if (!trigger || !popup || !optionsRoot || !currentCode) return;

  const close = ({ restoreFocus = false } = {}) => {
    popup.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (restoreFocus) trigger.focus();
  };

  const open = () => {
    popup.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    popup.querySelector('[aria-selected="true"]')?.focus();
  };

  const renderOptions = () => {
    const activeLang = getLanguage();
    currentCode.textContent = getCurrentLocaleInfo()?.code || activeLang.toUpperCase();
    optionsRoot.replaceChildren();

    getLocaleOptions().forEach((locale) => {
      const isActive = locale.id === activeLang;
      const option = document.createElement("button");
      option.type = "button";
      option.className = "lang-option";
      option.dataset.langOption = locale.id;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(isActive));
      option.setAttribute("lang", locale.htmlLang);
      option.innerHTML = `
        <span class="lang-option__code" aria-hidden="true">${locale.code}</span>
        <span class="lang-option__name">${locale.name}</span>
        <svg class="lang-option__check" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3.5 8.2 2.8 2.8 6.2-6.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      `;
      option.addEventListener("click", () => {
        setLanguage(locale.id);
        close({ restoreFocus: true });
      });
      optionsRoot.append(option);
    });
  };

  const moveFocus = (direction) => {
    const options = Array.from(optionsRoot.querySelectorAll("[data-lang-option]"));
    if (!options.length) return;
    const currentIndex = options.indexOf(document.activeElement);
    const nextIndex = currentIndex < 0
      ? 0
      : (currentIndex + direction + options.length) % options.length;
    options[nextIndex].focus();
  };

  trigger.addEventListener("click", () => {
    if (popup.hidden) open();
    else close();
  });

  picker.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popup.hidden) {
      event.preventDefault();
      close({ restoreFocus: true });
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (popup.hidden) open();
      else moveFocus(event.key === "ArrowDown" ? 1 : -1);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!popup.hidden && !picker.contains(event.target)) close();
  });

  onLanguageChange(renderOptions);
  renderOptions();
}
