import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const js = readFileSync("app.js", "utf8");
const manifest = JSON.parse(readFileSync("manifest.webmanifest", "utf8"));
const favicon = readFileSync("favicon.svg", "utf8");

assert.match(html, /href="styles\.css"/, "index.html must load styles.css");
assert.match(html, /src="app\.js" defer/, "index.html must load app.js");
assert.match(html, /href="manifest\.webmanifest"/, "index.html must load the manifest");
assert.match(html, /href="favicon\.svg"/, "index.html must load the favicon");
assert.ok(!/<style[\s>]/i.test(html), "CSS should stay in styles.css");
assert.ok(!/<script\s*>/i.test(html), "JavaScript should stay in app.js");
assert.match(css, /prefers-reduced-motion/, "CSS should respect reduced-motion preferences");
assert.match(css, /max-width:\s*580px/, "CSS should include a small-screen layout");

for (const feature of [
  "function settings", "function notes", "function games",
  "function workspaces", "function bookmarks", "function downloads",
  "function exportBackup", "function importBackup", "function theme"
]) {
  assert.ok(js.includes(feature), `Missing expected feature entry: ${feature}`);
}

assert.equal(manifest.name, "BrowIO — Your web, your world");
assert.equal(manifest.start_url, "./");
assert.match(favicon, /<svg[\s>]/, "favicon must be an SVG");

console.log("BrowIO smoke checks passed.");
