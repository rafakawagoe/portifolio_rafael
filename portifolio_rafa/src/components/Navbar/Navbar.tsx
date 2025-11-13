import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { trackNavigation } from "../../utils/analytics";

function Navbar() {
  const { t } = useTranslation();

  const handleNavigation = (destination: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    trackNavigation(destination);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link
          to="/"
          className="navbar-logo-link"
          onClick={() => handleNavigation("home")}
        >
          <h1 className="navbar-logo">Rafael Kawagoe</h1>
        </Link>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <Link to="/about" onClick={() => handleNavigation("about")}>
                {t("navbar.about")}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
