import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={lang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </Button>
      <Button
        variant={lang === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >
        ES
      </Button>
    </div>
  );
}
