import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.register": "Register",
  "nav.hospitals": "Hospitals",
  "nav.campaigns": "Awareness",
  "nav.search": "Find Camps",
  "cta.becomeDonor": "Become a Donor",
  "hero.title": "A smarter way to sync donors and hospitals",
  "hero.subtitle":
    "BloodSync unites donors, hospitals, and communities with real-time matching, secure profiles, and predictive alerts.",
  "hero.ctaPrimary": "Register Now",
  "hero.ctaSecondary": "For Hospitals",
  "section.features": "Why BloodSync",
  "feature.security": "Secure profiles with JWT and RBAC",
  "feature.matching": "AI-powered donor matching",
  "feature.realtime": "Real-time requests and alerts",
  "feature.rewards": "Rewards and loyalty",
  "feature.inventory": "Hospital inventory dashboards",
  "feature.integrations": "Twilio, SendGrid, Stripe, FHIR",
  "section.awareness": "Awareness & Education",
  "awareness.copy":
    "Blogs, FAQs, and culturally sensitive videos to dispel myths and encourage safe donation.",
  "section.search": "Find nearby donation camps",
  "search.copy": "Discover upcoming drives with transport info and directions.",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.register": "Registro",
  "nav.hospitals": "Hospitales",
  "nav.campaigns": "Conciencia",
  "nav.search": "Buscar Campañas",
  "cta.becomeDonor": "Hazte Donante",
  "hero.title": "Una forma más inteligente de conectar donantes y hospitales",
  "hero.subtitle":
    "BloodSync une a donantes, hospitales y comunidades con coincidencia en tiempo real, perfiles seguros y alertas predictivas.",
  "hero.ctaPrimary": "Regístrate",
  "hero.ctaSecondary": "Para Hospitales",
  "section.features": "Por qué BloodSync",
  "feature.security": "Perfiles seguros con JWT y RBAC",
  "feature.matching": "Coincidencia con IA",
  "feature.realtime": "Solicitudes y alertas en tiempo real",
  "feature.rewards": "Recompensas y lealtad",
  "feature.inventory": "Paneles de inventario",
  "feature.integrations": "Twilio, SendGrid, Stripe, FHIR",
  "section.awareness": "Concientización y educación",
  "awareness.copy":
    "Blogs, preguntas frecuentes y videos culturalmente sensibles para desmentir mitos y fomentar donaciones seguras.",
  "section.search": "Encuentra campañas cercanas",
  "search.copy": "Descubre próximas jornadas con transporte e indicaciones.",
};

const I18nCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dict = useMemo(() => (lang === "en" ? en : es), [lang]);
  const t = (key: string) => dict[key] ?? key;
  return (
    <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>
  );
}

export function useI18n() {
  return useContext(I18nCtx);
}
