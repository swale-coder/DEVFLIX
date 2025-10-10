import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="floating-icons">
        <span className="icon docker">🐳</span>
        <span className="icon aws">☁️</span>
        <span className="icon jenkins">⚙️</span>
        <span className="icon github">🐙</span>
        <span className="icon kubernetes">🔗</span>
      </div>

      <div className="contact-overlay"></div>

      <div className="contact-content">
        <h2 className="contact-title">Let’s Build the Future of DevOps Together</h2>
        <p className="contact-subtitle">
          I’m <span className="highlight">Swale Siddiqui</span> — a passionate Junior DevOps Engineer
          eager to automate, scale, and innovate with your team.
        </p>

        {submitted ? (
          <div className="contact-feedback">
            <h3>🎬 Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I’ll get back to you soon!</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            />
            <button type="submit" className="contact-btn">Hire Me 🚀</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
