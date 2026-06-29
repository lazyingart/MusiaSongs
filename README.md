# MusiaSongs

Public audio asset host for Musia and Fun Lazying Art.

This repository stores generated song MP3 files separately from the main
Musia code repository. The main Musia website points to stable GitHub Pages
URLs such as:

```text
https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Website

- GitHub Pages: https://lazyingart.github.io/MusiaSongs/
- Audio catalog: https://lazyingart.github.io/MusiaSongs/audio.json

## Layout

```text
audio/       MP3 files used by Fun Lazying Art
audio.json   Generated public audio manifest
index.html   Lightweight browser player and file list
styles.css   Static site styling
```

## Update

After adding or removing MP3 files, regenerate `audio.json`:

```bash
node scripts/build-audio-json.js
```

Then commit and push.

## Notes

This repository is for public playback assets only. Source sessions, model
weights, private prompts, API keys, and generated working folders should stay
out of this repository.
