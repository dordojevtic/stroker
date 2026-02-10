# SEO Optimizacija - Šlep Služba Stroker

## ✅ Implementirano

### 1. Meta Tags i HTML Struktura
- **Jezik**: `lang="sr-RS"` (Srpski - Srbija)
- **Title tag**: Optimizovan sa ključnim rečima
- **Meta description**: 160 karaktera, fokus na lokaciju i usluge
- **Meta keywords**: Relevantne ključne reči za srpsko tržište
- **Canonical URL**: Definisan za sprečavanje duplikata
- **Geo targeting**: Postavljeno na Srbiju (`geo.region="RS"`)

### 2. Open Graph (Facebook, LinkedIn, WhatsApp)
- `og:type`, `og:url`, `og:title`, `og:description`
- `og:image` - postaviti pravu sliku vozila (preporuka: 1200x630px)
- `og:locale="sr_RS"` - srpski jezik
- `og:site_name` - ime biznisa

### 3. Twitter Cards
- Svi Twitter meta tagovi za deljenje
- `summary_large_image` format za najbolji prikaz

### 4. Strukturirani Podaci (Schema.org)
- **LocalBusiness/AutoRepair Schema**:Google razume šta je biznis
- **Radno vreme**: 24/7 definisano
- **Katalog usluga**: Sve usluge strukturirano navedene
- **Breadcrumb Schema**: Navigacija sajta
- **Kontakt podaci**: Telefon, adresa, područje pokrivenosti

### 5. Fajlovi za SEO
- **sitemap.xml**: XML mapa sajta sa prioritetima
- **robots.txt**: Uputstva za search engine botove
- **manifest.json**: PWA podrška za mobilne uređaje

### 6. Tehnička Optimizacija
- Semantički HTML tagovi (`<main>`, `<footer>`, `<section>`)
- Pravilna hijerarhija naslova (H1, H2, H3)
- Alt tekstovi na slikama (treba dodati)
- Meta theme-color za mobilne pregledače
- Apple touch icon podrška

---

## 🎯 Dodatne Preporuke za Maksimalnu SEO Optimizaciju

### A. Slike i Media
1. **Dodaj alt tekstove svim slikama**:
   ```html
   <img src="slep-1.jpeg" alt="Šlep vozilo Stroker 24h na terenu, šlepanje automobila">
   ```

2. **Optimizuj veličine slika**:
   - Kompresuj JPEG slike (WebP format preporučen)
   - Lazy loading za slike koje nisu odmah vidljive
   - Responsive slike (srcset)

3. **OG Image**:
   - Kreiraj profesionalnu sliku 1200x630px
   - Dodaj logo, broj telefona i naziv usluge
   - Postavi u `/public/og-image.jpg` i ažuriraj meta tagove

### B. Google Business Profile
1. Kreiraj **Google Business Profile** (besplatno)
2. Dodaj:
   - Sve informacije o biznisu
   - Fotografije vozila i tima
   - Radno vreme (24/7)
   - Usluge
   - Tražite **recenzije od zadovoljnih klijenata**

### C. Lokalno SEO
1. **Ključne reči za lokacije**:
   - "šlep služba Beograd"
   - "šlep služba Novi Sad"
   - "pomoć na putu Niš"
   - "šlep služba Srbija"

2. **Kreiraj blog sadržaj** (opciono):
   - "Šta raditi kada se auto pokvari na putu?"
   - "Kako pozvati šlep službu u Srbiji"
   - "Cene šlep usluga 2026"
   - "Šlepanje vozila iz inostranstva - vodič"

### D. Linkovi i Authority
1. **Backlinks**:
   - Registruj se na lokalnim direktorijumima
   - KupujemProdajem, Polovni Automobili forumi
   - Auto servisi partneri
   - Osiguravajuće kuće (linkovi na vas)

2. **Social Media Signali**:
   - Redovno objavljuj na Instagram
   - Facebook Business Page
   - YouTube video usluga (moćan SEO)

### E. Tehnička Poboljšanja

1. **Performance (brzina sajta)**:
   ```bash
   # Build optimizacija
   pnpm run build
   
   # Proveri brzinu
   - Google PageSpeed Insights
   - GTmetrix
   ```

2. **Core Web Vitals**:
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

3. **HTTPS i Security**:
   - Osiguraj SSL sertifikat (obavezan za SEO)
   - Security headers

### F. Content SEO

1. **Dodaj više tekstualnog sadržaja**:
   - Detaljni opisi usluga (minimum 300 reči po usluzi)
   - FAQ sekcija sa čestim pitanjima
   - Testimonijalse sa pravim imenima i lokacijama

2. **H1-H6 Hijerarhija**:
   - Samo jedan H1 po stranici
   - H2 za sekcije
   - H3 za podsekcije

3. **Internal Linking**:
   - Linkuj između sekcija
   - Anchor tekstovi sa ključnim rečima

### G. Konkurentska Analiza

Preporučeni alati:
- **Ahrefs** ili **SEMrush**: Analiza konkurencije
- **Google Search Console**: Monitoring performansi
- **Google Analytics 4**: Tracking posetilaca
- **Ubersuggest**: Besplatna alternativa

### H. Monitoring i Analytics

```html
<!-- Dodaj u index.html -->
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="your-code-here" />
```

### I. Conversion Optimization (CRO)

1. **Click-to-Call**:
   - Jasno vidljivi telefon (✅ već implementirano)
   - Sticky button za poziv

2. **CTA (Call-to-Action)**:
   - "Pozovi odmah"
   - "Dostupni 24/7"
   - Urgentnost u copy-u

3. **Trust Signals**:
   - Recenzije i ocene
   - "Stižemo za 20 minuta"
   - "Preko 1000 zadovoljnih klijenata"

---

## 📊 Ključne Reči Strategija

### Primary Keywords (Glavni):
- šlep služba
- pomoć na putu
- šlepanje vozila
- šlep Srbija

### Secondary Keywords (Sporedni):
- šlep služba 24h
- šlep non stop
- izvlačenje vozila
- dovoz vozila iz EU
- startovanje vozila
- zamena gume na putu

### Long-tail Keywords (Dugačke fraze):
- "šlep služba Beograd 24h cena"
- "pomoć na putu Srbija non stop"
- "dovoz vozila iz Nemačke cena"
- "izvlačenje automobila iz blata"

---

## 🚀 Akcioni Plan (Prioritet)

### Kratkoročno (1-2 nedelje):
1. ✅ Meta tags i strukturirani podaci (URAĐENO)
2. ✅ Sitemap i robots.txt (URAĐENO)
3. 📋 Dodaj alt tekstove na sve slike
4. 📋 Optimizuj i kompresuj slike
5. 📋 Kreiraj Google Business Profile
6. 📋 Registruj Google Search Console
7. 📋 Dodaj Google Analytics

### Srednjeročno (1 mesec):
1. 📋 Kreiraj Facebook Business Page
2. 📋 Prikupi 10-20 recenzija (Google, Facebook)
3. 📋 Dodaj FAQ sekciju na sajt
4. 📋 Blog: 3-5 korisnih članaka
5. 📋 Video testimonials ili showcase usluga

### Dugoročno (3+ meseca):
1. 📋 Consistent content marketing (blog, social)
2. 📋 Link building (direktorijumi, partneri)
3. 📋 YouTube kanal sa video sadržajem
4. 📋 Ekspanzija ključnih reči (nove lokacije)

---

## 📞 Kontakt za Dalju Pomoć

Za profesionalnu SEO optimizaciju i marketing konsultacije:
- SEO agencije u Srbiji
- Google Ads kampanje za instant rezultate
- Social media marketing specijalist

---

**Napomena**: SEO je dugoročan proces. Prvi rezultati se vide nakon 3-6 meseci konstantnog rada. Kombinuj SEO sa Google Ads za brže rezultate u startu.
