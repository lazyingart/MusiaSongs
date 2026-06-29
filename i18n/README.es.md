[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Recursos de audio públicos para Musia y Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs guarda los MP3 públicos del reproductor Musia fuera del repositorio principal de código. Fun Lazying Art puede cargar URLs estables de GitHub Pages mientras el repositorio Musia permanece más ligero y limpio.

## Apoyo

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Reproductor en Vivo

Abre la página ligera de audio en https://lazyingart.github.io/MusiaSongs/ o usa el reproductor de producción en https://fun.lazying.art.

## Qué Hace Este Repositorio

- Aloja archivos MP3 públicos para canciones de Musia.
- Publica un catálogo `audio.json` para herramientas y sitios web.
- Mantiene el audio generado fuera del repositorio principal de Musia.
- Proporciona URLs estables de GitHub Pages para el reproductor Fun Lazying Art.

## Contenido

| Ruta | Propósito |
| --- | --- |
| `audio/` | Archivos MP3 públicos usados por Fun Lazying Art |
| `audio.json` | Catálogo de audio legible por máquina |
| `index.html` | Reproductor sencillo y lista de pistas |
| `scripts/build-audio-json.js` | Regenera el catálogo de audio |
| `.github/FUNDING.yml` | Enlaces de GitHub Sponsors y donación |

## Inicio Rápido

Regenera el catálogo después de agregar o quitar MP3:

```bash
node scripts/build-audio-json.js
```

## Validación

Comprueba el catálogo y los recursos estáticos:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Citación

Si usas MusiaSongs en investigación, demos o escritura pública, cita el repositorio. GitHub lee [CITATION.cff](../CITATION.cff) y muestra el panel **Cite this repository**.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## Estado

Este repositorio es infraestructura pública de reproducción. No se deben confirmar aquí sesiones fuente, pesos de modelos, claves API, prompts privados ni carpetas de trabajo.
