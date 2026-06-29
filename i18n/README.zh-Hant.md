[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Musia 和 Fun Lazying Art 的公開歌曲音訊資產。*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs 將 Musia 播放器使用的公開 MP3 放在主 Musia 程式碼倉庫之外。Fun Lazying Art 可以載入穩定的 GitHub Pages 音訊 URL，同時讓 Musia 主倉庫更輕、更乾淨。

## 支持

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 線上播放器

輕量音訊頁面在 https://lazyingart.github.io/MusiaSongs/，正式播放器在 https://fun.lazying.art。

## 這個倉庫做什麼

- 託管 Musia 的公開 MP3 歌曲資產。
- 發布給工具和網站使用的 `audio.json` 音訊目錄。
- 把生成音訊從 Musia 主應用倉庫中分離出去。
- 為 Fun Lazying Art 媒體播放器提供穩定的 GitHub Pages URL。

## 內容

| 路徑 | 用途 |
| --- | --- |
| `audio/` | Fun Lazying Art 使用的公開 MP3 檔案 |
| `audio.json` | 機器可讀的音訊目錄 |
| `index.html` | 簡單瀏覽器播放器和曲目列表 |
| `scripts/build-audio-json.js` | 重新生成音訊目錄 |
| `.github/FUNDING.yml` | GitHub Sponsors 和捐贈連結 |

## 快速開始

新增或刪除 MP3 後重新生成目錄：

```bash
node scripts/build-audio-json.js
```

## 驗證

檢查目錄和靜態站點資源：

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## 引用

如果你在研究、展示或公開文章中使用 MusiaSongs，請引用這個倉庫。GitHub 會讀取 [CITATION.cff](../CITATION.cff) 並顯示 **Cite this repository** 面板。

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## 狀態

這個倉庫是公開播放基礎設施。來源會話、模型權重、API 金鑰、私有提示詞和工作目錄不應提交到這裡。
