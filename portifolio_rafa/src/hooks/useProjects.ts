import { useState, useEffect } from 'react';

interface Project {
  id: number;
  name: string;
  image: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectData: Project[] = [
      { id: 1, name: "Nome do projeto", image: "" },
      { id: 2, name: "Nome do projeto", image: "" },
      { id: 3, name: "Nome do projeto", image: "" },
    ];
    
    setTimeout(() => {
      setProjects(projectData);
      setLoading(false);
    }, 100);
  }, []);

  return { projects, loading };
};
