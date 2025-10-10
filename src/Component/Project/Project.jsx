import React, { useState } from "react";
import {
  FaBriefcase,
  FaCogs,
  FaComments,
  FaChartLine,
  FaIndustry,
  FaCodeBranch,
  FaPlus,
  FaTrash,
  FaEdit,
  FaTimes,
  FaStar,
} from "react-icons/fa";
import "./Project.css";

const initialProjects = [
  {
    id: 1,
    title: "Devflix Portfolio",
    description: "Netflix-style React portfolio showcasing my projects.",
    link: "https://github.com/swale-coder/devflix",
    hardwork: 5,
  },
  {
    id: 2,
    title: "FINC",
    description: "Docker & Podman containerized apps with CI/CD pipelines.",
    link: "https://github.com/swale-coder/Finc24",
    hardwork: 4,
  },
  {
    id: 3,
    title: "Oil Refinefield",
    description: "Managed multiple services using Kubernetes clusters.",
    link: "https://github.com/swale-coder/oil_refinefield",
    hardwork: 5,
  },
  {
    id: 4,
    title: "GenAI Chatbot",
    description: "AWS & Azure cloud deployments automated with scripts.",
    link: "https://github.com/swale-coder/GenAI-Chatbot",
    hardwork: 4,
  },
  {
    id: 5,
    title: "Catalyst Digital",
    description: "Implemented dashboards using Prometheus & Grafana.",
    link: "https://github.com/swale-coder/Catalystdigital",
    hardwork: 3,
  },
  {
    id: 6,
    title: "CI/CD Pipelines",
    description:
      "Automated build & deployment using Jenkins & GitHub Actions.",
    link: "#",
    hardwork: 4,
  },
];

const getIcon = (title) => {
  const key = title.toLowerCase();
  if (key.includes("portfolio")) return <FaBriefcase />;
  if (key.includes("finc")) return <FaChartLine />;
  if (key.includes("oil")) return <FaIndustry />;
  if (key.includes("chatbot")) return <FaComments />;
  if (key.includes("digital")) return <FaChartLine />;
  if (key.includes("pipeline")) return <FaCogs />;
  return <FaCodeBranch />;
};

const Project = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [manageMode, setManageMode] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    link: "",
    hardwork: 1,
  });

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "A newly added project.",
      link: "#",
      hardwork: 3,
    };
    setProjects([...projects, newProject]);
  };

  const handleEdit = (project) => {
    setEditingProject(project.id);
    setModalData({
      title: project.title,
      description: project.description,
      link: project.link,
      hardwork: project.hardwork,
    });
  };

  const handleSave = () => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === editingProject ? { ...proj, ...modalData } : proj
      )
    );
    setEditingProject(null);
  };

  const renderHardwork = (level) => (
    <div className="hardwork-rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < level ? "star filled" : "star"} />
      ))}
    </div>
  );

  return (
    <div className="projects-container">
      <h2 className="projects-title">Behind the Projects</h2>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="project-icon">{getIcon(proj.title)}</div>
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>

            <div className="rating-section">
              <p className="hardwork-label">Brain Stroming:</p>
              {renderHardwork(proj.hardwork)}
            </div>

            {manageMode ? (
              <div className="manage-controls">
                <button className="edit-btn" onClick={() => handleEdit(proj)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(proj.id)}>
                  <FaTrash />
                </button>
              </div>
            ) : (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="view-project-link"
              >
                View
              </a>
            )}
          </div>
        ))}

        <div
          className={`add-project-card ${manageMode ? "active" : ""}`}
          onClick={manageMode ? handleAddProject : null}
        >
          <FaPlus className="add-icon" />
          <p className="add-text">Add Project</p>
        </div>
      </div>

      <button className="manage-btn" onClick={() => setManageMode(!manageMode)}>
        {manageMode ? "Done Managing" : "Manage Projects"}
      </button>

      {editingProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Project</h3>
            <input
              type="text"
              placeholder="Project Title"
              value={modalData.title}
              onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
            />
            <textarea
              placeholder="Project Description"
              value={modalData.description}
              onChange={(e) =>
                setModalData({ ...modalData, description: e.target.value })
              }
            ></textarea>
            <input
              type="text"
              placeholder="Project Link"
              value={modalData.link}
              onChange={(e) => setModalData({ ...modalData, link: e.target.value })}
            />
            <label>Hardwork (1–5):</label>
            <input
              type="number"
              min="1"
              max="5"
              value={modalData.hardwork}
              onChange={(e) =>
                setModalData({ ...modalData, hardwork: Number(e.target.value) })
              }
            />
            <div className="modal-actions">
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
              <button onClick={() => setEditingProject(null)} className="close-btn">
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
