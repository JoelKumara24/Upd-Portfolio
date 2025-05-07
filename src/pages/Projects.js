import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  { title: "Netflix Keyboard Simulator", subtitle: "Mar 2022 / Java / Algo + UI" },
  { title: "Online Banking Portal", subtitle: "Oct 2023 / .NET + DB" },
  { title: "Chat Application", subtitle: "Jul 2023 / .NET Realtime Chat" },
  { title: "Edu-Tourism Platform", subtitle: "Aug 2024 / React + Spring Boot + AWS" },
  { title: "E-commerce Platform", subtitle: "March 2025 / React + Spring Boot + AWS" },
  { title: "Auth-Logger Blueprint", subtitle: "March 2025 / Spring Boot + Postgre" },
  { title: "Fitness-Tracker", subtitle: "April 2025 / Next.js + Vercel" },
  { title: "PHU-Site", subtitle: "May 2025 / React+ Node + Render" }
];

function Projects() {
  return (
    <div className="projects-layout">
      <div className="grain-overlay"></div>

      <div className="projects-left-column">
        <h1 className="name">Joel Kumara</h1>
        <p className="role">Fullstack Developer</p>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="projects-right-column">
        <div className="project-list">
          {projects.map((project, index) => (
            <Link 
              to={`/projects/${index + 1}`} 
              key={index} 
              className="project-entry-link"
            >
              <div className="project-entry">
                <div className="project-title">{project.title}</div>
                <div className="project-subtitle">{project.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
