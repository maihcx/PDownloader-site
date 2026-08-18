# PDownloader Website

> This is the standalone website repository for PDownloader. The Windows application and download engine continue to live in the [main PDownloader repository](https://github.com/maihcx/PDownloader).

PDownloader is a native download manager built for segmented transfers, interrupted-download recovery, and browser-assisted media capture. This website introduces the project, explains its architecture, and guides users to the correct installer and browser extension.

The website uses plain HTML, CSS, JavaScript, and Markdown. It can be published directly with GitHub Pages without a production build step.

## Repository Roles

| Repository or resource | Purpose |
| --- | --- |
| [PDownloader](https://github.com/maihcx/PDownloader) | Windows application, download engine, browser integration source, and releases. |
| [PDownloader-site](https://github.com/maihcx/PDownloader-site) — you are here | Website interface, translations, documentation reader, and Markdown articles. |
| [Chrome Web Store](https://chromewebstore.google.com/detail/kdbapmeegoljihpndnbfeockjjcoogbp) | Official extension package for Chromium-based browsers. |

## Documentation Route

The website includes a documentation reader under `/docs/`. Its articles are stored as Markdown files grouped by locale:

```text
docs/
├── index.html
├── docs.js
├── markdown.js
├── en-US/*.md
└── vi-VN/*.md
```

The reader loads the selected locale first and falls back to `en-US` when an article has not been translated. Add new language metadata in `src/abstraction/i18n/registry.js`, then create a matching Markdown directory when translated articles are ready.

## Preview the Website Locally

From the directory containing the website's root `index.html`, start any static HTTP server. For example:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). The site loads its layout with JavaScript modules, so opening `index.html` directly through `file://` is not supported.

## GitHub Pages

After the website source has been pushed, enable GitHub Pages for the branch and directory containing the root `index.html`. Keep the `/docs/` directory beside that file so the documentation route and Markdown requests remain relative to the same site origin.

## Support PDownloader

If PDownloader makes your downloads easier, consider starring both the [application repository](https://github.com/maihcx/PDownloader) and this [website repository](https://github.com/maihcx/PDownloader-site). Stars help other users discover the project and show which parts are worth improving next.

Bug reports and focused pull requests are welcome.
