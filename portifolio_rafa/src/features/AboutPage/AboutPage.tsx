import "./AboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ExperienceCarousel from "../../components/ExperienceCarousel/ExperienceCarousel";
import SocialSection from "../../components/SocialSection/SocialSection";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import SEO from "../../components/SEO/SEO";
import { useTeamMembers, useExperiences } from "../../hooks";
import { useTranslation } from "react-i18next";
import stacksImage from "../../assets/stacks-image.png";

function AboutPage() {
  const { team, loading } = useTeamMembers();
  const { t } = useTranslation();
  const experiences = useExperiences();

  return (
    <div className="about-page">
      <SEO
        title="About Rafael Kawagoe - Professional Experience & Education"
        description="Software Engineer with experience at MV, Facily, Moovefy and Formedici. UNESP Computer Science graduate specializing in mobile and web development."
      />
      <Navbar />
      <ErrorBoundary>
        <section className="page-header">
          <div className="page-header-content">
            <h1 className="page-title">{t("aboutPage.pageTitle")}</h1>
            <p className="page-subtitle">{t("aboutPage.pageSubtitle")}</p>
          </div>
        </section>
      </ErrorBoundary>

      <ErrorBoundary>
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="mission-title">{t("aboutPage.missionTitle")}</h2>
              <p className="mission-description">
                {t("aboutPage.missionDescription1")}
              </p>
              <p className="mission-description">
                {t("aboutPage.missionDescription2")}
              </p>
            </div>
            <div className="mission-image">
              <img
                src={stacksImage}
                alt="Technology Stacks"
                className="mission-photo"
              />
            </div>
          </div>
        </section>
      </ErrorBoundary>

      <ErrorBoundary>
        <section className="values-section">
          <h2 className="section-heading">{t("aboutPage.valuesTitle")}</h2>
          <ExperienceCarousel experiences={experiences} />
        </section>
      </ErrorBoundary>

      <ErrorBoundary>
        <section className="team-section">
          <h2 className="section-heading">{t("aboutPage.teamTitle")}</h2>
          {loading ? (
            <p>{t("aboutPage.teamLoading")}</p>
          ) : (
            <ExperienceCarousel
              experiences={team.map((member) => ({
                title: member.name,
                desc: `${member.role}. ${member.bio}`,
                image: member.image,
              }))}
            />
          )}
        </section>
      </ErrorBoundary>

      <ErrorBoundary>
        <SocialSection />
      </ErrorBoundary>

      <Footer />
    </div>
  );
}

export default AboutPage;
