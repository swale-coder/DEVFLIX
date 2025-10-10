import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  const softSkills = [
    "Team Collaboration 🤝",
    "Problem Solving 🧠",
    "Communication 💬",
    "Adaptability 🔄",
    "Time Management ⏰",
  ];

  const leadership = [
    "Leading small DevOps projects 🧩",
    "Mentoring peers on automation scripts 🧑‍💻",
    "Encouraging continuous learning 📚",
    "Organizing tech meetups 💡",
  ];

  const hobbies = [
    { name: "Chess ♟️", desc: "Improves strategic thinking and patience." },
    { name: "Hiking 🏞️", desc: "Keeps me active and focused on challenges." },
    { name: "Tech Gadgets ⚙️", desc: "Love exploring new tools and technologies." },
    { name: "Music 🎧", desc: "Helps me relax and stay creative." },
  ];

  return (
    <div className="aboutme-container">
      <div className="aboutme-hero">
        <h1 className="aboutme-title">Meet Swale Siddiqui</h1>
        <p className="aboutme-subtitle">
          Passionate <span className="highlight">DevOps Engineer</span> focused on automation, scalability, and innovation.
        </p>
      </div>

      {/* About Me Section */}
      <section className="aboutme-section">
        <h2 className="section-title">🎬 About Me</h2>
        <p className="section-desc">
          I am a motivated and enthusiastic <b>DevOps fresher engineer</b> who loves optimizing deployment pipelines,
          managing scalable cloud systems, and automating workflows to improve developer productivity.  
          My goal is to build smart, reliable, and fast infrastructure for modern applications.
        </p>
      </section>

      {/* Soft Skills Section */}
      <section className="aboutme-section">
        <h2 className="section-title">🌟 Soft Skills</h2>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="aboutme-section">
        <h2 className="section-title">🚀 Leadership & Collaboration</h2>
        <div className="skills-grid">
          {leadership.map((lead, index) => (
            <div key={index} className="skill-card">
              <p>{lead}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="aboutme-section">
        <h2 className="section-title">🎯 Hobbies & Interests</h2>
        <div className="hobby-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <h3>{hobby.name}</h3>
              <p>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
