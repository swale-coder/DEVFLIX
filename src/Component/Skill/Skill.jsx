import React, { useRef } from 'react';
import './Skill.css';

const skills = [
  { id: 1, name: 'Containerization', description: 'Expertise in Docker, Podman', icon: '📦' },
  { id: 2, name: 'Orchestration', description: 'Kubernetes, Docker Swarm', icon: '🔗' },
  { id: 3, name: 'CI/CD Pipelines', description: 'Jenkins, GitHub Actions', icon: '🔄' },
  { id: 4, name: 'Cloud Platforms', description: 'AWS, Azure, GCP', icon: '☁️' },
  { id: 5, name: 'Monitoring', description: 'Prometheus, Grafana', icon: '📈' },
  { id: 6, name: 'Scripting', description: 'Bash, Python', icon: '💻' },
  { id: 7, name: 'Infrastructure as Code', description: 'Terraform, Ansible', icon: '🧱' },
  { id: 8, name: 'Version Control', description: 'Git, GitHub', icon: '🧭' },
];

const Skill = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="skill-container">
      <h2 className="skill-title">My DevOps Skills</h2>
      <div className="skill-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>❮</button>
        <div className="skill" ref={scrollRef}>
          {skills.map(skill => (
            <div key={skill.id} className="skill-card">
              <div className="icon-wrapper">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>❯</button>
      </div>
    </div>
  );
};

export default Skill;
