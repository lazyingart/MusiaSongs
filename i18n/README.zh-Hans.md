[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Musia 和 Fun Lazying Art 的公开歌曲音频资产。*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs 把 Musia 播放器使用的公开 MP3 放在主 Musia 代码仓库之外。Fun Lazying Art 可以加载稳定的 GitHub Pages 音频 URL，同时让 Musia 主仓库更轻、更干净。

## 支持

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 在线播放器

轻量音频页面在 https://lazyingart.github.io/MusiaSongs/，正式播放器在 https://fun.lazying.art。

## 这个仓库做什么

- 托管 Musia 的公开 MP3 歌曲资产。
- 发布给工具和网站使用的 `audio.json` 音频目录。
- 把生成音频从 Musia 主应用仓库中分离出去。
- 为 Fun Lazying Art 媒体播放器提供稳定的 GitHub Pages URL。

## 内容

| 路径 | 用途 |
| --- | --- |
| `audio/` | Fun Lazying Art 使用的公开 MP3 文件 |
| `audio.json` | 机器可读的音频目录 |
| `index.html` | 简单浏览器播放器和曲目列表 |
| `scripts/build-audio-json.js` | 重新生成音频目录 |
| `.github/FUNDING.yml` | GitHub Sponsors 和捐赠链接 |

## 快速开始

添加或删除 MP3 后重新生成目录：

```bash
node scripts/build-audio-json.js
```

## 验证

检查目录和静态站点资源：

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## 引用

如果你在研究、演示或公开文章中使用 MusiaSongs，请引用这个仓库。GitHub 会读取 [CITATION.cff](../CITATION.cff) 并显示 **Cite this repository** 面板。

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## 状态

这个仓库是公开播放基础设施。源会话、模型权重、API 密钥、私有提示词和工作目录不应提交到这里。
