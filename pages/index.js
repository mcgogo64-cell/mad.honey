import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const AMAZON_LINK = 'https://amzn.to/4o1YhZ8';

// Premium SVG Icons
const PremiumIcons = {
  wild: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C20 8 18 12 18 16C18 20 20 24 24 24C28 24 30 20 30 16C30 12 28 8 24 8Z" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 32C14 30 12 28 12 24C12 20 14 18 16 20" stroke="#CDA349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 32C34 30 36 28 36 24C36 20 34 18 32 20" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 36L24 40L28 36" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  nepal: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 36L20 16L24 24L28 12L36 36" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 16L24 24L28 12" stroke="#CDA349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="36" x2="40" y2="36" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  premium: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8L28 18L38 20L30 28L32 38L24 32L16 38L18 28L10 20L20 18L24 8Z" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 8L28 18L38 20L30 28L32 38L24 32" stroke="#CDA349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rare: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8L30 18L40 20L32 28L34 38L24 34L14 38L16 28L8 20L18 18L24 8Z" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 18L28 24L24 30L20 24L24 18Z" stroke="#CDA349" strokeWidth="2" fill="url(#goldGradient)"/>
      <defs>
        <linearGradient id="goldGradient" x1="20" y1="18" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CDA349" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#CDA349" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  lab: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="8" width="12" height="28" rx="2" stroke="#1D1B19" strokeWidth="2"/>
      <line x1="20" y1="14" x2="28" y2="14" stroke="#1D1B19" strokeWidth="1.5"/>
      <line x1="20" y1="18" x2="28" y2="18" stroke="#1D1B19" strokeWidth="1.5"/>
      <line x1="20" y1="22" x2="28" y2="22" stroke="#1D1B19" strokeWidth="1.5"/>
      <circle cx="24" cy="28" r="3" fill="#CDA349" fillOpacity="0.3" stroke="#CDA349" strokeWidth="1.5"/>
      <path d="M24 28L24 36" stroke="#CDA349" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  flavor: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C24 8 28 12 28 20C28 28 24 32 24 32C24 32 20 28 20 20C20 12 24 8 24 8Z" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 8C24 8 28 12 28 20C28 28 24 32 24 32" stroke="#CDA349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="24" y1="20" x2="24" y2="32" stroke="#1D1B19" strokeWidth="1.5"/>
      <path d="M24 32L24 40" stroke="#CDA349" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  harvest: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="24" y1="8" x2="24" y2="28" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round"/>
      <rect x="20" y="28" width="8" height="6" rx="1" stroke="#1D1B19" strokeWidth="2"/>
      <path d="M20 28L22 26L26 26L28 28" stroke="#CDA349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="34" x2="30" y2="34" stroke="#1D1B19" strokeWidth="1.5"/>
    </svg>
  ),
  shipping: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="18" width="20" height="16" rx="1" stroke="#1D1B19" strokeWidth="2"/>
      <path d="M10 20L24 14L38 20" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 20L30 34" stroke="#1D1B19" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 24L38 28L32 32" stroke="#CDA349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
};

const translations = {
  en: {
    name: 'English',
    title: 'Premium Wild Mad Honey from the Himalayas',
    subtitle: 'Hand-harvested from the cliffs of Nepal, sourced from Himalayan rhododendron nectar.',
    heroTitle: 'Premium Wild Mad Honey',
    heroSubtitle: 'from the Himalayas',
    heroDescription: 'Hand-harvested from the cliffs of Nepal, sourced from Himalayan rhododendron nectar.',
    trustBadges: [
      { text: 'Organic' },
      { text: 'Wild Harvest' },
      { text: 'Small Batch' },
      { text: 'Lab Tested' }
    ],
    features: [
      {
        icon: 'wild',
        title: 'Wild & Organic',
        desc: 'Collected from remote Himalayan rhododendron forests at high altitudes.'
      },
      {
        icon: 'nepal',
        title: 'Authentic Nepal Origin',
        desc: 'Harvested traditionally by local honey hunters using centuries-old methods.'
      },
      {
        icon: 'premium',
        title: 'High-Potency',
        desc: 'Contains natural grayanotoxins in controlled amounts, lab-tested for safety.'
      },
      {
        icon: 'rare',
        title: 'Limited Harvest',
        desc: 'Seasonally produced, small-batch, rare and highly sought after.'
      }
    ],
    whatIs: {
      title: 'What is Mad Honey?',
      content: 'Mad Honey, Nepal\'s Himalayan steep cliffs are home to local honey gatherers who produce this rare type of honey from wild rhododendron flowers. It ranks among the world\'s most special honeys due to its strong aroma, unique effects, and traditional usage history.'
    },
    origin: {
      title: 'From the Cliffs of Nepal',
      content: 'Our premium Mad Honey is harvested by skilled local honey hunters who scale the treacherous Himalayan cliffs using traditional methods passed down through generations. Each harvest is a testament to the rich cultural heritage and natural bounty of Nepal.'
    },
    benefits: {
      title: 'Benefits',
      items: [
        'Strong, aromatic flavor',
        'Traditionally used in local Himalayan communities',
        'Naturally occurring active compounds (lab-tested)'
      ]
    },
    safety: {
      title: 'Safety & Usage',
      items: [
        'Consume in small amounts only',
        'Not recommended for pregnant individuals',
        'Keep away from children',
        'Lab-tested to ensure controlled grayanotoxin levels'
      ]
    },
    cta: {
      title: 'Experience Premium Himalayan Mad Honey',
      subtitle: 'Limited Harvest – Ships Worldwide',
      button: 'Shop Now'
    },
    footer: '© 2025 Himalayan Mad Honey. All Rights Reserved.'
  },
  tr: {
    name: 'Türkçe',
    title: 'Himalaya\'dan Premium Yabani Deli Bal',
    subtitle: 'Nepal\'in kayalıklarından elle toplanmış, Himalaya orman gülü nektarından üretilmiş.',
    heroTitle: 'Premium Yabani Deli Bal',
    heroSubtitle: 'Himalaya\'dan',
    heroDescription: 'Nepal\'in kayalıklarından elle toplanmış, Himalaya orman gülü nektarından üretilmiş.',
    trustBadges: [
      { text: 'Organik' },
      { text: 'Yabani Hasat' },
      { text: 'Küçük Parti' },
      { text: 'Laboratuvar Testli' }
    ],
    features: [
      {
        icon: 'wild',
        title: 'Yabani & Organik',
        desc: 'Yüksek rakımlı uzak Himalaya orman gülü ormanlarından toplanmıştır.'
      },
      {
        icon: 'nepal',
        title: 'Otantik Nepal Menşei',
        desc: 'Yerel bal toplayıcıları tarafından yüzyıllardır kullanılan geleneksel yöntemlerle hasat edilir.'
      },
      {
        icon: 'premium',
        title: 'Yüksek Potans',
        desc: 'Kontrollü miktarlarda doğal grayanotoksin içerir, güvenlik için laboratuvar test edilmiştir.'
      },
      {
        icon: 'rare',
        title: 'Sınırlı Hasat',
        desc: 'Mevsimsel olarak üretilir, küçük parti, nadir ve çok aranır.'
      }
    ],
    whatIs: {
      title: 'Deli Bal Nedir?',
      content: 'Deli Bal, Nepal\'in Himalaya dik kayalıklarında yaşayan yerel bal toplayıcıları tarafından, yabani orman gülü çiçeklerinden üretilen nadir bir bal türüdür. Güçlü aroması, benzersiz etkileri ve geleneksel kullanım geçmişi nedeniyle dünyanın en özel balları arasında yer alır.'
    },
    origin: {
      title: 'Nepal\'in Kayalıklarından',
      content: 'Premium Deli Bal\'ımız, nesiller boyunca aktarılan geleneksel yöntemler kullanarak tehlikeli Himalaya kayalıklarını tırmanan yetenekli yerel bal toplayıcıları tarafından hasat edilir. Her hasat, Nepal\'in zengin kültürel mirası ve doğal bolluğunun bir kanıtıdır.'
    },
    benefits: {
      title: 'Faydalar',
      items: [
        'Güçlü, aromatik lezzet',
        'Yerel Himalaya topluluklarında geleneksel olarak kullanılır',
        'Doğal olarak oluşan aktif bileşikler (laboratuvar testli)'
      ]
    },
    safety: {
      title: 'Güvenlik & Kullanım',
      items: [
        'Sadece küçük miktarlarda tüketin',
        'Hamile bireyler için önerilmez',
        'Çocuklardan uzak tutun',
        'Kontrollü grayanotoksin seviyelerini sağlamak için laboratuvar test edilmiştir'
      ]
    },
    cta: {
      title: 'Premium Himalaya Deli Bal\'ını Deneyin',
      subtitle: 'Sınırlı Hasat – Dünya Çapında Kargo',
      button: 'Şimdi Satın Al'
    },
    footer: '© 2025 Himalaya Deli Bal. Tüm Hakları Saklıdır.'
  }
};

export default function Home() {
  const router = useRouter();
  const { locale = 'en' } = router;
  const t = useMemo(() => translations[locale] || translations.en, [locale]);
  const isRtl = locale === 'ar';

  const onLangChange = (e) => {
    const nextLocale = e.target.value;
    router.push('/', '/', { locale: nextLocale });
  };

  const siteUrl = 'https://mad-honey.vercel.app';
  const currentUrl = `${siteUrl}${router.asPath}`;
  const imageUrl = `${siteUrl}/Ekran görüntüsü 2025-11-15 144016.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": t.title,
    "description": t.subtitle,
    "image": [
      `${siteUrl}/Ekran görüntüsü 2025-11-15 144016.png`,
      `${siteUrl}/Ekran görüntüsü 2025-11-15 144159.png`
    ],
    "brand": {
      "@type": "Brand",
      "name": "Himalayan Mad Honey"
    },
    "offers": {
      "@type": "Offer",
      "url": AMAZON_LINK,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className={isRtl ? 'rtl' : ''}>
      <Head>
        <title>{t.title} | Himalayan Mad Honey</title>
        <meta name="description" content={t.subtitle} />
        <meta name="keywords" content="nepal mad honey, himalayan honey, wild honey, rhododendron honey, premium honey, nepal honey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.subtitle} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Himalayan Mad Honey</div>
          <div className="lang-selector">
            <select className="lang-select" value={locale} onChange={onLangChange}>
              {Object.entries(translations).map(([key, val]) => (
                <option key={key} value={key}>{val.name}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-cta">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
                {t.cta.button}
              </a>
              <p className="trust-note">Limited Seasonal Harvest</p>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="trust-badges">
          <div className="badges-container">
            {t.trustBadges.map((badge, i) => (
              <div key={i} className="badge">{badge.text}</div>
            ))}
          </div>
        </section>

        {/* Product Images */}
        <section className="product-images">
          <div className="images-container">
            <div className="product-image-wrapper">
              <img 
                src="/Ekran görüntüsü 2025-11-15 144016.png" 
                alt="Premium Mad Honey"
                className="product-image"
              />
            </div>
            <div className="product-image-wrapper">
              <img 
                src="/Ekran görüntüsü 2025-11-15 144159.png" 
                alt="Authentic Mad Honey"
                className="product-image"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="features-grid">
            {t.features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{PremiumIcons[feature.icon] || PremiumIcons.wild}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is Mad Honey */}
        <section className="what-is">
          <div className="content-block">
            <h2 className="section-title">{t.whatIs.title}</h2>
            <p className="section-content">{t.whatIs.content}</p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="origin">
          <div className="content-block">
            <h2 className="section-title">{t.origin.title}</h2>
            <p className="section-content">{t.origin.content}</p>
          </div>
        </section>

        {/* Benefits & Safety */}
        <section className="benefits-safety">
          <div className="benefits-safety-grid">
            <div className="benefits-block">
              <h3 className="block-title">{t.benefits.title}</h3>
              <ul className="benefits-list">
                {t.benefits.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="safety-block">
              <h3 className="block-title">{t.safety.title}</h3>
              <ul className="safety-list">
                {t.safety.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-content">
            <h2 className="cta-title">{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>
            <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className="cta-button large">
              {t.cta.button}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>{t.footer}</p>
        </footer>
      </main>
    </div>
  );
}
