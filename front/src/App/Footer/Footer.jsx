import React from "react";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Bibliothèque. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
