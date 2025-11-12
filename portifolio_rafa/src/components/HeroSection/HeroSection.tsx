import "./HeroSection.css";
import heroImage from "../../assets/traveldroid.jpg";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div
        className="hero-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="hero-title">{t("hero.title")}</h1>
      </div>
    </section>
  );
}

export default HeroSection;
