import React from "react";
import ProjectCard from "./Projectcard";
import "./Projectcard.css";

const Projectcard = ({ projects = [] }) => { // <-- Default to an empty array
  return (
    <section className="project-section">
      <div className="red-curved-container" />
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            img={proj.img}
            description={proj.description}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default Projectcard;
