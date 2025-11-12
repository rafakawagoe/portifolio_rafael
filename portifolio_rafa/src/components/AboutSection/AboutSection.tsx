import "./AboutSection.css";
import { useNavigateToAbout } from "../../hooks/useNavigateToAbout";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const navigateToAbout = useNavigateToAbout();
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-image">
          <div className="about-placeholder"></div>
        </div>
        <div className="about-text">
          <h2 className="about-title">{t("about.title")}</h2>
          <p className="about-description">{t("about.description")}</p>
          <button className="about-button" onClick={navigateToAbout}>
            {t("about.button")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
