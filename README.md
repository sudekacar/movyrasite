# 🧬 Movyra AI — Clinical Decision Support & Health Analytics Platform

<div align="center">

![Movyra AI Banner](https://img.shields.io/badge/İTÜ_Çekirdek-Sağlık_%26_Yaşam_Bilimleri_2026-8B5CF6?style=for-the-badge&logo=rocket)
![Next.js](https://img.shields.io/badge/Next.js_14/15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![KVKK Compliance](https://img.shields.io/badge/KVKK%2FGDPR-Compliant-10B981?style=for-the-badge)

<br />

**Movyra AI**, sağlık ve yaşam bilimleri dikeyinde klinik karar destek, medikal veri analizi ve tanı süreçlerini hızlandıran; **On-Premises** çalışabilen, **KVKK/GDPR uyumlu** ve **Multimodal RAG/LLM** mimarisine sahip yapay zeka platformudur.

</div>

---

## 🌟 Öne Çıkan Özellikler (Key Features)

* **🔒 On-Premises & KVKK Uyumlu Altyapı:** Kişisel sağlık verilerini dış ağa sızdırmayan kapalı devre, anonimleştirilmiş AI pipeline yapısı.
* **🧠 Multimodal RAG & LLM Engine:** Klinik raporlar, laboratuvar testleri ve medikal verileri saniyeler içinde anlama, özetleme ve karar desteği üretme.
* **🎨 Neon Purple / MedTech UI:** Hem **Dark Mode** hem **Light Mode** destekli, yüksek teknolojili ve kullanıcı dostu arayüz.
* **🌐 i18n Çoklu Dil Desteği:** `next-intl` ile tam entegre Türkçe (TR) ve İngilizce (EN) dil altyapısı.
* **📊 Diagnostik Simülasyon Paneli:** Gerçek zamanlı veri analitiğini ve AI güven skorlarını görselleştiren interaktif modüller.

---

## 🏗️ Proje Mimarisi (Architecture Flow)

```text
[ Klinik Veri / Metin / Testler ]
               │
               ▼
   ┌──────────────────────┐
   │ Anonymization Filter │ (KVKK / GDPR Güvenlik Katmanı)
   └───────────┬──────────┘
               │
               ▼
   ┌──────────────────────┐
   │ Multimodal RAG & LLM │ (Movyra AI Core Engine)
   └───────────┬──────────┘
               │
               ▼
   ┌──────────────────────┐
   │ Clinical Dashboard   │ (Karar Destek & Raporlama Paneli)
   └──────────────────────┘
🛠️ Teknoloji Yığını (Tech Stack)
Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS & Framer Motion

Localization: next-intl (TR/EN)

Theming: next-themes (Dark/Light)

Icons: FontAwesome 6 CDN & Lucide Icons

🚀 Yerel Geliştirme (Local Setup)
Projeyi kendi bilgisayarınızda çalıştırmak için:

Bash
# Repoyu klonlayın
git clone [https://github.com/sudekacar/movyrasite.git](https://github.com/sudekacar/movyrasite.git)

# Proje dizinine girin
cd movyrasite

# Bağımlılıkları yükleyin
npm install

# Geliştirici sunucusunu port 3003'te başlatın
npm run dev
Tarayıcınızda http://localhost:3003 adresine giderek uygulamayı görüntüleyebilirsiniz.

👥 Ekip & İletişim
Geliştirici / Kurucu Organizasyon: Qybit Labs

E-posta: movyra@qybitlabs.com

Program: İTÜ Çekirdek Kuluçka Merkezi — Sağlık & Yaşam Bilimleri 2026
