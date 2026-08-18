# Welcome to PDownloader

PDownloader is a native Windows download manager designed for large files, unstable connections, and media links collected from the browser.

## What it handles

- Parallel byte-range segments for regular files.
- Resume and retry when a connection or application session is interrupted.
- HLS and DASH media streams that need fragment collection and merging.
- Video and media URLs resolved with `yt-dlp`.
- Browser-to-desktop transfers through the official Chromium extension.

## How the pieces work together

The desktop application manages your queue and settings. `PDownloader.Core` provides the local bridge used by the browser extension, while `PDownloader.Runner` owns the active transfer window and download engine.

> Communication between the extension and the application stays on the local machine.

Continue with [Installation](?doc=installation), or open the [browser extension guide](?doc=browser-extension) if the desktop application is already installed.
