[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*Tài sản âm thanh công khai cho Musia và Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

MusiaSongs lưu các tệp MP3 công khai cho trình phát Musia bên ngoài kho mã chính. Fun Lazying Art có thể tải URL GitHub Pages ổn định, còn kho Musia vẫn nhẹ và sạch hơn.

## Ủng hộ

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Trình phát trực tiếp

Mở trang âm thanh nhẹ tại https://lazyingart.github.io/MusiaSongs/ hoặc dùng trình phát sản xuất tại https://fun.lazying.art.

## Kho này làm gì

- Lưu trữ MP3 công khai cho các bài hát Musia.
- Xuất bản catalog `audio.json` cho công cụ và website.
- Giữ âm thanh tạo ra bên ngoài kho ứng dụng Musia chính.
- Cung cấp URL GitHub Pages ổn định cho trình phát Fun Lazying Art.

## Nội dung

| Đường dẫn | Mục đích |
| --- | --- |
| `audio/` | MP3 công khai dùng bởi Fun Lazying Art |
| `audio.json` | Catalog âm thanh đọc được bằng máy |
| `index.html` | Trình phát đơn giản và danh sách bài |
| `scripts/build-audio-json.js` | Tạo lại catalog âm thanh |
| `.github/FUNDING.yml` | Liên kết GitHub Sponsors và quyên góp |

## Bắt đầu nhanh

Tạo lại catalog sau khi thêm hoặc xóa MP3:

```bash
node scripts/build-audio-json.js
```

## Kiểm tra

Kiểm tra catalog và tài sản tĩnh:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## Trích dẫn

Nếu bạn dùng MusiaSongs trong nghiên cứu, demo hoặc bài viết công khai, hãy trích dẫn kho này. GitHub đọc [CITATION.cff](../CITATION.cff) và hiển thị bảng **Cite this repository**.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## Trạng thái

Kho này là hạ tầng phát công khai. Không commit phiên nguồn, trọng số mô hình, khóa API, prompt riêng tư hoặc thư mục làm việc vào đây.
