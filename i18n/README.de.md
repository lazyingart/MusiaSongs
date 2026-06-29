[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Öffentliche Song-Audio-Assets für Musia und Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs speichert die öffentlichen MP3-Dateien für den Musia-Player außerhalb des Haupt-Code-Repositorys. Fun Lazying Art kann stabile GitHub-Pages-Audio-URLs laden, während das Musia-Repository leichter und sauberer bleibt.

## Unterstützen

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Live-Player

Öffne die leichte Audioseite unter https://lazyingart.github.io/MusiaSongs/ oder den Produktionsplayer unter https://fun.lazying.art.

## Was dieses Repository macht

- Hostet öffentliche MP3-Song-Assets für Musia.
- Veröffentlicht einen `audio.json`-Katalog für Tools und Websites.
- Hält generiertes Audio aus dem Haupt-Repository von Musia heraus.
- Bietet stabile GitHub-Pages-URLs für den Fun-Lazying-Art-Mediaplayer.

## Inhalt

| Pfad | Zweck |
| --- | --- |
| `audio/` | Öffentliche MP3-Dateien für Fun Lazying Art |
| `audio.json` | Maschinenlesbarer Audiokatalog |
| `index.html` | Einfacher Browserplayer und Trackliste |
| `scripts/build-audio-json.js` | Erzeugt den Audiokatalog neu |
| `.github/FUNDING.yml` | GitHub-Sponsors- und Spendenlinks |

## Schnellstart

Katalog nach dem Hinzufügen oder Entfernen von MP3s neu erzeugen:

```bash
node scripts/build-audio-json.js
```

## Validierung

Katalog und statische Website-Assets prüfen:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Zitieren

Wenn du MusiaSongs in Forschung, Demos oder öffentlichen Texten nutzt, zitiere dieses Repository. GitHub liest [CITATION.cff](../CITATION.cff) und zeigt das Panel **Cite this repository**.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## Status

Dieses Repository ist öffentliche Playback-Infrastruktur. Quellsitzungen, Modellgewichte, API-Schlüssel, private Prompts und Arbeitsordner gehören nicht hierher.
