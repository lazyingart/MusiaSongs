[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Musia と Fun Lazying Art の公開音源アセット。*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs は、Musia プレイヤーで使う公開 MP3 をメインの Musia コードリポジトリから分離して保存します。Fun Lazying Art は安定した GitHub Pages の音声 URL を読み込み、Musia 本体は軽くきれいに保てます。

## 支援

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## ライブプレイヤー

軽量オーディオページは https://lazyingart.github.io/MusiaSongs/、本番プレイヤーは https://fun.lazying.art で開けます。

## このリポジトリの役割

- Musia の公開 MP3 楽曲アセットをホストします。
- ツールやサイト向けに `audio.json` カタログを公開します。
- 生成音声を Musia 本体リポジトリから切り離します。
- Fun Lazying Art メディアプレイヤー向けに安定した GitHub Pages URL を提供します。

## 内容

| パス | 目的 |
| --- | --- |
| `audio/` | Fun Lazying Art が使う公開 MP3 |
| `audio.json` | 機械可読の音声カタログ |
| `index.html` | シンプルなブラウザプレイヤーと曲一覧 |
| `scripts/build-audio-json.js` | 音声カタログを再生成 |
| `.github/FUNDING.yml` | GitHub Sponsors と寄付リンク |

## クイックスタート

MP3 を追加または削除した後にカタログを再生成します:

```bash
node scripts/build-audio-json.js
```

## 検証

カタログと静的サイトアセットを確認します:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## 引用

研究、デモ、公開記事で MusiaSongs を使う場合は、このリポジトリを引用してください。GitHub は [CITATION.cff](../CITATION.cff) を読み取り、**Cite this repository** パネルを表示します。

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## 状態

このリポジトリは公開再生用インフラです。元セッション、モデル重み、API キー、非公開プロンプト、作業フォルダはここにコミットしないでください。
