import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Info.css"; // Import styles

function Info() {
  return (
    <div className="info-container">
      {/* Sticky Header with Title & Back Button */}
      <div className="info-header">
        <h1 className="info-title">About Me</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      {/* Scrollable Content */}
      <div className="info-content">
        {/* Introduction */}
        <section className="about-section">
          <h2>👋 Hi, I'm [Your Name]</h2>
          <p>
            I'm a passionate **Software Engineer** specializing in **React, .NET, and Game Development**. 
            I enjoy building **modern, scalable applications** and continuously exploring new technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="about-section">
          <h2>💻 Skills & Technologies</h2>
          <div className="skills-list">
            <span>React</span>
            <span>.NET</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>C/C#</span>
            <span>MySQL</span>
          </div>
        </section>

        {/* Education Section */}
        <section className="about-section">
          <h2>🎓 Education</h2>
          <p>Bachelor’s in Software Engineering – Curtin University</p>
        </section>

        {/* Hobbies Section */}
        <section className="about-section">
          <h2>🏉 Beyond Coding</h2>
          <p>Outside of software development, I enjoy **playing rugby**, **fitness training**, and **game development**.</p>
          <p>Notable Rugby Events: APIIT & SLIIT Tournaments</p>
        </section>
      </div>
    </div>
  );
}

export default Info;
