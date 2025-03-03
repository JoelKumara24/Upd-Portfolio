import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css"; // Import the CSS file for styling

function Projects() {
  // Sample list of projects
  const projects = [
    { id: 1, title: "Netflix Keyboard Simulator", description: "A Java-based keyboard simulator for Netflix navigation." },
    { id: 2, title: "Edu-Tourism Platform", description: "A platform allowing users to book and customize itineraries." },
    { id: 3, title: "Online Banking Portal", description: "A secure online banking system built with .NET." },
    { id: 4, title: "Chat Application", description: "A real-time chat app using .NET and distributed computing." },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`} className="project-link">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Back Button to Home */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default Projects;
