import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo-link">
          <h1 className="navbar-logo">Rafael Kawagoe</h1>
        </Link>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <Link to="/about">{t("navbar.about")}</Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
