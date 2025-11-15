import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const AMAZON_LINK = 'https://amzn.to/4o1YhZ8';

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
        icon: '🏔️',
        title: 'Wild & Organic',
        desc: 'Collected from remote Himalayan rhododendron forests at high altitudes.'
      },
      {
        icon: '🇳🇵',
        title: 'Authentic Nepal Origin',
        desc: 'Harvested traditionally by local honey hunters using centuries-old methods.'
      },
      {
        icon: '⚡',
        title: 'High-Potency',
        desc: 'Contains natural grayanotoxins in controlled amounts, lab-tested for safety.'
      },
      {
        icon: '✨',
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
        icon: '🏔️',
        title: 'Yabani & Organik',
        desc: 'Yüksek rakımlı uzak Himalaya orman gülü ormanlarından toplanmıştır.'
      },
      {
        icon: '🇳🇵',
        title: 'Otantik Nepal Menşei',
        desc: 'Yerel bal toplayıcıları tarafından yüzyıllardır kullanılan geleneksel yöntemlerle hasat edilir.'
      },
      {
        icon: '⚡',
        title: 'Yüksek Potans',
        desc: 'Kontrollü miktarlarda doğal grayanotoksin içerir, güvenlik için laboratuvar test edilmiştir.'
      },
      {
        icon: '✨',
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
                <div className="feature-icon">{feature.icon}</div>
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
