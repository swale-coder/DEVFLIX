import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ navigate, currentPage }) => {
  return (
    <footer className="devflix-footer">
      <div className="footer-content">
        <h2 className="footer-logo">Devflix</h2>

        <div className="footer-links">
          <button
            className={`footer-link-button ${currentPage === "home" ? "active" : ""}`}
            onClick={() => navigate("home")}
            disabled={currentPage === "home"}
          >
            Home
          </button>
          <button
            className={`footer-link-button ${currentPage === "about" ? "active" : ""}`}
            onClick={() => navigate("about")}
            disabled={currentPage === "about"}
          >
            About
          </button>
          <button
            className={`footer-link-button ${currentPage === "skill" ? "active" : ""}`}
            onClick={() => navigate("skill")}
            disabled={currentPage === "skill"}
          >
            Skills
          </button>
          <button
            className={`footer-link-button ${currentPage === "project" ? "active" : ""}`}
            onClick={() => navigate("project")}
            disabled={currentPage === "project"}
          >
            Projects
          </button>
          <button
            className={`footer-link-button ${currentPage === "contact" ? "active" : ""}`}
            onClick={() => navigate("contact")}
            disabled={currentPage === "contact"}
          >
            Contact
          </button>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/swale-siddiqui-8a387a2a5/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/swale-coder"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a href="mailto:swalesiddiqui@gmail.com" title="Email">
            <FaEnvelope size={20} />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Devflix by Swale Siddiqui — Crafted with ❤️ using React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
