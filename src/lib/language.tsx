import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  dir: "ltr" | "rtl";
  toggleLanguage: () => void;
  text: (english: string, arabic: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic: language === "ar",
      dir: language === "ar" ? "rtl" : "ltr",
      toggleLanguage: () => setLanguage((current) => (current === "ar" ? "en" : "ar")),
      text: (english, arabic) => (language === "ar" ? arabic : english),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
