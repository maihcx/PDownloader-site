let initialized = false;

function decodeHash(hash) {
  const rawId = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!rawId) return "";

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
}

function afterNextPaint(callback) {
  requestAnimationFrame(() => requestAnimationFrame(callback));
}

export function scrollToCurrentHash() {
  const id = decodeHash(window.location.hash);
  const target = id ? document.getElementById(id) : null;
  if (!target) return false;

  // The global stylesheet enables smooth scrolling. Initial hash restoration
  // should be immediate so the page does not visibly travel down from the hero.
  const root = document.documentElement;
  const previousInlineBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  target.scrollIntoView({ block: "start", inline: "nearest" });
  root.style.scrollBehavior = previousInlineBehavior;
  return true;
}

export function initHashNavigation() {
  if (initialized) return;
  initialized = true;

  const initialHash = window.location.hash;
  let userInterrupted = false;

  const markInterrupted = () => {
    userInterrupted = true;
  };

  const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"];
  interactionEvents.forEach((eventName) => {
    window.addEventListener(eventName, markInterrupted, { passive: true, once: true });
  });

  const restoreInitialHash = () => {
    if (!initialHash || userInterrupted || window.location.hash !== initialHash) return;
    scrollToCurrentHash();
  };

  // AppLayout is injected asynchronously, so the browser's native first hash
  // lookup has already happened by the time the target section exists.
  afterNextPaint(restoreInitialHash);

  // Web fonts can change the height of sections above the target. Re-align once
  // more when they settle, unless the visitor has already started navigating.
  document.fonts?.ready
    .then(() => afterNextPaint(restoreInitialHash))
    .catch(() => {});

  window.addEventListener("hashchange", () => {
    afterNextPaint(scrollToCurrentHash);
  });
}
