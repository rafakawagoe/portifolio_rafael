import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  name: string;
  image: string;
  url?: string;
  description?: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const projectData: Project[] = [
      { 
        id: 1, 
        name: "Portfolio Rafael", 
        image: "/src/assets/react.svg",
        url: "https://github.com/rafakawagoe/portifolio_rafael",
        description: t('projects.portfolioDesc')
      },
    ];
    
    setTimeout(() => {
      setProjects(projectData);
      setLoading(false);
    }, 100);
  }, [t]);

  return { projects, loading };
};
