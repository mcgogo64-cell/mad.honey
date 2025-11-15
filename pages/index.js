import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const translations = {
  en: {
    name: 'English',
    title: 'Mad Honey',
    intro: 'Mad honey is a distinctive honey made from rhododendron nectar (Rhododendron spp.) in regions like Turkey\'s Black Sea and the Himalayas. It naturally contains grayanotoxins that affect the heart and nervous system. While traditionally used in very small amounts, misuse can be dangerous.',
    sections: [
      { h: 'What is it?', p: 'A naturally occurring honey with grayanotoxins, known for its strong aroma and potential physiological effects.' },
      { h: 'Origin', p: 'Produced during spring bloom in areas rich in rhododendron, notably Turkey\'s Eastern Black Sea and parts of Nepal.' },
      { h: 'Effects & risks', p: 'Possible symptoms: dizziness, nausea, vomiting, sweating, blurred vision, slow heart rate, low blood pressure. Severe cases require immediate medical attention.' },
      { h: 'Responsible use', p: 'Buy from trusted sources; keep away from children; start with extremely small amounts; do not combine with alcohol or heart medications; seek medical help if symptoms occur.' }
    ],
    disclaimer: 'This site is informational. Not medical advice.'
  },
  tr: {
    name: 'Türkçe',
    title: 'Deli Bal',
    intro: 'Deli bal, Karadeniz ve Himalaya bölgelerinde yetişen orman gülü (Rhododendron) nektarından üretilen, kalp ve sinir sistemini etkileyen grayanotoksinler içeren özel bir baldı. Geleneksel olarak çok küçük miktarlarda kullanılsa da yanlış kullanım tehlikelidir.',
    sections: [
      { h: 'Nedir?', p: 'Grayanotoksin içeren, kuvvetli aromalı ve fizyolojik etkileri olabilen doğal bir bal türü.' },
      { h: 'Kaynak', p: 'Orman gülünün yoğun olduğu bölgelerde, özellikle Türkiye\'nin Doğu Karadeniz\'i ve Nepal\'de ilkbahar çiçeklenme döneminde üretilir.' },
      { h: 'Etkiler ve Riskler', p: 'Olası belirtiler: baş dönmesi, bulantı, kusma, terleme, görme bulanıklığı, kalp hızında yavaşlama, düşük tansiyon. Ağır durumlarda derhal tıbbi destek gereklidir.' },
      { h: 'Sorumlu Kullanım', p: 'Güvenilir üreticiden satın alın; çocuklardan uzak tutun; çok küçük miktarlarla başlayın; alkol veya kalp ilaçlarıyla birlikte tüketmeyin; belirtiler olursa hekime başvurun.' }
    ],
    disclaimer: 'Bu site bilgilendirme amaçlıdır. Tıbbi tavsiye değildir.'
  },
  es: {
    name: 'Español',
    title: 'Miel loca',
    intro: 'La miel loca se elabora con néctar de rododendro en regiones como la costa del Mar Negro (Turquía) y el Himalaya. Contiene grayanotoxinas que afectan el corazón y el sistema nervioso. Su uso tradicional es en cantidades muy pequeñas; el uso indebido puede ser peligroso.',
    sections: [
      { h: '¿Qué es?', p: 'Miel natural con grayanotoxinas, aroma intenso y posibles efectos fisiológicos.' },
      { h: 'Origen', p: 'Producida durante la floración de primavera en áreas ricas en rododendros, especialmente Turquía y Nepal.' },
      { h: 'Efectos y riesgos', p: 'Síntomas posibles: mareo, náuseas, vómito, sudoración, visión borrosa, bradicardia, hipotensión. En casos graves, atención médica inmediata.' },
      { h: 'Uso responsable', p: 'Compre de fuentes confiables; mantenga fuera del alcance de los niños; empiece con cantidades muy pequeñas; no mezcle con alcohol ni medicamentos cardíacos; busque ayuda médica si aparecen síntomas.' }
    ],
    disclaimer: 'Sitio informativo. No constituye consejo médico.'
  },
  fr: {
    name: 'Français',
    title: 'Miel fou',
    intro: 'Le miel fou est produit à partir du nectar de rhododendron, notamment en Turquie (mer Noire) et dans l’Himalaya. Il contient des grayanotoxines qui agissent sur le cœur et le système nerveux. Traditionnellement utilisé en très petites quantités, un mauvais usage peut être dangereux.',
    sections: [
      { h: 'Qu’est-ce que c’est ?', p: 'Un miel naturel contenant des grayanotoxines, au parfum prononcé et aux effets physiologiques possibles.' },
      { h: 'Origine', p: 'Fabriqué lors de la floraison printanière dans des zones riches en rhododendrons, notamment en Turquie et au Népal.' },
      { h: 'Effets et risques', p: 'Symptômes possibles : vertiges, nausées, vomissements, sueurs, vision floue, bradycardie, hypotension. Les cas graves nécessitent une prise en charge immédiate.' },
      { h: 'Usage responsable', p: 'Achetez auprès de sources fiables ; tenez hors de portée des enfants ; commencez par des quantités infimes ; évitez l’alcool et les médicaments cardiaques ; consultez si des symptômes apparaissent.' }
    ],
    disclaimer: 'Site informatif. Ne constitue pas un avis médical.'
  },
  de: {
    name: 'Deutsch',
    title: 'Gifthonig',
    intro: 'Gifthonig wird aus Rhododendron-Nektar hergestellt (u. a. Schwarzmeerregion in der Türkei und Himalaya). Er enthält Grayanotoxine, die Herz und Nervensystem beeinflussen. Traditionell nur in sehr kleinen Mengen verwendet; falscher Gebrauch kann gefährlich sein.',
    sections: [
      { h: 'Was ist das?', p: 'Natürlicher Honig mit Grayanotoxinen, kräftigem Aroma und möglichen physiologischen Effekten.' },
      { h: 'Herkunft', p: 'Entsteht zur Frühjahrstracht in rhododendronreichen Gebieten, besonders Türkei und Nepal.' },
      { h: 'Wirkungen & Risiken', p: 'Mögliche Symptome: Schwindel, Übelkeit, Erbrechen, Schwitzen, verschwommenes Sehen, langsamer Puls, niedriger Blutdruck. Schwere Fälle erfordern sofortige medizinische Hilfe.' },
      { h: 'Verantwortungsvoller Gebrauch', p: 'Nur aus vertrauenswürdigen Quellen beziehen; von Kindern fernhalten; mit sehr kleinen Mengen beginnen; nicht mit Alkohol oder Herzmedikamenten kombinieren; bei Symptomen ärztliche Hilfe suchen.' }
    ],
    disclaimer: 'Informationsseite. Keine medizinische Beratung.'
  },
  ar: {
    name: 'العربية',
    title: 'العسل المجنون',
    intro: 'يُنتَج العسل المجنون من رحيق الورد الجبلي (الرودودندرون) في مناطق مثل البحر الأسود في تركيا والهِمالايا. يحتوي بشكل طبيعي على جرايانوكسينات تؤثر في القلب والجهاز العصبي. يُستعمل تقليديًا بكميات صغيرة جدًا، وسوء الاستخدام قد يكون خطيرًا.',
    sections: [
      { h: 'ما هو؟', p: 'عسل طبيعي يحتوي على جرايانوكسينات، ذو رائحة قوية وقد يسبب تأثيرات فسيولوجية.' },
      { h: 'المنشأ', p: 'يُنتَج أثناء تفتح الربيع في مناطق غنية بالرودودندرون، خاصة في تركيا ونيبال.' },
      { h: 'التأثيرات والمخاطر', p: 'أعراض محتملة: دوار، غثيان، قيء، تعرّق، تشوّش الرؤية، بطء ضربات القلب، انخفاض ضغط الدم. الحالات الشديدة تتطلب عناية طبية فورية.' },
      { h: 'الاستخدام المسؤول', p: 'اشترِ من مصادر موثوقة؛ أبقِه بعيدًا عن الأطفال؛ ابدأ بكميات صغيرة جدًا؛ تجنّب مزجه مع الكحول أو أدوية القلب؛ اطلب المساعدة الطبية عند ظهور الأعراض.' }
    ],
    disclaimer: 'موقع معلوماتي، ليس نصيحة طبية.'
  },
  hi: {
    name: 'हिन्दी',
    title: 'मैड हनी',
    intro: 'मैड हनी रोडोडेंड्रन के पराग से बने शहद का एक प्रकार है (तुर्की के ब्लैक सी क्षेत्र और हिमालय में). इसमें ग्रायैनोटॉक्सिन होते हैं जो हृदय और तंत्रिका तंत्र को प्रभावित कर सकते हैं। पारंपरिक रूप से बहुत कम मात्रा में उपयोग; गलत उपयोग खतरनाक हो सकता है।',
    sections: [
      { h: 'यह क्या है?', p: 'प्राकृतिक शहद जिसमें ग्रायैनोटॉक्सिन होते हैं, तीव्र सुगंध और संभावित शारीरिक प्रभावों के साथ।' },
      { h: 'उत्पत्ति', p: 'वसंत ऋतु में रोडोडेंड्रन वाले क्षेत्रों में तैयार, विशेषकर तुर्की और नेपाल।' },
      { h: 'प्रभाव और जोखिम', p: 'संभावित लक्षण: चक्कर, मतली, उल्टी, पसीना, धुंधली दृष्टि, धीमी धड़कन, निम्न रक्तचाप। गंभीर मामलों में तुरंत चिकित्सा सहायता लें।' },
      { h: 'जिम्मेदार उपयोग', p: 'विश्वसनीय स्रोत से खरीदें; बच्चों से दूर रखें; अत्यंत कम मात्रा से शुरू करें; शराब या हृदय दवाओं के साथ न लें; लक्षण हों तो डॉक्टर से मिलें।' }
    ],
    disclaimer: 'यह जानकारी मात्र है, चिकित्सकीय सलाह नहीं।'
  },
  zh: {
    name: '简体中文',
    title: '疯蜜',
    intro: '疯蜜由杜鹃花（Rhododendron）花蜜制成，主要产自土耳其黑海沿岸和喜马拉雅地区。它天然含有灰毡毒素，可能影响心脏与神经系统。传统上以极少量食用，误用可能很危险。',
    sections: [
      { h: '是什么？', p: '一种天然蜂蜜，含灰毡毒素，气味浓郁，可能产生生理影响。' },
      { h: '产地', p: '在杜鹃花盛开的春季于富含杜鹃花的地区生产，主要在土耳其与尼泊尔。' },
      { h: '作用与风险', p: '可能症状：头晕、恶心、呕吐、出汗、视力模糊、心率减慢、低血压。严重情况需立即就医。' },
      { h: '负责任的食用', p: '从可信来源购买；远离儿童；从极少量开始；避免与酒精或心脏药物同食；若出现症状请就医。' }
    ],
    disclaimer: '仅供信息参考，非医疗建议。'
  },
  ja: {
    name: '日本語',
    title: '狂蜂蜜',
    intro: '狂蜂蜜はツツジ属（Rhododendron）の蜜から作られ、トルコ黒海沿岸やヒマラヤで産出されます。グラヤノトキシンを含み、心臓や神経系に作用することがあります。伝統的にはごく少量のみ使用され、誤用は危険です。',
    sections: [
      { h: '概要', p: 'グラヤノトキシンを含む天然の蜂蜜で、強い香りと生理的影響を持つ場合があります。' },
      { h: '産地', p: 'ツツジが多い地域の春の開花期に生産され、主にトルコやネパールで知られています。' },
      { h: '作用とリスク', p: 'めまい、吐き気、嘔吐、発汗、視界のぼやけ、徐脈、低血圧など。重症の場合は直ちに医療機関へ。' },
      { h: '適切な利用', p: '信頼できる供給元から購入し、子どもから離して保管。ごく少量から始め、アルコールや心臓の薬との併用は避け、症状が出たら受診を。' }
    ],
    disclaimer: '情報提供のみであり、医療助言ではありません。'
  },
  ru: {
    name: 'Русский',
    title: 'Безумный мёд',
    intro: 'Безумный мёд получают из нектара рододендрона (Rhododendron) в регионах, таких как побережье Чёрного моря в Турции и Гималаи. Он естественно содержит граянотоксины, влияющие на сердце и нервную систему. Традиционно употребляется в очень малых дозах; неправильное употребление опасно.',
    sections: [
      { h: 'Что это?', p: 'Натуральный мёд с граянотоксинами, с ярким ароматом и возможными физиологическими эффектами.' },
      { h: 'Происхождение', p: 'Производится весной в районах, богатых рододендроном, в основном в Турции и Непале.' },
      { h: 'Эффекты и риски', p: 'Возможные симптомы: головокружение, тошнота, рвота, потливость, затуманенное зрение, брадикардия, гипотония. В тяжёлых случаях требуется немедленная медицинская помощь.' },
      { h: 'Ответственное использование', p: 'Покупайте у надёжных продавцов; храните вдали от детей; начинайте с крайне малых доз; не сочетайте с алкоголем или сердечными препаратами; при симптомах обращайтесь к врачу.' }
    ],
    disclaimer: 'Информационный сайт. Не является медицинской рекомендацией.'
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

  return (
    <div className={isRtl ? 'rtl' : ''}>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content="Accurate, brief information about Mad Honey with multilingual support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.intro} />
      </Head>

      <main className="container">
        <header className="header">
          <h1 className="title">{t.title}</h1>
          <label className="langLabel" htmlFor="lang-select">Language</label>
          <select id="lang-select" className="langSelect" value={locale} onChange={onLangChange}>
            {Object.entries(translations).map(([key, val]) => (
              <option key={key} value={key}>{val.name}</option>
            ))}
          </select>
        </header>

        <section className="intro">
          <p>{t.intro}</p>
        </section>

        <section className="grid">
          {t.sections.map((s, i) => (
            <article key={i} className="card">
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </article>
          ))}
        </section>

        <footer className="footer">
          <p className="disclaimer">{t.disclaimer}</p>
        </footer>
      </main>
    </div>
  );
}
