[English](README.md) · [العربية](i18n/README.ar.md) · [Español](i18n/README.es.md) · [Français](i18n/README.fr.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Tiếng Việt](i18n/README.vi.md) · [中文 (简体)](i18n/README.zh-Hans.md) · [中文（繁體）](i18n/README.zh-Hant.md) · [Deutsch](i18n/README.de.md) · [Русский](i18n/README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Public song audio assets for Musia and Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs keeps the public MP3 assets for the Musia player outside the main Musia code repository. Fun Lazying Art can load stable GitHub Pages audio URLs while the main repo stays lighter and cleaner.

## Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Live Player

Open the lightweight audio page at https://lazyingart.github.io/MusiaSongs/ or use the production player at https://fun.lazying.art.

## What This Repo Does

- Hosts public MP3 song assets for Musia.
- Publishes a generated `audio.json` catalog for tools and websites.
- Keeps generated audio out of the main Musia application repository.
- Provides stable GitHub Pages URLs for the Fun Lazying Art media player.

## Contents

| Path | Purpose |
| --- | --- |
| `audio/` | Public MP3 files used by Fun Lazying Art |
| `audio.json` | Machine-readable audio catalog |
| `index.html` | Simple browser player and track list |
| `scripts/build-audio-json.js` | Regenerates the audio catalog |
| `.github/FUNDING.yml` | GitHub Sponsors and donation links |

## Quick Start

Regenerate the catalog after adding or removing MP3 files:

```bash
node scripts/build-audio-json.js
```

## Validation

Check the catalog and static site assets:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Citation

If you use MusiaSongs in research, demos, or public writing, cite the repository. GitHub reads [CITATION.cff](CITATION.cff) and shows a **Cite this repository** panel.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## Status

This repository is public playback infrastructure. Source sessions, model weights, API keys, private prompts, and working folders should not be committed here.
