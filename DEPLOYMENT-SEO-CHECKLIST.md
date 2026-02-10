# 🚀 Deployment & SEO Checklist - Šlep Služba Stroker

## Pre-Deployment Checklist

### 1. Build & Test
```bash
# Build production version
pnpm run build

# Preview production build locally
pnpm run preview

# Run tests
pnpm run test
```

### 2. Update Domain References
Before deploying, replace `https://slepsluzbastroker.rs/` with your actual domain in:
- [ ] `index.html` - all meta tags
- [ ] `sitemap.xml` - all URLs
- [ ] `robots.txt` - sitemap URL
- [ ] `manifest.json` - start_url (if needed)

### 3. Images Optimization
- [ ] Replace `/placeholder.svg` with actual logo/image in:
  - `index.html` (og:image, twitter:image)
  - `manifest.json` (icons)
- [ ] Optimize all gallery images (compress to WebP if possible)
- [ ] Create proper favicon.ico (32x32, 64x64)
- [ ] Create Apple touch icon (180x180)
- [ ] Create OG image (1200x630px) for social sharing

---

## Domain & Hosting Setup

### SSL Certificate (CRITICAL for SEO)
- [ ] Install SSL certificate (Let's Encrypt - besplatno)
- [ ] Enable HTTPS redirect in `.htaccess`
- [ ] Update all URLs to https://

### DNS Configuration
```
Type    Name    Value           TTL
A       @       your-server-ip  3600
A       www     your-server-ip  3600
```

### Hosting Recommendations
- **Shared hosting**: Hosting.rs, AVHost, ICT Host
- **VPS**: DigitalOcean, Hetzner, Vultr
- **CDN**: Cloudflare (besplatno) - highly recommended

---

## Google Services Setup

### 1. Google Search Console
**Priority: HIGH**

1. Poseti: https://search.google.com/search-console
2. Dodaj property (tvoj domen)
3. Verifikuj vlasništvo (HTML tag metoda)
4. Dodaj u `index.html`:
```html
<meta name="google-site-verification" content="YOUR_CODE_HERE" />
```
5. Submit sitemap: `https://slepsluzbastroker.rs/sitemap.xml`
6. Postavi geografsko ciljanje: Srbija

**Nakon deploy-a:**
- [ ] URL Inspection tool za homepage
- [ ] Request Indexing za glavne stranice
- [ ] Prati performance kroz Search Console

### 2. Google Business Profile
**Priority: CRITICAL - Najvažnije za lokalni SEO!**

1. Poseti: https://business.google.com
2. Kreiraj profil:
   - Ime biznisa: "Šlep Služba Stroker 24h"
   - Kategorija: "Towing service" ili "Auto repair"
   - Adresa: Dodaj fizičku adresu (važno!)
   - Telefon: +381 62 274 0496
   - Radno vreme: 24/7 (Monday-Sunday, Open 24 hours)
   - Website: https://slepsluzbastroker.rs

3. Optimizuj profil:
   - [ ] Dodaj 10-20 kvalitetnih fotografija vozila
   - [ ] Kompletna lista usluga
   - [ ] Opis biznisa (750 karaktera max)
   - [ ] Tražiti **recenzije** od klijenata (KLJUČNO!)

4. Dodaj atribute:
   - Online appointments: No
   - Online estimates: Yes
   - Emergency services: Yes
   - 24/7 availability: Yes

### 3. Google Analytics 4
**Priority: HIGH**

1. Poseti: https://analytics.google.com
2. Kreiraj property (GA4)
3. Uzmi Measurement ID (G-XXXXXXXXXX)
4. Dodaj u `index.html` (pre closing `</head>`):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_title': 'Šlep Služba Stroker 24h',
    'page_location': window.location.href
  });
</script>
```

5. Postavi goals/events:
   - Phone click: tel: link clicks
   - Instagram click
   - Section views (Usluge, Galerija)

### 4. Google Ads (Opciono ali preporučeno)
- Kreiraj kampanju sa ključnim rečima
- Budget: počni sa 1000-2000 RSD dnevno
- Targeting: Srbija, radius oko velikih gradova
- Keywords:
  - "šlep služba [grad]"
  - "pomoć na putu"
  - "auto kvar"
  - "24h šlep"

---

## Social Media & Directories

### Facebook
- [ ] Kreiraj Facebook Business Page
- [ ] Dodaj sve informacije (telefon, radno vreme, website)
- [ ] Postuj fotografije sa galerije
- [ ] Omogući Messenger za brze upite
- [ ] Dodaj CTA button "Pozovi odmah"

### Instagram (Already exists)
- [ ] Optimizuj bio sa website linkom
- [ ] Dodaj highlights za različite usluge
- [ ] Koristi hashtags:
  ```
  #slepsluzba #pomocnaputu #srbija #slep #beograd
  #slepanje #24hsaobracaj #autohelp #slepsluzbasrbija
  ```
- [ ] Postuj redovno (3-5 puta nedeljno)

### Online Directories
Registruj biznis na:
- [ ] **KupujemProdajem** - oglasi + profil
- [ ] **Halo Oglasi** - usluge
- [ ] **Bing Places** (https://www.bingplaces.com)
- [ ] **Yandex Business** (za ruskogovorne)
- [ ] **TripAdvisor** (ako ima review opciju)
- [ ] **4Square/Foursquare**
- [ ] **Moja Srbija** online direktorijum
- [ ] **Žute Strane** (if available)

---

## Technical SEO Post-Deployment

### Verify These Work:
```bash
# Test sitemap
curl https://slepsluzbastroker.rs/sitemap.xml

# Test robots.txt
curl https://slepsluzbastroker.rs/robots.txt

# Test manifest
curl https://slepsluzbastroker.rs/manifest.json

# Test HTTPS redirect
curl -I http://slepsluzbastroker.rs
# Should return 301 redirect to https://
```

### Performance Testing
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
  - Target: 90+ Mobile, 95+ Desktop
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

### Mobile-Friendly Test
- [ ] Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Test na stvarnim uređajima (iOS, Android)

### Schema Markup Validation
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schema.org Validator: https://validator.schema.org/

---

## SEO Monitoring (Ongoing)

### Weekly Tasks
- [ ] Check Google Search Console za errors
- [ ] Monitor Analytics traffic
- [ ] Odgovori na nove Google reviews
- [ ] Postuj na Instagram/Facebook

### Monthly Tasks
- [ ] Analiza ključnih reči i pozicija
- [ ] Provera konkurencije
- [ ] Update content ako treba
- [ ] Analiza conversion rate (pozivi, kontakti)

### Quarterly Tasks
- [ ] Detaljni SEO audit
- [ ] Update sitemap sa novim sadržajem
- [ ] Refresh fotografija i galerije
- [ ] A/B testiranje CTA buttons

---

## Tools & Resources

### Free SEO Tools
- **Google Search Console** - must have
- **Google Analytics 4** - must have
- **Google Business Profile** - must have
- **Ubersuggest** - keyword research (5 free/day)
- **AnswerThePublic** - content ideas
- **Neil Patel SEO Analyzer** - site audit

### Paid Tools (Optional)
- **Ahrefs** ($99/mo) - comprehensive SEO
- **SEMrush** ($119/mo) - competitor analysis
- **Moz Pro** ($99/mo) - rank tracking

### Serbian SEO Resources
- **SEO.rs** - lokalni SEO blog
- **Digitalizuj.me** - marketing saveti
- **Social Media Srbija** - grupe na FB

---

## Emergency Contact Info

### If Site Goes Down:
1. Check hosting control panel
2. Check DNS settings (dns.google.com)
3. Contact hosting support
4. Backup files available in: `/dist` folder

### If Rankings Drop:
1. Check Google Search Console for penalties
2. Verify sitemap is accessible
3. Check for broken links
4. Review recent changes

### If Ads Not Working:
1. Check Google Ads account status
2. Verify billing information
3. Review ad disapprovals
4. Check daily budget limits

---

## Success Metrics

### Month 1 Goals:
- [ ] Site indexed by Google (all pages)
- [ ] Google Business Profile verified
- [ ] 10+ Google reviews
- [ ] 100+ organic visitors

### Month 3 Goals:
- [ ] Top 10 for "šlep služba [glavni grad]"
- [ ] 500+ organic visitors/month
- [ ] 50+ Google reviews (4.5+ average)
- [ ] 20+ phone calls from website

### Month 6 Goals:
- [ ] Top 3 for main keywords
- [ ] 1000+ organic visitors/month
- [ ] Established social media presence
- [ ] ROI positive from online marketing

---

## Support & Questions

For technical SEO issues:
- Check `/SEO-OPTIMIZATION.md` for detailed guide
- Review Google Search Console documentation
- Consult with local SEO agency if needed

**Important**: SEO is a marathon, not a sprint. Consistent effort over 6-12 months brings best results!

---

**Last Updated**: February 2026
**Next Review**: After deployment + 30 days
