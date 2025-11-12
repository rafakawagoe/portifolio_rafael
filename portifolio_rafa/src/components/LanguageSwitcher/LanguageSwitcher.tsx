import "./LanguageSwitcher.css";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${i18n.language === "pt-BR" ? "active" : ""}`}
        onClick={() => changeLanguage("pt-BR")}
      >
        PT
      </button>
      <button
        className={`lang-button ${i18n.language === "en-US" ? "active" : ""}`}
        onClick={() => changeLanguage("en-US")}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
