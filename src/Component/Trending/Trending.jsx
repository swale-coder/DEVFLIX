import React, { useState } from "react";
import "./Trending.css";
import finclogo from "../../Assets/finclogo.png";
import Catalystdigital from "../../Assets/Catalystdigital.png";
import oilrefine from "../../Assets/oilrefine.png";

const projects = [
  {
    id: 1,
    title: "FINC",
    tech: "HTML, CSS, JavaScript, C#, GitHub, Azure",
    image: finclogo,
    repo: "https://github.com/swale-coder/Finc24",
  },
  {
    id: 2,
    title: "Catalystdigital",
    tech: "HTML, CSS, JavaScript, GitHub, Azure",
    image: Catalystdigital,
    repo: "https://github.com/swale-coder/Catalystdigital",
  },
  {
    id: 3,
    title: "Oil_refinefield",
    tech: "HTML, CSS, JavaScript, GitHub, Azure",
    image: oilrefine,
    repo: "https://github.com/swale-coder/oil_refinefield",
  },
  {
    id: 4,
    title: "Portfolio",
    tech: "React, JavaScript, GitHub, Azure",
    image: "/images/devops4.jpg",
    repo: "",
  },
  {
    id: 5,
    title: "Python AI Chatbot",
    tech: "Python, GenAI, GitHub, Azure",
    image: "/images/devops5.jpg",
    repo: "https://github.com/swale-coder/GenAI-Chatbot",
  },
  {
    id: 6,
    title: "Music Player",
    tech: "HTML, CSS, JavaScript, GitHub, Azure",
    image: "/images/devops6.jpg",
    repo: "https://github.com/swale-coder/MusicPlayerapp",
  },
];

const itemsToShow = 3;

const reasons = [
  {
    title: "Infrastructure as Code",
    description:
      "Automate infrastructure provisioning using Terraform, Ansible, and Azure ARM templates for scalable environments.",
    icon: "💻",
  },
  {
    title: "CI/CD Expertise",
    description:
      "Build seamless deployment pipelines using GitHub Actions, Jenkins, and Azure DevOps for faster delivery.",
    icon: "🚀",
  },
  {
    title: "Cloud & Containerization",
    description:
      "Experienced in AWS, Azure, Docker, and Kubernetes to build, deploy, and scale cloud-native applications.",
    icon: "☁️",
  },
  {
    title: "Monitoring & Security",
    description:
      "Implement real-time observability, alerts, and DevSecOps best practices with Grafana, Prometheus, and SonarQube.",
    icon: "🛡️",
  },
];

const faqs = [
  {
    question: "Who am I?",
    answer:
      "I’m Swale Siddiqui, a passionate DevOps Engineer with hands-on experience in automating deployments, managing CI/CD pipelines, and working with cloud tools like Azure and Docker.",
  },
  {
    question: "What skills do I bring?",
    answer:
      "I have a strong foundation in Git, CI/CD pipelines, Docker, Kubernetes, Terraform, and Azure DevOps. I love creating automation that makes development faster and more reliable.",
  },
  {
    question: "Do I have real project experience?",
    answer:
      "Yes! I’ve built multiple real-world projects, including CI/CD automation, cloud deployment pipelines, and container-based web apps using Azure and GitHub Actions.",
  },
  {
    question: "What tools do I use daily?",
    answer:
      "My toolkit includes Git, Docker, Kubernetes, Jenkins, GitHub Actions, Azure, Terraform, and Ansible. I also use monitoring tools like Prometheus and Grafana.",
  },
  {
    question: "Why should you hire me?",
    answer:
      "Because I combine a developer’s mindset with automation expertise — I continuously learn, adapt, and build scalable, efficient infrastructure solutions.",
  },
  {
    question: "What am I learning next?",
    answer:
      "I’m exploring advanced cloud-native tools, AI-driven DevOps, and security automation to stay ahead in the DevOps ecosystem.",
  },
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const next = () =>
    setCurrentIndex((prev) =>
      Math.min(prev + 1, projects.length - itemsToShow)
    );

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="trending-container">
      {/* ---- TRENDING PROJECTS ---- */}
      <h2 className="trending-title">Trending Now</h2>
      <div className="carousel-wrapper">
        <button
          className="carousel-btn prev"
          onClick={prev}
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>

        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${
                (100 / itemsToShow) * currentIndex
              }%)`,
              gridTemplateColumns: `repeat(${projects.length}, calc(100% / ${itemsToShow}))`,
            }}
          >
            {projects.map((project, index) => (
              <div className="trending-card" key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="rank-badge">{index + 1}</div>
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.tech}</p>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-btn"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn next"
          onClick={next}
          disabled={currentIndex >= projects.length - itemsToShow}
        >
          &#10095;
        </button>
      </div>

      {/* ---- HIRE SECTION ---- */}
      <div className="hire-section">
        <h2 className="hire-title">We should hire you</h2>
        <div className="hire-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="hire-card">
              <div className="text-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
              <div className="icon">{reason.icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- FAQ SECTION ---- */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "×" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
