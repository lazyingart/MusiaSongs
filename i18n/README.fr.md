[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Ressources audio publiques pour Musia et Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs conserve les MP3 publics du lecteur Musia hors du dépôt principal de code. Fun Lazying Art peut charger des URL GitHub Pages stables tandis que le dépôt Musia reste plus léger et plus propre.

## Soutien

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Lecteur en Ligne

Ouvrez la page audio légère sur https://lazyingart.github.io/MusiaSongs/ ou utilisez le lecteur de production sur https://fun.lazying.art.

## Rôle du Dépôt

- Héberge les MP3 publics des chansons Musia.
- Publie un catalogue `audio.json` pour les outils et les sites web.
- Garde l’audio généré hors du dépôt principal Musia.
- Fournit des URL GitHub Pages stables au lecteur Fun Lazying Art.

## Contenu

| Chemin | Usage |
| --- | --- |
| `audio/` | MP3 publics utilisés par Fun Lazying Art |
| `audio.json` | Catalogue audio lisible par machine |
| `index.html` | Lecteur simple et liste des pistes |
| `scripts/build-audio-json.js` | Régénère le catalogue audio |
| `.github/FUNDING.yml` | Liens GitHub Sponsors et dons |

## Démarrage Rapide

Régénérez le catalogue après avoir ajouté ou supprimé des MP3 :

```bash
node scripts/build-audio-json.js
```

## Validation

Vérifiez le catalogue et les ressources statiques :

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Citation

Si vous utilisez MusiaSongs dans une recherche, une démo ou un texte public, citez le dépôt. GitHub lit [CITATION.cff](../CITATION.cff) et affiche le panneau **Cite this repository**.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## Statut

Ce dépôt est une infrastructure de lecture publique. Les sessions sources, poids de modèles, clés API, prompts privés et dossiers de travail ne doivent pas y être commités.
