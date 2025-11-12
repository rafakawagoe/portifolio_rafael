import "./SocialSection.css";
import { useTranslation } from "react-i18next";

function SocialSection() {
  const { t } = useTranslation();

  return (
    <section className="social-section">
      <h2 className="section-title">{t("social.title")}</h2>
      <div className="social-grid">
        <div className="social-item">
          <div className="social-placeholder"></div>
        </div>
        <div className="social-item">
          <div className="social-placeholder"></div>
        </div>
        <div className="social-item">
          <div className="social-placeholder"></div>
        </div>
        <div className="social-item">
          <div className="social-placeholder"></div>
        </div>
      </div>
      <button className="social-button">{t("social.button")}</button>
    </section>
  );
}

export default SocialSection;
