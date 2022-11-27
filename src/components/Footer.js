import React from "react";
import "./Footer.css";
function Footer({ darkModeClass, textContent = "NML ℗™ 2022" }) {
  return (
    <footer data-testid="firstEl" className={darkModeClass}>
      {textContent}
    </footer>
  );
}

export default Footer;
