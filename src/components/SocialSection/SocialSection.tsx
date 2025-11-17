import { memo } from "react";
import "./SocialSection.css";
import { useTranslation } from "react-i18next";
import { useSocialLinks } from "../../hooks/useSocialLinks";
import { trackSocialClick } from "../../utils/analytics";

const SocialSection = memo(function SocialSection() {
  const { t } = useTranslation();
  const socialLinks = useSocialLinks();

  const handleSocialClick = (platform: string, url: string) => {
    trackSocialClick(platform, url);
  };

  return (
    <section className="social-section">
      <h2 className="section-title">{t("social.title")}</h2>
      <div className="social-grid">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
              style={{ "--social-color": social.color } as React.CSSProperties}
              aria-label={`${t("social.contactVia")} ${social.name}`}
              onClick={() => handleSocialClick(social.name, social.url)}
            >
              <div className="social-icon" aria-hidden="true">
                <IconComponent />
              </div>
              <span className="social-name">{social.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
});

export default SocialSection;
