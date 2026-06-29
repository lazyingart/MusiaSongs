[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Публичные аудио-ресурсы песен для Musia и Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs хранит публичные MP3 для плеера Musia отдельно от основного репозитория кода. Fun Lazying Art может использовать стабильные URL GitHub Pages, а основной репозиторий Musia остается легче и чище.

## Поддержка

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Онлайн-плеер

Откройте легкую аудио-страницу на https://lazyingart.github.io/MusiaSongs/ или рабочий плеер на https://fun.lazying.art.

## Что делает этот репозиторий

- Хостит публичные MP3-файлы песен Musia.
- Публикует каталог `audio.json` для инструментов и сайтов.
- Держит сгенерированное аудио вне основного репозитория Musia.
- Предоставляет стабильные URL GitHub Pages для медиаплеера Fun Lazying Art.

## Содержимое

| Путь | Назначение |
| --- | --- |
| `audio/` | Публичные MP3 для Fun Lazying Art |
| `audio.json` | Машиночитаемый аудио-каталог |
| `index.html` | Простой браузерный плеер и список треков |
| `scripts/build-audio-json.js` | Пересоздает аудио-каталог |
| `.github/FUNDING.yml` | Ссылки GitHub Sponsors и пожертвований |

## Быстрый старт

Пересоздайте каталог после добавления или удаления MP3:

```bash
node scripts/build-audio-json.js
```

## Проверка

Проверьте каталог и статические ресурсы сайта:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Цитирование

Если вы используете MusiaSongs в исследованиях, демо или публичных текстах, цитируйте репозиторий. GitHub читает [CITATION.cff](../CITATION.cff) и показывает панель **Cite this repository**.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## Статус

Этот репозиторий является публичной инфраструктурой воспроизведения. Исходные сессии, веса моделей, API-ключи, приватные промпты и рабочие папки не следует коммитить сюда.
