import { useState, useEffect } from 'react';
import unespLogo from '../assets/unesp-logo.png';

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
        name: "Universidade Estadual Paulista, Bauru - SP",
        role: "Bachelor's Degree in Computer Science",
        bio: "Janeiro 2017 - Dezembro 2022",
        image: unespLogo
      }
    ];
    
    setTimeout(() => {
      setTeam(teamData);
      setLoading(false);
    }, 100);
  }, []);

  return { team, loading };
};
