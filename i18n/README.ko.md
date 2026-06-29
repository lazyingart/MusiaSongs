[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Musia와 Fun Lazying Art를 위한 공개 오디오 자산.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs는 Musia 플레이어의 공개 MP3를 메인 Musia 코드 저장소와 분리해 보관합니다. Fun Lazying Art는 안정적인 GitHub Pages 오디오 URL을 사용하고, Musia 저장소는 더 가볍고 깨끗하게 유지됩니다.

## 후원

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## 라이브 플레이어

가벼운 오디오 페이지는 https://lazyingart.github.io/MusiaSongs/ 에서, 프로덕션 플레이어는 https://fun.lazying.art 에서 열 수 있습니다.

## 이 저장소의 역할

- Musia 공개 MP3 곡 자산을 호스팅합니다.
- 도구와 웹사이트를 위한 `audio.json` 카탈로그를 제공합니다.
- 생성 오디오를 메인 Musia 앱 저장소 밖에 둡니다.
- Fun Lazying Art 미디어 플레이어용 안정적인 GitHub Pages URL을 제공합니다.

## 구성

| 경로 | 목적 |
| --- | --- |
| `audio/` | Fun Lazying Art가 사용하는 공개 MP3 |
| `audio.json` | 기계가 읽을 수 있는 오디오 카탈로그 |
| `index.html` | 간단한 브라우저 플레이어와 트랙 목록 |
| `scripts/build-audio-json.js` | 오디오 카탈로그 재생성 |
| `.github/FUNDING.yml` | GitHub Sponsors 및 기부 링크 |

## 빠른 시작

MP3를 추가하거나 제거한 뒤 카탈로그를 다시 생성합니다:

```bash
node scripts/build-audio-json.js
```

## 검증

카탈로그와 정적 사이트 자산을 확인합니다:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## 인용

연구, 데모, 공개 글에서 MusiaSongs를 사용한다면 이 저장소를 인용하세요. GitHub는 [CITATION.cff](../CITATION.cff)를 읽고 **Cite this repository** 패널을 표시합니다.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## 상태

이 저장소는 공개 재생 인프라입니다. 원본 세션, 모델 가중치, API 키, 비공개 프롬프트, 작업 폴더는 커밋하지 마세요.
