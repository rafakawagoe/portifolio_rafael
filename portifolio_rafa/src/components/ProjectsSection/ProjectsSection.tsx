import "./ProjectsSection.css";
import { useProjects } from "../../hooks/useProjects";
import { useTranslation } from "react-i18next";

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
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image"></div>
            <h3 className="project-name">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
