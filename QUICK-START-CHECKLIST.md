# 🚀 Quick Start SEO Checklist - Šlep Služba Stroker

## Pre-Deploy (5 minuta)

- [ ] Zameni `https://slepsluzbastroker.rs/` sa pravim domenom u:
  - `index.html`
  - `sitemap.xml`
  - `robots.txt`

- [ ] Upload slike:
  - `/public/og-image.jpg` (1200x630px) - za social share
  - `/public/favicon.ico` - logo ikonica
  - Ažuriraj putanje u `index.html` i `manifest.json`

- [ ] Build za production:
```bash
pnpm run build
```

---

## Dan 1 - Deploy Dan (30 minuta)

- [ ] Upload na hosting
- [ ] SSL sertifikat aktivan (HTTPS)
- [ ] Test: https://vašdomen.rs radi
- [ ] Test: https://vašdomen.rs/sitemap.xml dostupan
- [ ] Test: https://vašdomen.rs/robots.txt dostupan

---

## Dan 1-2 - Google Setup (1 sat)

### Google Search Console
1. [ ] Idi na: https://search.google.com/search-console
2. [ ] Add property: vašdomen.rs
3. [ ] Verifikuj (HTML meta tag metoda)
4. [ ] Submit sitemap: https://vašdomen.rs/sitemap.xml

### Google Analytics 4
1. [ ] Idi na: https://analytics.google.com
2. [ ] Kreiraj GA4 property
3. [ ] Uzmi Measurement ID (G-XXXXXXXXXX)
4. [ ] Dodaj u `index.html` (pre </head>):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Business Profile ⭐ NAJVAŽNIJE!
1. [ ] Idi na: https://business.google.com
2. [ ] Kreiraj profil sa svim info
3. [ ] Upload 10+ fotografija vozila
4. [ ] Dodaj sve usluge

---

## Nedelja 1 (2 sata)

### Prikupljanje Recenzija 🌟
- [ ] Pitaj 5-10 zadovoljnih klijenata za Google review
- [ ] Pošalji im link: https://g.page/r/[tvoj-business-id]/review

### Social Media
- [ ] Facebook Business Page sa svim info
- [ ] Instagram bio sa website linkom
- [ ] Post 3-5 slika na obe platforme

### Cloudflare (Opciono ali preporučeno)
- [ ] Registruj na cloudflare.com
- [ ] Dodaj sajt (besplatni plan)
- [ ] Promeni nameservere kod registrara
- [ ] Automatski SSL + CDN + Caching

---

## Nedelja 2-4 (Ongoing)

### Content
- [ ] Piši 1 blog post nedeljno (korisni saveti)
- [ ] Instagram post 3x nedeljno
- [ ] Odgovaraj na sve recenzije odmah

### Monitoring
- [ ] Proveri Google Search Console jednom nedeljno
- [ ] Proveri Analytics za traffic
- [ ] Tracking phone calls (koliko dolazi sa sajta?)

---

## Mesec 2-3

### Link Building
- [ ] Registruj se na:
  - KupujemProdajem profil
  - Halo Oglasi
  - Bing Places
  - Lokalni direktorijumi

### Optimization
- [ ] Analiza ključnih reči (koji rade, koji ne)
- [ ] A/B test CTA buttons
- [ ] Dodaj FAQ sekciju ako treba

---

## Quick Contact Info za Tools

| Tool | URL | Akcija |
|------|-----|--------|
| **Search Console** | search.google.com/search-console | Submit sitemap |
| **Analytics** | analytics.google.com | Add tracking code |
| **Business Profile** | business.google.com | Create listing |
| **PageSpeed** | pagespeed.web.dev | Test performance |
| **Rich Results** | search.google.com/test/rich-results | Test schema |
| **Schema Validator** | validator.schema.org | Validate markup |

---

## Emergency Contacts

**Hosting problem?**
- Check hosting control panel
- Contact hosting support

**Site down?**
- Check: https://downforeveryoneorjustme.com/vašdomen.rs
- Check DNS: https://dns.google.com

**SEO questions?**
- Read: `/SEO-OPTIMIZATION.md`
- Read: `/DEPLOYMENT-SEO-CHECKLIST.md`

---

## Success Quick Check (Mesec 1)

✅ **Site indexed?** → Google: `site:vašdomen.rs`  
✅ **Business on Maps?** → Google Maps search: "Šlep Služba Stroker"  
✅ **Traffic coming?** → Check Analytics dashboard  
✅ **Reviews coming?** → Check Google Business Profile  
✅ **Phone ringing?** → Best success metric! 📞

---

## Prioriteti (Najvažnije prvo)

1. 🔴 **SSL + Deploy** (kritično)
2. 🔴 **Google Business Profile** (najvažnije za SEO)
3. 🟡 **Search Console + Analytics** (tracking)
4. 🟡 **Recenzije** (trust + ranking)
5. 🟢 **Social Media** (brand + traffic)
6. 🟢 **Content Marketing** (long-term)

---

## Troškovi (Estimate)

| Item | Cena | Frekvencija |
|------|------|-------------|
| Hosting | 500-2000 RSD | Mesečno |
| SSL | Besplatno (Let's Encrypt) | - |
| Domen | 1000-1500 RSD | Godišnje |
| Google Services | **BESPLATNO** | - |
| Cloudflare | **BESPLATNO** | - |
| Google Ads | 30,000+ RSD | Mesečno (opt) |
| **TOTAL (Obavezno)** | **~1000 RSD/mesec** | - |

---

## ROI Očekivanja

**Mesec 1:** 5-10 poziva (test)  
**Mesec 3:** 20-50 poziva  
**Mesec 6:** 100+ poziva  

**Konverzija:** 20-30% poziva → klijenti  
**Prosečan poziv:** 3,000-8,000 RSD (šlep + usluge)

**ROI @ Mesec 6:**
- **Investicija:** ~6,000 RSD (hosting 6 meseci)
- **Return:** 30+ klijenata × 4,000 RSD = 120,000+ RSD
- **ROI:** 2000%+ 🚀

*Napomena: Uz Google Ads, rezultati dolaze brže ali sa većim troškovima.*

---

**Print ovaj dokument i stavi na zid - step by step roadmap za SEO success!** 📋

**Pitanja?** Pogledaj detaljne guide-ove u folderu ili kontaktiraj SEO agenciju.

Good luck! 🍀
