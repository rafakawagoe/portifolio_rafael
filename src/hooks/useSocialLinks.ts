import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";

interface SocialLink {
  id: number;
  icon: IconType;
  name: string;
  url: string;
  color: string;
}

export const useSocialLinks = (): SocialLink[] => {
  return [
    {
      id: 1,
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`,
      color: "#25D366",
    },
    {
      id: 2,
      icon: FaLinkedin,
      name: "LinkedIn",
      url: import.meta.env.VITE_LINKEDIN_URL,
      color: "#0A66C2",
    },
    {
      id: 3,
      icon: MdEmail,
      name: "Gmail",
      url: `mailto:${import.meta.env.VITE_EMAIL}`,
      color: "#EA4335",
    },
    {
      id: 4,
      icon: FaGithub,
      name: "GitHub",
      url: import.meta.env.VITE_GITHUB_URL,
      color: "#181717",
    },
  ];
};
