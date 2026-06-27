import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "ar";

const dictionary = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      memberships: "Subscriptions",
      gallery: "Gallery",
      menu: "Menu",
      schedule: "Schedule",
      classes: "Classes",
      location: "Location",
      contact: "Contact",
      admin: "Admin",
      adminPreview: "Admin Preview",
      bookNow: "Book Now",
      switch: "العربية",
    },
    common: {
      openToday: "Open Today",
      hours: "8 AM - 9 PM",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      phone: "Phone",
      available: "Available",
      soldOut: "Sold Out",
      askWhatsapp: "Ask on WhatsApp",
      bookClass: "Book This Class",
      send: "Send Message",
      name: "Name",
      message: "Message",
      date: "Date",
      time: "Time",
      notes: "Notes",
      goal: "Fitness Goal",
      fullName: "Full Name",
    },
    hero: {
      eyebrow: "Women-only fitness in Jordan",
      titleA: "Train Strong.",
      titleB: "Feel Confident.",
      text: "Miss Gym Fitness is a premium women-only space for classes, strength training, coaching, coffee, and healthy snacks.",
      cta: "Book a Class",
      menu: "View Protein Bar",
      location: "Open Location",
      stats: [
        ["500+", "Happy Members"],
        ["20+", "Weekly Classes"],
        ["10+", "Expert Coaches"],
      ],
      chips: [
        "Women-only gym",
        "Private sessions",
        "Zumba & classes",
        "Coffee bar",
        "Easy booking",
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "Built for women, coached with care",
      text: "Miss Gym Fitness gives women in Jordan a safe, supportive, and elegant place to train. From group workouts to personal coaching and post-workout drinks, every detail is made for comfort, confidence, and progress.",
      values: [
        [
          "Supportive Environment",
          "A welcoming women-only space with privacy and positive energy.",
        ],
        ["Professional Training", "Coach-led sessions designed for every fitness level."],
        [
          "Goal-Based Programs",
          "Classes and plans for strength, weight loss, mobility, and wellness.",
        ],
      ],
    },
    memberships: {
      eyebrow: "Subscriptions",
      title: "Choose your Miss Gym membership",
      note: "Membership prices from the official Miss Gym subscription post.",
      cta: "Subscribe on WhatsApp",
      bestValue: "Best value",
      plans: [
        { period: "1 Month", price: "25 JOD", highlight: false },
        { period: "3 Months", price: "60 JOD", highlight: true },
        { period: "6 Months", price: "110 JOD", highlight: false },
        { period: "12 Months", price: "205 JOD", highlight: false },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Inside Miss Gym",
      cats: ["All", "Gym Place", "Equipment", "Classes", "Protein Bar"],
    },
    menu: {
      eyebrow: "Protein Bar",
      title: "Coffee, protein bars & healthy snacks",
      cats: ["All", "Drinks", "Protein", "Snacks", "Supplements"],
    },
    schedule: {
      eyebrow: "Weekly Schedule",
      title: "Coach Danya & Coach Abeer Abusamra",
      danya: "Coach Danya",
      abeer: "Coach Abeer Abusamra",
      days: {
        sat: "Sat",
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
      },
    },
    classes: {
      eyebrow: "Classes",
      title: "Book Your Private Class",
      booking: "Booking Form",
      success: "Booking received! We'll contact you shortly.",
      error: "Please fill in name and phone.",
      submit: "Submit Booking",
    },
    location: {
      eyebrow: "Visit Us",
      title: "Find Miss Gym Fitness",
      address: "Address",
      hours: "Opening Hours",
      maps: "Open in Google Maps",
      mapTitle: "Miss Gym on Google Maps",
      mapText: "Tap below to open the official location.",
      mapLink: "View on Google Maps",
    },
    offers: {
      eyebrow: "Special",
      title: "Latest Offers",
      limited: "Limited",
      valid: "Valid until:",
      ask: "Ask About This Offer",
    },
    assistant: {
      eyebrow: "Optional Future Feature",
      titleA: "Coming Soon:",
      titleB: "Miss Gym Smart Assistant",
      text: "A future assistant can answer questions about memberships, classes, booking, hours, and fitness goals in Arabic or English.",
      questions: [
        "What membership is best for me?",
        "What classes do you offer?",
        "How can I book a private session?",
        "What should I choose if my goal is weight loss?",
        "What are your opening hours?",
      ],
      input: "Ask me anything...",
    },
    contact: {
      eyebrow: "Get In Touch",
      title: "Ready to Start?",
      chat: "Chat with us",
    },
    footer: {
      text: "A women-only fitness space in Jordan. Train strong, feel confident.",
      links: "Quick Links",
      visit: "Visit Us",
      follow: "Follow",
      copyright: "Miss Gym Fitness.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن النادي",
      memberships: "الاشتراكات",
      gallery: "الصور",
      menu: "المنيو",
      schedule: "الجدول",
      classes: "الحصص",
      location: "الموقع",
      contact: "تواصل",
      admin: "الإدارة",
      adminPreview: "معاينة الإدارة",
      bookNow: "احجزي الآن",
      switch: "English",
    },
    common: {
      openToday: "مفتوح اليوم",
      hours: "8 صباحا - 9 مساء",
      whatsapp: "واتساب",
      instagram: "إنستغرام",
      phone: "الهاتف",
      available: "متوفر",
      soldOut: "غير متوفر",
      askWhatsapp: "اسألي عبر واتساب",
      bookClass: "احجزي الحصة",
      send: "إرسال الرسالة",
      name: "الاسم",
      message: "الرسالة",
      date: "التاريخ",
      time: "الوقت",
      notes: "ملاحظات",
      goal: "الهدف الرياضي",
      fullName: "الاسم الكامل",
    },
    hero: {
      eyebrow: "نادي نسائي في الأردن",
      titleA: "تمرني بقوة.",
      titleB: "واشعري بالثقة.",
      text: "Miss Gym Fitness مساحة نسائية راقية للحصص الرياضية، تمارين القوة، التدريب، القهوة، والوجبات الصحية.",
      cta: "احجزي حصة",
      menu: "منيو البروتين بار",
      location: "افتحي الموقع",
      stats: [
        ["500+", "مشتركة سعيدة"],
        ["20+", "حصة أسبوعية"],
        ["10+", "مدربات محترفات"],
      ],
      chips: ["نادي نسائي", "جلسات خاصة", "زومبا وحصص", "ركن القهوة", "حجز سهل"],
    },
    about: {
      eyebrow: "عن النادي",
      title: "مساحة نسائية بتدريب مريح وراقي",
      text: "يوفر Miss Gym Fitness للنساء في الأردن مكانا آمنا وداعما وأنيقا للتمرين. من الحصص الجماعية إلى التدريب الشخصي ومشروبات ما بعد التمرين، كل التفاصيل مصممة للراحة والثقة والتقدم.",
      values: [
        ["بيئة داعمة", "مساحة نسائية بخصوصية وطاقة إيجابية."],
        ["تدريب محترف", "حصص بإشراف مدربات تناسب كل المستويات."],
        ["برامج حسب الهدف", "حصص وخطط للقوة، خسارة الوزن، المرونة، والصحة."],
      ],
    },
    memberships: {
      eyebrow: "الاشتراكات",
      title: "اختاري اشتراكك في Miss Gym",
      note: "أسعار الاشتراكات حسب منشور Miss Gym الرسمي.",
      cta: "اشتركي عبر واتساب",
      bestValue: "الأفضل قيمة",
      plans: [
        { period: "شهر", price: "25 دينار", highlight: false },
        { period: "3 أشهر", price: "60 دينار", highlight: true },
        { period: "6 أشهر", price: "110 دينار", highlight: false },
        { period: "12 شهر", price: "205 دينار", highlight: false },
      ],
    },
    gallery: {
      eyebrow: "الصور",
      title: "داخل Miss Gym",
      cats: ["الكل", "المكان", "الأجهزة", "الحصص", "البروتين بار"],
    },
    menu: {
      eyebrow: "البروتين بار",
      title: "قهوة، بروتين بار، وسناكات صحية",
      cats: ["الكل", "مشروبات", "بروتين", "سناكات", "مكملات"],
    },
    schedule: {
      eyebrow: "الجدول الأسبوعي",
      title: "جدول كوتش دانيا وكوتش عبير أبو سمرة",
      danya: "كوتش دانيا",
      abeer: "كوتش عبير أبو سمرة",
      days: {
        sat: "السبت",
        sun: "الأحد",
        mon: "الإثنين",
        tue: "الثلاثاء",
        wed: "الأربعاء",
        thu: "الخميس",
      },
    },
    classes: {
      eyebrow: "الحصص",
      title: "احجزي حصتك الخاصة",
      booking: "نموذج الحجز",
      success: "وصلنا طلب الحجز! سنتواصل معك قريبا.",
      error: "يرجى إدخال الاسم ورقم الهاتف.",
      submit: "إرسال الحجز",
    },
    location: {
      eyebrow: "زورينا",
      title: "موقع Miss Gym Fitness",
      address: "العنوان",
      hours: "ساعات العمل",
      maps: "افتحي خرائط Google",
      mapTitle: "Miss Gym على خرائط Google",
      mapText: "اضغطي لفتح الموقع الرسمي.",
      mapLink: "عرض على خرائط Google",
    },
    offers: {
      eyebrow: "عروض",
      title: "أحدث العروض",
      limited: "لفترة محدودة",
      valid: "صالح حتى:",
      ask: "اسألي عن العرض",
    },
    assistant: {
      eyebrow: "ميزة مستقبلية اختيارية",
      titleA: "قريبا:",
      titleB: "مساعد Miss Gym الذكي",
      text: "يمكن للمساعد مستقبلا الإجابة عن الاشتراكات، الحصص، الحجز، ساعات العمل، والأهداف الرياضية بالعربية أو الإنجليزية.",
      questions: [
        "ما الاشتراك الأنسب لي؟",
        "ما الحصص المتوفرة؟",
        "كيف أحجز جلسة خاصة؟",
        "ماذا أختار إذا كان هدفي خسارة الوزن؟",
        "ما ساعات العمل؟",
      ],
      input: "اسألي أي شيء...",
    },
    contact: {
      eyebrow: "تواصلي معنا",
      title: "جاهزة تبدئي؟",
      chat: "راسلينا",
    },
    footer: {
      text: "نادي نسائي في الأردن. تمرني بقوة واشعري بالثقة.",
      links: "روابط سريعة",
      visit: "زورينا",
      follow: "تابعينا",
      copyright: "Miss Gym Fitness.",
    },
  },
} as const;

type I18nContextValue = {
  lang: Language;
  dir: "ltr" | "rtl";
  t: (typeof dictionary)["en"];
  toggleLanguage: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");
  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: dictionary[lang],
      toggleLanguage: () => setLang((current) => (current === "ar" ? "en" : "ar")),
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
