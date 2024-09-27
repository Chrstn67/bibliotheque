import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importer l'icône burger
import "./Header.scss";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="app-header">
      <h1>Bibliothèque</h1>
      <button onClick={toggleMenu} className="menu-toggle">
        <FaBars size={24} /> {/* Icône burger */}
      </button>
      <nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink
              exact
              to="/"
              onClick={() => {
                if (isMobile) {
                  toggleMenu();
                }
                scrollToTop();
              }}
            >
              <span>Accueil</span>
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              to="/readers-commandes"
              onClick={() => {
                if (isMobile) {
                  toggleMenu();
                }
                scrollToTop();
              }}
            >
              <span>Readers</span>
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              to="/stock-management"
              onClick={() => {
                if (isMobile) {
                  toggleMenu();
                }
                scrollToTop();
              }}
            >
              <span>Stocks</span>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/presentoir-management"
              onClick={() => {
                if (isMobile) {
                  toggleMenu();
                }
                scrollToTop();
              }}
            >
              <span>Présentoirs</span>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/login"
              onClick={() => {
                if (isMobile) {
                  toggleMenu();
                }
                scrollToTop();
              }}
            >
              <span>Connexion</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {isMobile && (
        <aside className={`sidebar ${isMenuOpen ? "show" : ""}`}>
          <nav>
            <ul className="navbar-list">
              <li className="navbar-item">
                <NavLink
                  exact
                  to="/"
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <span>Accueil</span>
                </NavLink>
              </li>

              <li className="navbar-item">
                <NavLink
                  to="/readers-commandes"
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <span>Readers</span>
                </NavLink>
              </li>

              <li className="navbar-item">
                <NavLink
                  to="/stock-management"
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <span>Stocks</span>
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/presentoir-management"
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <span>Présentoirs</span>
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/login"
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <span>Connexion</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
