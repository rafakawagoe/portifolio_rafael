import "./ProjectsSection.css";
import { useProjects } from "../../hooks/useProjects";
import { useTranslation } from "react-i18next";
import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel";

function ProjectsSection() {
  const { projects, loading } = useProjects();
  const { t } = useTranslation();

  if (loading) {
    return (
      <section className="projects-section">
        <h2 className="section-title">{t("projects.title")}</h2>
        <div className="projects-grid">
          <p>{t("projects.loading")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-section">
      <h2 className="section-title">{t("projects.title")}</h2>
      <ExperienceCarousel
        experiences={projects.map((project) => ({
          title: project.name,
          desc: project.description || "",
          image: project.image,
        }))}
      />
    </section>
  );
}

export default ProjectsSection;
