import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Projects.css"; // Import the updated CSS

// Import images from the assets folder
import netflixKeyboardImage from "../assets/netflixSim.png";
import eduTourismImage from "../assets/eduTourism.png";
import onlineBankingImage from "../assets/onlineBanking.png";
import chatApplicationImage from "../assets/chatApp.gif";

function ProjectDetail() {
  const { id } = useParams(); // Get the project ID from the URL

  // Sample project data (including images and GitHub links)
  const projectData = {
    1: { 
      title: "Netflix Keyboard Simulator", 
      description: "A Java-based keyboard simulator implementing graph operations, stack management, and linked list structures for Netflix navigation.", 
      image: netflixKeyboardImage, 
      github: "https://github.com/JoelKumara24/Netflix-Keyboard-Simulator"
    },
    2: { 
      title: "Edu-Tourism Platform", 
      description: "An itinerary-based tourism website where users can search, book, and manage travel plans.", 
      image: eduTourismImage, 
      github: "https://github.com/JoelKumara24/EduTourism"
    },
    3: { 
      title: "Online Banking Portal", 
      description: "A full-featured online banking system developed using .NET, supporting secure transactions.", 
      image: onlineBankingImage, 
      github: "https://github.com/JoelKumara24/Online-Banking-Portal-using-.NET"
    },
    4: { 
      title: "Chat Application", 
      description: "A real-time chat application leveraging .NET and distributed computing principles.", 
      image: chatApplicationImage, 
      github: "https://github.com/JoelKumara24/Chat-App-made-by-using-.NET-framework"
    },
  };

  const project = projectData[id];

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div className="project-detail-container">
      {/* Sticky Header with Back Button */}
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <Link to="/projects" className="back-button">Back to Projects</Link>
      </div>

      {/* Scrollable Content */}
      <div className="project-content">
        {/* Project Image */}
        <img src={project.image} alt={project.title} className="project-image" />

        <p className="project-description">{project.description}</p>

        {/* GitHub Link */}
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;
