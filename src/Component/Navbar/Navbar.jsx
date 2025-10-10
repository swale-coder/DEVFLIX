import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ navigate, currentPage }) {
  return (
    <nav className="navbar">
      <div className="logo">Release Guy</div>

      <ul className="nav-links">
        <li>
          <button
            disabled={currentPage === "home"}
            className={`nav-button ${currentPage === "home" ? "active" : ""}`}
            onClick={() => navigate("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === "skill"}
            className={`nav-button ${currentPage === "skill" ? "active" : ""}`}
            onClick={() => navigate("skill")}
          >
            Skill
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === "project"} // Ensure matches App.js
            className={`nav-button ${currentPage === "project" ? "active" : ""}`}
            onClick={() => navigate("project")}
          >
            Project
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === "about"}
            className={`nav-button ${currentPage === "about" ? "active" : ""}`}
            onClick={() => navigate("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === "contact"}
            className={`nav-button ${currentPage === "contact" ? "active" : ""}`}
            onClick={() => navigate("contact")}
          >
            Contact
          </button>
        </li>
      </ul>

      <div className="social-links">
        <a
          href="https://github.com/swale-coder"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/swale-siddiqui-8a387a2a5/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
