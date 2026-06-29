#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const audioDir = path.join(root, "audio");
const baseUrl = "https://lazyingart.github.io/MusiaSongs/audio/";

function sizeLabel(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function titleFromName(name) {
  return name
    .replace(/\.mp3$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

const tracks = fs.readdirSync(audioDir)
  .filter((name) => name.endsWith(".mp3"))
  .sort((a, b) => a.localeCompare(b))
  .map((name) => {
    const stat = fs.statSync(path.join(audioDir, name));
    return {
      name,
      title: titleFromName(name),
      url: `${baseUrl}${encodeURIComponent(name)}`,
      bytes: stat.size,
      sizeLabel: sizeLabel(stat.size)
    };
  });

const manifest = {
  schema: "art.lazying.musia-songs.v1",
  generatedAt: new Date().toISOString(),
  baseUrl,
  tracks
};

fs.writeFileSync(path.join(root, "audio.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`wrote audio.json with ${tracks.length} tracks`);
