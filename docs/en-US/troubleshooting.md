# Troubleshooting

## The extension cannot reach PDownloader

- Make sure the desktop application and its background component are running.
- Restart PDownloader, then reload the browser tab.
- Check whether security software is blocking local communication.
- Confirm that the installed extension is the official Chrome Web Store version.

## A link downloads in the browser instead

Some websites create links dynamically or use a player-specific request. Open the extension popup and try its analysis or manual URL action. For a plain file, copying the final URL into PDownloader is also a useful fallback.

## A task cannot resume

Resume depends on the remote server accepting range requests and keeping the resource unchanged. If the server no longer accepts the saved position, restart that task from the beginning.

## The requested media quality is missing

Available formats come from the source website. Refresh the page, sign in when the media requires an account, and analyze the page again. Site changes can temporarily affect extraction until the resolver is updated.

When reporting a reproducible problem, include the PDownloader version, Windows version, browser name, affected URL, and the exact error message.
