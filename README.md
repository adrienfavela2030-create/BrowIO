# BrowIO

**Your gaming space. Your rules.** BrowIO is a phone-first, gaming-inspired browser-style web workspace with dark surfaces, neon accents, quick launch, notes, workspaces, mini-games, themes, and local backups.

## Live site

https://adrienfavela2030-create.github.io/BrowIO/

## Files

- `index.html` — page structure and accessible controls.
- `styles.css` — phone-first layout, dark neon theme, and responsive styling.
- `app.js` — application behavior and local storage.
- `manifest.webmanifest` — install metadata for supported browsers.
- `favicon.svg` — BrowIO icon.
- `tests/smoke-test.mjs` — basic static checks.

## Publish

GitHub Pages is configured for the root of the `main` branch. After a commit, GitHub Pages may need a short time to rebuild.

## Important limitations

BrowIO is a web app, not a full browser engine. It cannot embed every website because many sites block framing, and it cannot control the host browser's tabs or download manager. Searches are sent to the search provider selected in Settings. Settings, notes, and other saved data are stored locally in this browser; cloud sync is not implemented. Export a backup before clearing site data or switching devices.

Private mode only prevents BrowIO from adding visits to its own history; it does not make activity invisible to websites, the network, or the host browser. Avoid storing passwords or sensitive information in notes.

## Development

This is a static site with no build step or server required. Edit the files, commit them to `main`, and GitHub Pages will publish the update.
