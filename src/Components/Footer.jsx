import React from "react";
import { FaFilm } from "react-icons/fa"; 
import Classes from "../Styles/Footer.module.css"; // Import the CSS module

function Footer() {
  return (
    <footer className={Classes.footer}> {/* Use the imported class */}
      <div className="container">
        <p className={`${Classes.footerText} mb-0`}>
          <FaFilm className={Classes.footerIcon} /> &copy; 2025{" "}
          <span className="fw-bolder">Movie App</span>. All rights reserved.
        </p>
        <p className="mt-2">
          <small className={Classes.footerSmall}>
            Designed by <span className={Classes.name}>Youssef Ezzat</span>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
