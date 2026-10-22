# BrowIO

**Your web, your world.** BrowIO is a customizable browser-style web workspace designed for GitHub Pages and mobile screens.

## Live site

https://adrienfavela2030-create.github.io/BrowIO/

## Project files

- `index.html` — page structure and accessible controls.
- `styles.css` — responsive glass interface, themes, wallpapers, and taskbar styling.
- `app.js` — app behavior, local settings, shortcuts, notes, workspaces, games, bookmarks, and backup/restore.
- `manifest.webmanifest` — install metadata for supported browsers.
- `favicon.svg` — BrowIO icon.

## Publish with GitHub Pages

The repository is configured to publish the root of the `main` branch. After a commit, GitHub Pages may need a short time to rebuild the site.

## Current scope and limitations

BrowIO is a web app, not a full browser engine. It cannot embed every website because many sites block framing, and it cannot control the host browser's tabs or download manager. Searches are sent to the search provider selected in Settings. Settings, notes, and other saved data are stored locally in this browser; cloud sync is not implemented yet. Export a backup before clearing site data or switching devices.

## Privacy

Do not store passwords, payment information, or other sensitive secrets in BrowIO notes. Private mode only prevents BrowIO from adding visits to its own history; it does not make activity invisible to websites, the network, or the host browser.

## Development

This is a static site with no build step or server required. Edit the files, commit them to `main`, and GitHub Pages will publish the update.
