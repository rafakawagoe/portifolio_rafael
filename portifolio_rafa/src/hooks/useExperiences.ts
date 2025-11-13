import { useTranslation } from 'react-i18next';
import mvLogo from '../assets/MV-logo.png';
import facilyLogo from '../assets/facily-logo.png';
import formediciLogo from '../assets/formedici-logo.jpg';
import moovefyLogo from '../assets/moovefy.webp';

interface Experience {
  title: string;
  desc: string;
  image?: string;
}

export const useExperiences = (): Experience[] => {
  const { t } = useTranslation();

  return [
    {
      title: t("aboutPage.valueInnovation"),
      desc: t("aboutPage.valueInnovationDesc"),
      image: mvLogo,
    },
    {
      title: t("aboutPage.valueQuality"),
      desc: t("aboutPage.valueQualityDesc"),
      image: facilyLogo,
    },
    {
      title: t("aboutPage.valueCommitment"),
      desc: t("aboutPage.valueCommitmentDesc"),
      image: moovefyLogo,
    },
    {
      title: t("aboutPage.valueFormedici"),
      desc: t("aboutPage.valueFomrediciDesc"),
      image: formediciLogo,
    },
  ];
};
