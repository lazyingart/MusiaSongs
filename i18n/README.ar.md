[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](https://github.com/lachlanchen/lachlanchen/raw/main/figs/banner.png)](https://github.com/lachlanchen/lachlanchen/blob/main/figs/banner.png)

# MusiaSongs

*أصول صوتية عامة لأغاني Musia و Fun Lazying Art.*

[![Website](https://img.shields.io/badge/Website-MusiaSongs-198F86?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/) [![Fun Lazying Art](https://img.shields.io/badge/Fun-fun.lazying.art-D99A2B?style=for-the-badge)](https://fun.lazying.art) [![Audio catalog](https://img.shields.io/badge/Catalog-audio.json-17201D?style=for-the-badge)](https://lazyingart.github.io/MusiaSongs/audio.json) [![Sponsor](https://img.shields.io/badge/Sponsor-LazyingArt-F36F7F?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen)

يحفظ MusiaSongs ملفات MP3 العامة لمشغل Musia خارج مستودع الكود الرئيسي. يستطيع Fun Lazying Art استخدام روابط GitHub Pages ثابتة بينما يبقى مستودع Musia أخف وأنظف.

## الدعم

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## المشغل المباشر

افتح صفحة الصوت الخفيفة على https://lazyingart.github.io/MusiaSongs/ أو استخدم مشغل الإنتاج على https://fun.lazying.art.

## وظيفة هذا المستودع

- يستضيف ملفات MP3 العامة لأغاني Musia.
- ينشر فهرس `audio.json` للأدوات والمواقع.
- يبقي الصوت المولد خارج مستودع تطبيق Musia الرئيسي.
- يوفر روابط GitHub Pages ثابتة لمشغل Fun Lazying Art.

## المحتويات

| المسار | الغرض |
| --- | --- |
| `audio/` | ملفات MP3 عامة يستخدمها Fun Lazying Art |
| `audio.json` | فهرس صوتي قابل للقراءة آليًا |
| `index.html` | مشغل متصفح بسيط وقائمة مقاطع |
| `scripts/build-audio-json.js` | يعيد توليد فهرس الصوت |
| `.github/FUNDING.yml` | روابط GitHub Sponsors والتبرع |

## بدء سريع

أعد توليد الفهرس بعد إضافة أو إزالة ملفات MP3:

```bash
node scripts/build-audio-json.js
```

## التحقق

تحقق من الفهرس وأصول الموقع الثابت:

```bash
node scripts/build-audio-json.js
node -e "JSON.parse(require('fs').readFileSync('audio.json','utf8')); console.log('audio json ok')"
curl -I https://lazyingart.github.io/MusiaSongs/audio/one-sky-three-lights-mixed.mp3
```

## الاستشهاد

إذا استخدمت MusiaSongs في بحث أو عرض أو كتابة عامة، فاستشهد بالمستودع. يقرأ GitHub ملف [CITATION.cff](../CITATION.cff) ويعرض لوحة **Cite this repository**.

```bibtex
@software{chen_musiasongs_2026,
  author = {Chen, Lachlan},
  title = {MusiaSongs: Public Audio Assets for Musia and Fun Lazying Art},
  year = {2026},
  url = {https://github.com/lazyingart/MusiaSongs}
}
```

## الحالة

هذا المستودع بنية تشغيل عامة. لا ينبغي إيداع الجلسات المصدرية أو أوزان النماذج أو مفاتيح API أو المطالبات الخاصة أو مجلدات العمل هنا.
