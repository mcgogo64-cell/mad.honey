import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const AMAZON_LINK = 'https://amzn.to/4o1YhZ8';

const translations = {
  en: {
    name: 'English',
    title: 'Premium Mad Honey',
    subtitle: 'Authentic Rhododendron Honey from the Black Sea Region',
    intro: 'Discover the extraordinary benefits of authentic Mad Honey, harvested from the pristine rhododendron forests of Turkey\'s Black Sea region. This rare, premium honey contains natural grayanotoxins and has been used traditionally for centuries.',
    heroTitle: 'Experience the Power of Nature',
    heroSubtitle: 'Premium Quality • Authentic Source • Traditional Heritage',
    benefits: [
      { icon: '🌿', title: '100% Natural', desc: 'Raw, unpasteurized honey from wild rhododendron flowers' },
      { icon: '🏔️', title: 'Authentic Origin', desc: 'Sourced directly from Turkey\'s Black Sea mountains' },
      { icon: '⭐', title: 'Premium Quality', desc: 'Carefully harvested and tested for purity' },
      { icon: '💎', title: 'Rare & Exclusive', desc: 'Limited availability from traditional beekeepers' }
    ],
    features: [
      { h: 'What is Mad Honey?', p: 'Mad honey is a distinctive honey made from rhododendron nectar (Rhododendron spp.) in regions like Turkey\'s Black Sea and the Himalayas. It naturally contains grayanotoxins that have been traditionally used in very small amounts for their unique properties.' },
      { h: 'Authentic Origin', p: 'Our honey is produced during spring bloom in the pristine rhododendron-rich areas of Turkey\'s Eastern Black Sea region, where traditional beekeeping methods have been preserved for generations.' },
      { h: 'Traditional Benefits', p: 'Traditionally valued for its unique properties, mad honey has been used in small amounts for centuries. Always use responsibly and consult with healthcare professionals.' },
      { h: 'Quality Assurance', p: 'We source only from trusted, traditional beekeepers who follow sustainable practices. Each batch is carefully tested to ensure authenticity and purity.' }
    ],
    cta: {
      title: 'Get Your Premium Mad Honey Today',
      subtitle: 'Limited stock available. Order now and experience authentic quality.',
      button: 'Shop on Amazon',
      buttonSecondary: 'Learn More'
    },
    disclaimer: 'This product is for informational purposes. Use responsibly and consult healthcare professionals. Keep away from children. Not recommended for pregnant women or those with heart conditions.'
  },
  tr: {
    name: 'Türkçe',
    title: 'Premium Deli Bal',
    subtitle: 'Karadeniz Bölgesinden Otantik Orman Gülü Balı',
    intro: 'Türkiye\'nin Karadeniz bölgesinin el değmemiş orman gülü ormanlarından hasat edilen otantik Deli Bal\'ın olağanüstü faydalarını keşfedin. Bu nadir, premium bal doğal grayanotoksinler içerir ve yüzyıllardır geleneksel olarak kullanılmaktadır.',
    heroTitle: 'Doğanın Gücünü Deneyimleyin',
    heroSubtitle: 'Premium Kalite • Otantik Kaynak • Geleneksel Miras',
    benefits: [
      { icon: '🌿', title: '%100 Doğal', desc: 'Yabani orman gülü çiçeklerinden ham, pastörize edilmemiş bal' },
      { icon: '🏔️', title: 'Otantik Menşe', desc: 'Doğrudan Türkiye\'nin Karadeniz dağlarından temin edilir' },
      { icon: '⭐', title: 'Premium Kalite', desc: 'Özenle hasat edilmiş ve saflık için test edilmiş' },
      { icon: '💎', title: 'Nadir ve Özel', desc: 'Geleneksel arıcılardan sınırlı miktarda mevcut' }
    ],
    features: [
      { h: 'Deli Bal Nedir?', p: 'Deli bal, Karadeniz ve Himalaya bölgelerinde yetişen orman gülü (Rhododendron) nektarından üretilen, kalp ve sinir sistemini etkileyen grayanotoksinler içeren özel bir baldı. Geleneksel olarak çok küçük miktarlarda kullanılır.' },
      { h: 'Otantik Menşe', p: 'Balımız, geleneksel arıcılık yöntemlerinin nesiller boyunca korunduğu Türkiye\'nin Doğu Karadeniz bölgesinin el değmemiş, orman gülü açısından zengin alanlarında ilkbahar çiçeklenme döneminde üretilir.' },
      { h: 'Geleneksel Faydalar', p: 'Geleneksel olarak benzersiz özellikleri için değer gören deli bal, yüzyıllardır küçük miktarlarda kullanılmaktadır. Her zaman sorumlu bir şekilde kullanın ve sağlık uzmanlarına danışın.' },
      { h: 'Kalite Güvencesi', p: 'Yalnızca sürdürülebilir uygulamaları takip eden güvenilir, geleneksel arıcılardan temin ediyoruz. Her parti, otantiklik ve saflığı sağlamak için dikkatle test edilir.' }
    ],
    cta: {
      title: 'Premium Deli Bal\'ınızı Bugün Alın',
      subtitle: 'Sınırlı stok mevcut. Şimdi sipariş verin ve otantik kaliteyi deneyimleyin.',
      button: 'Amazon\'da Satın Al',
      buttonSecondary: 'Daha Fazla Bilgi'
    },
    disclaimer: 'Bu ürün bilgilendirme amaçlıdır. Sorumlu kullanın ve sağlık uzmanlarına danışın. Çocuklardan uzak tutun. Hamile kadınlar veya kalp rahatsızlığı olanlar için önerilmez.'
  },
  es: {
    name: 'Español',
    title: 'Miel Loca Premium',
    subtitle: 'Miel Auténtica de Rododendro de la Región del Mar Negro',
    intro: 'Descubra los extraordinarios beneficios de la miel loca auténtica, cosechada de los prístinos bosques de rododendros de la región del Mar Negro de Turquía. Esta miel rara y premium contiene grayanotoxinas naturales y se ha utilizado tradicionalmente durante siglos.',
    heroTitle: 'Experimente el Poder de la Naturaleza',
    heroSubtitle: 'Calidad Premium • Fuente Auténtica • Herencia Tradicional',
    benefits: [
      { icon: '🌿', title: '100% Natural', desc: 'Miel cruda, sin pasteurizar de flores silvestres de rododendro' },
      { icon: '🏔️', title: 'Origen Auténtico', desc: 'Obtenido directamente de las montañas del Mar Negro de Turquía' },
      { icon: '⭐', title: 'Calidad Premium', desc: 'Cosechada y probada cuidadosamente para garantizar pureza' },
      { icon: '💎', title: 'Rara y Exclusiva', desc: 'Disponibilidad limitada de apicultores tradicionales' }
    ],
    features: [
      { h: '¿Qué es la Miel Loca?', p: 'La miel loca se elabora con néctar de rododendro en regiones como la costa del Mar Negro (Turquía) y el Himalaya. Contiene grayanotoxinas que se han utilizado tradicionalmente en cantidades muy pequeñas por sus propiedades únicas.' },
      { h: 'Origen Auténtico', p: 'Nuestra miel se produce durante la floración de primavera en las áreas prístinas ricas en rododendros de la región del Mar Negro Oriental de Turquía, donde los métodos tradicionales de apicultura se han preservado durante generaciones.' },
      { h: 'Beneficios Tradicionales', p: 'Tradicionalmente valorada por sus propiedades únicas, la miel loca se ha utilizado en pequeñas cantidades durante siglos. Siempre use responsablemente y consulte con profesionales de la salud.' },
      { h: 'Garantía de Calidad', p: 'Obtenemos solo de apicultores tradicionales confiables que siguen prácticas sostenibles. Cada lote se prueba cuidadosamente para garantizar autenticidad y pureza.' }
    ],
    cta: {
      title: 'Obtenga Su Miel Loca Premium Hoy',
      subtitle: 'Stock limitado disponible. Ordene ahora y experimente calidad auténtica.',
      button: 'Comprar en Amazon',
      buttonSecondary: 'Saber Más'
    },
    disclaimer: 'Este producto es solo para fines informativos. Use responsablemente y consulte a profesionales de la salud. Mantenga fuera del alcance de los niños. No recomendado para mujeres embarazadas o personas con afecciones cardíacas.'
  },
  fr: {
    name: 'Français',
    title: 'Miel Fou Premium',
    subtitle: 'Miel Authentique de Rhododendron de la Région de la Mer Noire',
    intro: 'Découvrez les bienfaits extraordinaires du miel fou authentique, récolté dans les forêts vierges de rhododendrons de la région de la Mer Noire en Turquie. Ce miel rare et premium contient des grayanotoxines naturelles et est utilisé traditionnellement depuis des siècles.',
    heroTitle: 'Découvrez la Puissance de la Nature',
    heroSubtitle: 'Qualité Premium • Source Authentique • Héritage Traditionnel',
    benefits: [
      { icon: '🌿', title: '100% Naturel', desc: 'Miel cru, non pasteurisé de fleurs sauvages de rhododendron' },
      { icon: '🏔️', title: 'Origine Authentique', desc: 'Provenant directement des montagnes de la Mer Noire en Turquie' },
      { icon: '⭐', title: 'Qualité Premium', desc: 'Récolté et testé soigneusement pour garantir la pureté' },
      { icon: '💎', title: 'Rare et Exclusif', desc: 'Disponibilité limitée d\'apiculteurs traditionnels' }
    ],
    features: [
      { h: 'Qu\'est-ce que le Miel Fou?', p: 'Le miel fou est produit à partir du nectar de rhododendron, notamment en Turquie (mer Noire) et dans l\'Himalaya. Il contient des grayanotoxines qui ont été traditionnellement utilisées en très petites quantités pour leurs propriétés uniques.' },
      { h: 'Origine Authentique', p: 'Notre miel est produit lors de la floraison printanière dans les zones vierges riches en rhododendrons de la région de la Mer Noire orientale de la Turquie, où les méthodes traditionnelles d\'apiculture ont été préservées pendant des générations.' },
      { h: 'Bienfaits Traditionnels', p: 'Traditionnellement apprécié pour ses propriétés uniques, le miel fou est utilisé en petites quantités depuis des siècles. Utilisez toujours de manière responsable et consultez des professionnels de la santé.' },
      { h: 'Garantie Qualité', p: 'Nous nous approvisionnons uniquement auprès d\'apiculteurs traditionnels de confiance qui suivent des pratiques durables. Chaque lot est soigneusement testé pour garantir l\'authenticité et la pureté.' }
    ],
    cta: {
      title: 'Obtenez Votre Miel Fou Premium Aujourd\'hui',
      subtitle: 'Stock limité disponible. Commandez maintenant et découvrez une qualité authentique.',
      button: 'Acheter sur Amazon',
      buttonSecondary: 'En Savoir Plus'
    },
    disclaimer: 'Ce produit est à des fins informatives uniquement. Utilisez de manière responsable et consultez des professionnels de la santé. Tenir hors de portée des enfants. Non recommandé pour les femmes enceintes ou les personnes souffrant de problèmes cardiaques.'
  },
  de: {
    name: 'Deutsch',
    title: 'Premium Gifthonig',
    subtitle: 'Authentischer Rhododendron-Honig aus der Schwarzmeer-Region',
    intro: 'Entdecken Sie die außergewöhnlichen Vorteile von authentischem Gifthonig, geerntet aus den unberührten Rhododendron-Wäldern der Schwarzmeer-Region der Türkei. Dieser seltene Premium-Honig enthält natürliche Grayanotoxine und wird seit Jahrhunderten traditionell verwendet.',
    heroTitle: 'Erleben Sie die Kraft der Natur',
    heroSubtitle: 'Premium-Qualität • Authentische Quelle • Traditionelles Erbe',
    benefits: [
      { icon: '🌿', title: '100% Natur', desc: 'Rohhonig, unpasteurisiert von wilden Rhododendron-Blüten' },
      { icon: '🏔️', title: 'Authentischer Ursprung', desc: 'Direkt aus den Schwarzmeer-Bergen der Türkei bezogen' },
      { icon: '⭐', title: 'Premium-Qualität', desc: 'Sorgfältig geerntet und auf Reinheit geprüft' },
      { icon: '💎', title: 'Selten & Exklusiv', desc: 'Begrenzte Verfügbarkeit von traditionellen Imkern' }
    ],
    features: [
      { h: 'Was ist Gifthonig?', p: 'Gifthonig wird aus Rhododendron-Nektar hergestellt (u. a. Schwarzmeerregion in der Türkei und Himalaya). Er enthält Grayanotoxine, die traditionell in sehr kleinen Mengen für ihre einzigartigen Eigenschaften verwendet wurden.' },
      { h: 'Authentischer Ursprung', p: 'Unser Honig wird während der Frühlingsblüte in den unberührten, rhododendronreichen Gebieten der östlichen Schwarzmeer-Region der Türkei produziert, wo traditionelle Imkermethoden seit Generationen erhalten wurden.' },
      { h: 'Traditionelle Vorteile', p: 'Traditionell für seine einzigartigen Eigenschaften geschätzt, wird Gifthonig seit Jahrhunderten in kleinen Mengen verwendet. Verwenden Sie immer verantwortungsbewusst und konsultieren Sie Gesundheitsfachkräfte.' },
      { h: 'Qualitätsgarantie', p: 'Wir beziehen nur von vertrauenswürdigen, traditionellen Imkern, die nachhaltige Praktiken befolgen. Jede Charge wird sorgfältig getestet, um Authentizität und Reinheit zu gewährleisten.' }
    ],
    cta: {
      title: 'Holen Sie sich Ihren Premium Gifthonig Heute',
      subtitle: 'Begrenzter Bestand verfügbar. Bestellen Sie jetzt und erleben Sie authentische Qualität.',
      button: 'Bei Amazon Kaufen',
      buttonSecondary: 'Mehr Erfahren'
    },
    disclaimer: 'Dieses Produkt dient nur zu Informationszwecken. Verantwortungsbewusst verwenden und Gesundheitsfachkräfte konsultieren. Von Kindern fernhalten. Nicht empfohlen für schwangere Frauen oder Personen mit Herzerkrankungen.'
  },
  ar: {
    name: 'العربية',
    title: 'عسل مجنون ممتاز',
    subtitle: 'عسل رودودندرون أصلي من منطقة البحر الأسود',
    intro: 'اكتشف الفوائد الاستثنائية للعسل المجنون الأصلي، المحصود من غابات رودودندرون البكر في منطقة البحر الأسود بتركيا. يحتوي هذا العسل النادر والممتاز على جرايانوكسينات طبيعية ويُستخدم تقليدياً منذ قرون.',
    heroTitle: 'اختبر قوة الطبيعة',
    heroSubtitle: 'جودة ممتازة • مصدر أصلي • تراث تقليدي',
    benefits: [
      { icon: '🌿', title: 'طبيعي 100%', desc: 'عسل خام غير مبستر من أزهار رودودندرون البرية' },
      { icon: '🏔️', title: 'أصل أصلي', desc: 'مصدر مباشر من جبال البحر الأسود في تركيا' },
      { icon: '⭐', title: 'جودة ممتازة', desc: 'محصود بعناية ومختبر للنقاء' },
      { icon: '💎', title: 'نادر وحصري', desc: 'توفر محدود من مربي النحل التقليديين' }
    ],
    features: [
      { h: 'ما هو العسل المجنون؟', p: 'يُنتَج العسل المجنون من رحيق الورد الجبلي (الرودودندرون) في مناطق مثل البحر الأسود في تركيا والهِمالايا. يحتوي بشكل طبيعي على جرايانوكسينات استُخدمت تقليدياً بكميات صغيرة جداً لخصائصها الفريدة.' },
      { h: 'أصل أصلي', p: 'يُنتَج عسلنا أثناء تفتح الربيع في المناطق البكر الغنية بالرودودندرون في منطقة البحر الأسود الشرقية بتركيا، حيث حُفظت طرق تربية النحل التقليدية عبر الأجيال.' },
      { h: 'فوائد تقليدية', p: 'قُدّر تقليدياً لخصائصه الفريدة، استُخدم العسل المجنون بكميات صغيرة منذ قرون. استخدم دائماً بمسؤولية واستشر المتخصصين في الرعاية الصحية.' },
      { h: 'ضمان الجودة', p: 'نحصل فقط من مربي النحل التقليديين الموثوقين الذين يتبعون ممارسات مستدامة. يُختبر كل دفعة بعناية لضمان الأصالة والنقاء.' }
    ],
    cta: {
      title: 'احصل على عسلك المجنون الممتاز اليوم',
      subtitle: 'مخزون محدود متاح. اطلب الآن واختبر الجودة الأصيلة.',
      button: 'تسوق على أمازون',
      buttonSecondary: 'اعرف المزيد'
    },
    disclaimer: 'هذا المنتج لأغراض إعلامية فقط. استخدم بمسؤولية واستشر المتخصصين في الرعاية الصحية. أبقِه بعيداً عن الأطفال. غير موصى به للنساء الحوامل أو المصابين بأمراض القلب.'
  },
  hi: {
    name: 'हिन्दी',
    title: 'प्रीमियम मैड हनी',
    subtitle: 'ब्लैक सी क्षेत्र से प्रामाणिक रोडोडेंड्रन शहद',
    intro: 'तुर्की के ब्लैक सी क्षेत्र के प्राचीन रोडोडेंड्रन जंगलों से काटे गए प्रामाणिक मैड हनी के असाधारण लाभों की खोज करें। यह दुर्लभ, प्रीमियम शहद प्राकृतिक ग्रायैनोटॉक्सिन युक्त है और सदियों से पारंपरिक रूप से उपयोग किया जाता रहा है।',
    heroTitle: 'प्रकृति की शक्ति का अनुभव करें',
    heroSubtitle: 'प्रीमियम गुणवत्ता • प्रामाणिक स्रोत • पारंपरिक विरासत',
    benefits: [
      { icon: '🌿', title: '100% प्राकृतिक', desc: 'जंगली रोडोडेंड्रन फूलों से कच्चा, गैर-पाश्चुरीकृत शहद' },
      { icon: '🏔️', title: 'प्रामाणिक उत्पत्ति', desc: 'सीधे तुर्की के ब्लैक सी पहाड़ों से प्राप्त' },
      { icon: '⭐', title: 'प्रीमियम गुणवत्ता', desc: 'शुद्धता के लिए सावधानीपूर्वक काटा और परीक्षण किया गया' },
      { icon: '💎', title: 'दुर्लभ और विशेष', desc: 'पारंपरिक मधुमक्खी पालकों से सीमित उपलब्धता' }
    ],
    features: [
      { h: 'मैड हनी क्या है?', p: 'मैड हनी रोडोडेंड्रन के पराग से बने शहद का एक प्रकार है (तुर्की के ब्लैक सी क्षेत्र और हिमालय में). इसमें ग्रायैनोटॉक्सिन होते हैं जो पारंपरिक रूप से अपने अद्वितीय गुणों के लिए बहुत कम मात्रा में उपयोग किए गए हैं।' },
      { h: 'प्रामाणिक उत्पत्ति', p: 'हमारा शहद तुर्की के पूर्वी ब्लैक सी क्षेत्र के प्राचीन, रोडोडेंड्रन-समृद्ध क्षेत्रों में वसंत फूलों के दौरान उत्पादित होता है, जहाँ पारंपरिक मधुमक्खी पालन विधियों को पीढ़ियों से संरक्षित किया गया है।' },
      { h: 'पारंपरिक लाभ', p: 'पारंपरिक रूप से अपने अद्वितीय गुणों के लिए मूल्यवान, मैड हनी सदियों से छोटी मात्रा में उपयोग किया जाता रहा है। हमेशा जिम्मेदारी से उपयोग करें और स्वास्थ्य पेशेवरों से परामर्श करें।' },
      { h: 'गुणवत्ता आश्वासन', p: 'हम केवल विश्वसनीय, पारंपरिक मधुमक्खी पालकों से प्राप्त करते हैं जो स्थायी प्रथाओं का पालन करते हैं। प्रामाणिकता और शुद्धता सुनिश्चित करने के लिए प्रत्येक बैच का सावधानीपूर्वक परीक्षण किया जाता है।' }
    ],
    cta: {
      title: 'आज ही अपना प्रीमियम मैड हनी प्राप्त करें',
      subtitle: 'सीमित स्टॉक उपलब्ध। अभी ऑर्डर करें और प्रामाणिक गुणवत्ता का अनुभव करें।',
      button: 'अमेज़न पर खरीदें',
      buttonSecondary: 'अधिक जानें'
    },
    disclaimer: 'यह उत्पाद केवल सूचनात्मक उद्देश्यों के लिए है। जिम्मेदारी से उपयोग करें और स्वास्थ्य पेशेवरों से परामर्श करें। बच्चों से दूर रखें। गर्भवती महिलाओं या हृदय रोग वालों के लिए अनुशंसित नहीं।'
  },
  zh: {
    name: '简体中文',
    title: '优质疯蜜',
    subtitle: '来自黑海地区的正宗杜鹃花蜜',
    intro: '发现来自土耳其黑海地区原始杜鹃花森林的正宗疯蜜的非凡益处。这种稀有的优质蜂蜜含有天然灰毡毒素，几个世纪以来一直被传统使用。',
    heroTitle: '体验自然的力量',
    heroSubtitle: '优质品质 • 正宗来源 • 传统传承',
    benefits: [
      { icon: '🌿', title: '100% 天然', desc: '来自野生杜鹃花的生蜂蜜，未经巴氏消毒' },
      { icon: '🏔️', title: '正宗产地', desc: '直接从土耳其黑海山区采购' },
      { icon: '⭐', title: '优质品质', desc: '精心采集并经过纯度测试' },
      { icon: '💎', title: '稀有专属', desc: '传统养蜂人限量供应' }
    ],
    features: [
      { h: '什么是疯蜜？', p: '疯蜜由杜鹃花（Rhododendron）花蜜制成，主要产自土耳其黑海沿岸和喜马拉雅地区。它天然含有灰毡毒素，传统上因其独特特性而以极少量使用。' },
      { h: '正宗产地', p: '我们的蜂蜜在土耳其东黑海地区原始、富含杜鹃花的地区春季开花期间生产，传统养蜂方法已世代保存。' },
      { h: '传统益处', p: '传统上因其独特特性而受到重视，疯蜜几个世纪以来一直以少量使用。请始终负责任地使用并咨询医疗专业人士。' },
      { h: '质量保证', p: '我们仅从遵循可持续做法的值得信赖的传统养蜂人处采购。每批都经过仔细测试以确保真实性和纯度。' }
    ],
    cta: {
      title: '立即获取您的优质疯蜜',
      subtitle: '库存有限。立即订购，体验正宗品质。',
      button: '在亚马逊购买',
      buttonSecondary: '了解更多'
    },
    disclaimer: '本产品仅供信息参考。请负责任地使用并咨询医疗专业人士。远离儿童。不建议孕妇或心脏病患者使用。'
  },
  ja: {
    name: '日本語',
    title: 'プレミアム狂蜂蜜',
    subtitle: '黒海地域産の本格的なツツジ蜂蜜',
    intro: 'トルコの黒海地域の原始的なツツジの森から収穫された本格的な狂蜂蜜の特別な利点を発見してください。この希少なプレミアム蜂蜜には天然のグラヤノトキシンが含まれており、何世紀にもわたって伝統的に使用されてきました。',
    heroTitle: '自然の力を体験',
    heroSubtitle: 'プレミアム品質 • 本格的なソース • 伝統的な遺産',
    benefits: [
      { icon: '🌿', title: '100%天然', desc: '野生のツツジの花から採取された生の、非加熱処理の蜂蜜' },
      { icon: '🏔️', title: '本格的な原産地', desc: 'トルコの黒海の山々から直接調達' },
      { icon: '⭐', title: 'プレミアム品質', desc: '純度を確保するために慎重に収穫され、テストされた' },
      { icon: '💎', title: '希少で独占的', desc: '伝統的な養蜂家からの限定供給' }
    ],
    features: [
      { h: '狂蜂蜜とは？', p: '狂蜂蜜はツツジ属（Rhododendron）の蜜から作られ、トルコ黒海沿岸やヒマラヤで産出されます。グラヤノトキシンを含み、伝統的にその独特な特性のためにごく少量で使用されてきました。' },
      { h: '本格的な原産地', p: '私たちの蜂蜜は、伝統的な養蜂方法が世代を超えて保存されてきたトルコの東黒海地域の原始的な、ツツジが豊富な地域で春の開花期に生産されます。' },
      { h: '伝統的な利点', p: '伝統的にその独特な特性のために評価されてきた狂蜂蜜は、何世紀にもわたって少量で使用されてきました。常に責任を持って使用し、医療専門家に相談してください。' },
      { h: '品質保証', p: '私たちは持続可能な実践に従う信頼できる伝統的な養蜂家からのみ調達します。各バッチは、真正性と純度を確保するために慎重にテストされます。' }
    ],
    cta: {
      title: '今日、プレミアム狂蜂蜜を手に入れましょう',
      subtitle: '在庫限定。今すぐ注文して、本格的な品質を体験してください。',
      button: 'Amazonで購入',
      buttonSecondary: '詳細を見る'
    },
    disclaimer: 'この製品は情報提供のみを目的としています。責任を持って使用し、医療専門家に相談してください。子供の手の届かないところに保管してください。妊婦や心臓疾患のある方には推奨されません。'
  },
  ru: {
    name: 'Русский',
    title: 'Премиум Безумный Мёд',
    subtitle: 'Аутентичный Мёд Рододендрона из Региона Чёрного Моря',
    intro: 'Откройте для себя необыкновенные преимущества аутентичного безумного мёда, собранного из нетронутых лесов рододендрона в регионе Чёрного моря Турции. Этот редкий премиум мёд содержит природные граянотоксины и традиционно используется веками.',
    heroTitle: 'Испытайте Силу Природы',
    heroSubtitle: 'Премиум Качество • Аутентичный Источник • Традиционное Наследие',
    benefits: [
      { icon: '🌿', title: '100% Натуральный', desc: 'Сырой, непастеризованный мёд из диких цветов рододендрона' },
      { icon: '🏔️', title: 'Аутентичное Происхождение', desc: 'Прямо из гор Чёрного моря в Турции' },
      { icon: '⭐', title: 'Премиум Качество', desc: 'Тщательно собран и протестирован на чистоту' },
      { icon: '💎', title: 'Редкий и Эксклюзивный', desc: 'Ограниченная доступность от традиционных пчеловодов' }
    ],
    features: [
      { h: 'Что такое Безумный Мёд?', p: 'Безумный мёд получают из нектара рододендрона (Rhododendron) в регионах, таких как побережье Чёрного моря в Турции и Гималаи. Он естественно содержит граянотоксины, которые традиционно использовались в очень малых дозах из-за их уникальных свойств.' },
      { h: 'Аутентичное Происхождение', p: 'Наш мёд производится весной в нетронутых, богатых рододендроном районах восточного региона Чёрного моря Турции, где традиционные методы пчеловодства сохранялись на протяжении поколений.' },
      { h: 'Традиционные Преимущества', p: 'Традиционно ценимый за свои уникальные свойства, безумный мёд использовался в малых дозах веками. Всегда используйте ответственно и консультируйтесь с медицинскими специалистами.' },
      { h: 'Гарантия Качества', p: 'Мы закупаем только у надёжных традиционных пчеловодов, которые следуют устойчивым практикам. Каждая партия тщательно тестируется для обеспечения подлинности и чистоты.' }
    ],
    cta: {
      title: 'Получите Ваш Премиум Безумный Мёд Сегодня',
      subtitle: 'Ограниченный запас в наличии. Закажите сейчас и испытайте аутентичное качество.',
      button: 'Купить на Amazon',
      buttonSecondary: 'Узнать Больше'
    },
    disclaimer: 'Этот продукт предназначен только для информационных целей. Используйте ответственно и консультируйтесь с медицинскими специалистами. Храните вдали от детей. Не рекомендуется беременным женщинам или лицам с сердечными заболеваниями.'
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

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": t.title,
    "description": t.intro,
    "image": [
      `${siteUrl}/Ekran görüntüsü 2025-11-15 144016.png`,
      `${siteUrl}/Ekran görüntüsü 2025-11-15 144159.png`
    ],
    "brand": {
      "@type": "Brand",
      "name": "Premium Mad Honey"
    },
    "offers": {
      "@type": "Offer",
      "url": AMAZON_LINK,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "20267"
    }
  };

  // Language alternates
  const languageAlternates = Object.keys(translations).map(locale => ({
    hrefLang: locale,
    href: `${siteUrl}/${locale === 'en' ? '' : locale}`
  }));

  return (
    <div className={isRtl ? 'rtl' : ''}>
      <Head>
        {/* Basic Meta Tags */}
        <title>{t.title} | Premium Authentic Mad Honey</title>
        <meta name="description" content={t.intro} />
        <meta name="keywords" content="mad honey, deli bal, rhododendron honey, premium honey, authentic honey, black sea honey, grayanotoxin honey, natural honey, traditional honey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Premium Mad Honey" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Language Alternates */}
        {languageAlternates.map((alt, i) => (
          <link key={i} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.intro} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t.title} />
        <meta property="og:site_name" content="Premium Mad Honey" />
        <meta property="og:locale" content={locale === 'en' ? 'en_US' : locale === 'tr' ? 'tr_TR' : locale === 'es' ? 'es_ES' : locale === 'fr' ? 'fr_FR' : locale === 'de' ? 'de_DE' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.intro} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={t.title} />

        {/* Additional SEO */}
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="container">
        <header className="header">
          <div className="header-content">
            <h1 className="title">{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
          </div>
          <div className="lang-selector">
            <label className="langLabel" htmlFor="lang-select">Language</label>
            <select id="lang-select" className="langSelect" value={locale} onChange={onLangChange}>
              {Object.entries(translations).map(([key, val]) => (
                <option key={key} value={key}>{val.name}</option>
              ))}
            </select>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">{t.heroTitle}</h2>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
          </div>
          <div className="hero-images">
            <div className="image-wrapper">
              <img 
                src="/Ekran görüntüsü 2025-11-15 144016.png" 
                alt="Premium Mad Honey"
                className="hero-image"
              />
            </div>
            <div className="image-wrapper">
              <img 
                src="/Ekran görüntüsü 2025-11-15 144159.png" 
                alt="Authentic Mad Honey"
                className="hero-image"
              />
            </div>
          </div>
          <div className="hero-cta">
            <a 
              href={AMAZON_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-buy-button"
            >
              {t.cta.button}
            </a>
          </div>
        </section>

        <section className="intro">
          <p className="intro-text">{t.intro}</p>
        </section>

        <section className="benefits">
          <div className="benefits-grid">
            {t.benefits.map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          <div className="features-grid">
            {t.features.map((feature, i) => (
              <article key={i} className="feature-card">
                <h2>{feature.h}</h2>
                <p>{feature.p}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">{t.cta.title}</h2>
            <p className="cta-subtitle">{t.cta.subtitle}</p>
            <div className="cta-buttons">
              <a 
                href={AMAZON_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                {t.cta.button}
              </a>
              <a 
                href="#features" 
                className="cta-button secondary"
              >
                {t.cta.buttonSecondary}
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p className="disclaimer">{t.disclaimer}</p>
        </footer>
      </main>
    </div>
  );
}
