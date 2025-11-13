import "./AboutSection.css";
import { useNavigateToAbout } from "../../hooks/useNavigateToAbout";
import { useTranslation } from "react-i18next";
import perfilImage from "../../assets/perfil-edited.png";
import { trackButtonClick } from "../../utils/analytics";

function AboutSection() {
  const navigateToAbout = useNavigateToAbout();
  const { t } = useTranslation();

  const handleLearnMoreClick = () => {
    trackButtonClick("learn_more", "about_section");
    navigateToAbout();
  };

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={perfilImage} alt="Rafael Kawagoe" className="about-photo" />
        </div>
        <div className="about-text">
          <h2 className="about-title">{t("about.title")}</h2>
          <p className="about-description">{t("about.description")}</p>
          <button className="about-button" onClick={handleLearnMoreClick}>
            {t("about.button")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
