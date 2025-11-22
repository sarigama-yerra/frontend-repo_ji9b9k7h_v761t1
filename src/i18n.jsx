import React, { createContext, useContext, useMemo, useState } from 'react'

const translations = {
  en: {
    brand: 'Tadeemco',
    nav: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      clients: 'Clients',
      contact: 'Contact',
      company: 'Company',
      who: 'Who We Are',
      cases: 'Case Studies',
      partners: 'Partners',
    },
    hero: {
      badge: 'Engineering • ICT • ELV',
      title: 'Engineering excellence for connected infrastructure',
      desc:
        'Tadeemco delivers end‑to‑end ICT, ELV, and structured cabling solutions for mission‑critical environments. We design, build, and maintain systems that power smart buildings and resilient networks.',
      ctaPrimary: 'Request a proposal',
      ctaSecondary: 'View projects',
      stats: [
        ['15+','Years'],
        ['200+','Projects'],
        ['ISO','Certified'],
        ['24/7','Support']
      ],
    },
    services: {
      title: 'Services',
      desc: 'Comprehensive engineering services delivered with precision, safety, and compliance.',
      items: [
        { title: 'Structured Cabling', desc: 'High‑performance fiber optic and copper cabling for enterprise networks.' },
        { title: 'ELV Systems', desc: 'CCTV, access control, PA/BGM, SMATV, and BMS integrations for smart facilities.' },
        { title: 'Security Solutions', desc: 'End‑to‑end surveillance, intrusion detection, and perimeter protection.' },
        { title: 'Data Centers', desc: 'Design, build, and maintenance of server rooms and critical IT infrastructure.' },
        { title: 'Wireless & Mobility', desc: 'Enterprise Wi‑Fi, point‑to‑point links, and campus connectivity.' },
        { title: 'ICT Integration', desc: 'End‑to‑end system integration across IT, OT, and building systems.' },
        { title: 'Telecom & FO', desc: 'OSP/ISP fiber networks, splicing, testing, and certification.' },
        { title: 'Telephony & IP', desc: 'IP telephony, UC, and collaboration platforms deployment.' },
      ],
    },
    projects: {
      title: 'Projects',
      desc: 'Selected work showcasing complex deployments and reliable delivery.',
      list: [
        { title: 'Smart Campus Network Overhaul', tags: ['Fiber Backbone','Wi‑Fi 6','Security'] },
        { title: 'Tier III Data Center Build', tags: ['Cooling','Redundancy','Monitoring'] },
        { title: 'Citywide CCTV Expansion', tags: ['CCTV','Analytics','Command Center'] },
        { title: 'Hospital ELV Integration', tags: ['Nurse Call','Access Control','PA/BGM'] },
        { title: 'Metro Fiber Deployment', tags: ['OSP','FTTx','Testing'] },
        { title: 'Corporate HQ Fit‑out', tags: ['Cabling','Wi‑Fi','Security'] },
      ],
    },
    about: {
      title: 'About Tadeemco',
      desc:
        'We are an engineering‑first ICT and ELV solutions provider, delivering reliable infrastructure for enterprises and government. Our teams combine rigorous project management, certified engineering practices, and safety standards to deliver systems that last.',
      badges: [
        ['ISO 9001:2015', 'Quality management'],
        ['ISO 27001', 'Information security'],
        ['HSE Compliant', 'Safety‑first operations'],
        ['Certified Engineers', 'Multi‑vendor expertise'],
      ],
    },
    clients: {
      title: 'Clients & Partners',
      desc: 'Trusted by organizations across telecom, education, healthcare, and government.',
    },
    contact: {
      title: 'Contact',
      desc: 'Tell us about your project. Our engineering team will get back within one business day.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      service: 'Service',
      message: 'Message',
      placeholderName: 'Your name',
      placeholderCompany: 'Organization',
      placeholderEmail: 'name@company.com',
      placeholderMessage: 'Project details, timelines, scope',
      submit: 'Send message',
      officeTitle: 'Head Office',
      officePlace: 'Tadeemco, Doha, Qatar',
      labelEmail: 'Email:',
      labelPhone: 'Phone:',
      services: [
        'Structured Cabling','ELV Systems','Security Solutions','Data Centers','Wireless & Mobility','ICT Integration','Telecom & FO','Telephony & IP'
      ],
    },
    footer: {
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      built: 'Built with Flames.blue',
      copy: (y) => `© ${y} Tadeemco. All rights reserved.`,
    },
    langToggle: 'العربية',
  },
  ar: {
    brand: 'تديمكو',
    nav: {
      services: 'الخدمات',
      projects: 'المشاريع',
      about: 'من نحن',
      clients: 'العملاء والشركاء',
      contact: 'تواصل',
      company: 'الشركة',
      who: 'من نحن',
      cases: 'دراسات حالة',
      partners: 'الشركاء',
    },
    hero: {
      badge: 'الهندسة • تقنية المعلومات والاتصالات • الأنظمة الضعيفة',
      title: 'تميّز هندسي لبنية تحتية مترابطة',
      desc:
        'تقدم تديمكو حلولاً متكاملة في نظم ICT وELV والشبكات الهيكلية للبيئات الحساسة. نصمم ونبني ونشغّل أنظمة تدعم المباني الذكية والشبكات الموثوقة.',
      ctaPrimary: 'اطلب عرضاً',
      ctaSecondary: 'استعرض المشاريع',
      stats: [
        ['+15','سنة'],
        ['+200','مشروع'],
        ['ISO','معتمد'],
        ['24/7','دعم']
      ],
    },
    services: {
      title: 'الخدمات',
      desc: 'خدمات هندسية شاملة تُقدَّم بدقة وامتثال ومعايير سلامة عالية.',
      items: [
        { title: 'شبكات وهيكلة الكوابل', desc: 'ألياف ضوئية ونحاسية عالية الأداء لشبكات المؤسسات.' },
        { title: 'أنظمة التيار الضعيف ELV', desc: 'كاميرات مراقبة، تحكم الدخول، النداء العام، القنوات، وتكامل أنظمة المباني.' },
        { title: 'حلول الأمن', desc: 'مراقبة شاملة، كشف التسلل، وحماية المحيط.' },
        { title: 'مراكز البيانات', desc: 'تصميم وبناء وصيانة غرف الخوادم والبنية التحتية الحرجة.' },
        { title: 'لاسلكي وتنقّل', desc: 'Wi‑Fi للمؤسسات وروابط نقطة إلى نقطة واتصال الحرم.' },
        { title: 'تكامل نظم ICT', desc: 'تكامل شامل بين أنظمة تكنولوجيا المعلومات والتشغيل وأنظمة المباني.' },
        { title: 'الاتصالات والألياف', desc: 'شبكات الألياف الخارجية/الداخلية، لحام، فحص، واعتماد.' },
        { title: 'الهاتف وIP', desc: 'هاتف IP ومنصات الاتصال الموحد وتنفيذ التعاون.' },
      ],
    },
    projects: {
      title: 'المشاريع',
      desc: 'مختارات توضح تنفيذات معقّدة وتسليم موثوق.',
      list: [
        { title: 'تحديث شبكة حرم جامعي ذكي', tags: ['عمود ألياف','Wi‑Fi 6','أمن'] },
        { title: 'بناء مركز بيانات معيار Tier III', tags: ['تبريد','تكرار','مراقبة'] },
        { title: 'توسعة منظومة كاميرات المدينة', tags: ['CCTV','تحليلات','مركز قيادة'] },
        { title: 'تكامل أنظمة ELV لمستشفى', tags: ['نداء تمريضي','تحكم دخول','نداء عام'] },
        { title: 'نشر ألياف ضوئية حضرية', tags: ['OSP','FTTx','اختبار'] },
        { title: 'تجهيز مقر شركة رئيسي', tags: ['كوابل','Wi‑Fi','أمن'] },
      ],
    },
    about: {
      title: 'عن تديمكو',
      desc:
        'نحن مزوّد حلول ICT وELV قائم على الهندسة أولاً، نقدّم بنية تحتية موثوقة للقطاعين الحكومي والخاص. يجمع فريقنا بين إدارة مشاريع صارمة وممارسات معتمدة ومعايير سلامة لنظم تدوم.',
      badges: [
        ['ISO 9001:2015', 'إدارة الجودة'],
        ['ISO 27001', 'أمن المعلومات'],
        ['امتثال HSE', 'السلامة أولاً'],
        ['مهندسون معتمدون', 'خبرة متعددة المورّدين'],
      ],
    },
    clients: {
      title: 'العملاء والشركاء',
      desc: 'موثوق من قبل جهات في الاتصالات والتعليم والرعاية الصحية والقطاع الحكومي.',
    },
    contact: {
      title: 'تواصل',
      desc: 'أخبرنا عن مشروعك. سيرد فريقنا الهندسي خلال يوم عمل واحد.',
      name: 'الاسم',
      company: 'الشركة',
      email: 'البريد الإلكتروني',
      service: 'الخدمة',
      message: 'الرسالة',
      placeholderName: 'اسمك',
      placeholderCompany: 'الجهة',
      placeholderEmail: 'name@company.com',
      placeholderMessage: 'تفاصيل المشروع، الجداول، النطاق',
      submit: 'إرسال',
      officeTitle: 'المقر الرئيسي',
      officePlace: 'تديمكو، الدوحة، قطر',
      labelEmail: 'البريد:',
      labelPhone: 'الهاتف:',
      services: [
        'شبكات وهيكلة الكوابل','أنظمة ELV','حلول الأمن','مراكز البيانات','لاسلكي وتنقّل','تكامل نظم ICT','الاتصالات والألياف','الهاتف وIP'
      ],
    },
    footer: {
      services: 'الخدمات',
      company: 'الشركة',
      contact: 'تواصل',
      built: 'مصنوع بواسطة Flames.blue',
      copy: (y) => `© ${y} تديمكو. جميع الحقوق محفوظة.`,
    },
    langToggle: 'English',
  },
}

const I18nContext = createContext({ lang: 'en', dir: 'ltr', t: (k) => k, setLang: () => {} })

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj)
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en')
  const value = useMemo(() => ({
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    t: (path, fallback) => get(translations[lang], path) ?? fallback ?? path,
    tx: (path) => get(translations[lang], path),
    setLang,
  }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() { return useContext(I18nContext) }

export function useTxList(path) { const { tx } = useI18n(); return tx(path) || [] }
