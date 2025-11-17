import { memo } from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = memo(function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">{t("footer.title")}</h3>
          <p className="footer-text">{t("footer.madeWith")}</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">{t("footer.contact")}</h4>
          <p className="footer-text">
            {t("footer.email")}
            <br />
            {t("footer.phone")}
          </p>
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/rafaelkawagoe"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {t("footer.linkedin")}
            </a>
            <a
              href="https://github.com/rafakawagoe"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {t("footer.github")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
