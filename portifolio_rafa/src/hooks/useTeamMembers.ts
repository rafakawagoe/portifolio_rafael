import { useState, useEffect } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const useTeamMembers = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const teamData: TeamMember[] = [
      {
        id: 1,
        name: "Rafael Kawagoe",
        role: "Full Stack Developer",
        bio: "Especialista em desenvolvimento web com foco em React, TypeScript e Node.js.",
        image: ""
      },
      {
        id: 2,
        name: "Membro da Equipe",
        role: "UI/UX Designer",
        bio: "Criando experiências visuais impactantes e interfaces intuitivas.",
        image: ""
      },
      {
        id: 3,
        name: "Membro da Equipe",
        role: "Backend Developer",
        bio: "Especialista em arquitetura de sistemas e desenvolvimento de APIs escaláveis.",
        image: ""
      }
    ];
    
    setTimeout(() => {
      setTeam(teamData);
      setLoading(false);
    }, 100);
  }, []);

  return { team, loading };
};
