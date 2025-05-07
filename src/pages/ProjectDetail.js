import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetail.css";

import netflixKeyboardImage from "../assets/netflixSim.png";
import eduTourismImage from "../assets/eduTourism.png";
import onlineBankingImage from "../assets/onlineBanking.png";
import chatApplicationImage from "../assets/chatApp.gif";
import sensePhoto from "../assets/sensePhtotto.png";
import AuthLogger from "../assets/AuthLogger.png";
import FT1 from "../assets/1.png";
import FT2 from "../assets/2.png";
import FT3 from "../assets/3.png";
import FT4 from "../assets/4.png";
import FT5 from "../assets/5.png";
import FT6 from "../assets/6.png";
import FT7 from "../assets/7.png";
import FT8 from "../assets/8.png";
import PHU1 from "../assets/PHU-1.png";
import PHU2 from "../assets/PHU-2.png";
import PHU3 from "../assets/PHU-3.png";
import PHU4 from "../assets/PHU-4.png";

function ProjectDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const projectData = {
    1: {
      title: "Netflix Keyboard Simulator",
      description:
        "A Java-based keyboard simulator implementing graph operations, stack management, and linked list structures for Netflix navigation.",
      images: [netflixKeyboardImage],
      github: "https://github.com/JoelKumara24/Netflix-Keyboard-Simulator",
    },
    
    2: {
      title: "Online Banking Portal",
      description:
        "A full-featured online banking system developed using .NET, supporting secure transactions.",
      images: [onlineBankingImage],
      github: "https://github.com/JoelKumara24/Online-Banking-Portal-using-.NET",
    },
    3: {
      title: "Chat Application",
      description:
        "A real-time chat application leveraging .NET and distributed computing principles.",
      images: [chatApplicationImage],
      github: "https://github.com/JoelKumara24/Chat-App-made-by-using-.NET-framework",
    },
    4: {
      title: "Edu-Tourism Platform",
      description:
        "An itinerary-based tourism website where users can search, book, and manage travel plans.",
      images: [eduTourismImage],
      github: "https://github.com/JoelKumara24/EduTourism",
    },
    5: {
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce web platform developed using React for the frontend and Spring Boot for the backend, with MySQL as the database. Hosted on AWS, it supports product listing, shopping cart, secure checkout, and admin-side product management.",
      images: [sensePhoto],
      github: "https://github.com/JoelKumara24/Full-Ecommerce-Site",
    },
    6: {
      title: "Auth-Logger Blueprint",
      description:
        "A microservice built with Spring Boot, PostgreSQL, and Docker to manage user login events and authentication logs. Designed for modular integration into distributed systems, tested via Insomnia, and containerized for scalable deployments.",
      images: [AuthLogger],
      github: "https://github.com/JoelKumara24/Auth-Logger-BluePrint",
    },
    7: {
      title: "Fitness-Tracker",
      description:
        "A full-featured fitness tracking app built using Next.js, MongoDB, and deployed on Vercel. Users can log workouts, track progress photos, and monitor weight over time through an elegant, responsive dashboard and slideshow interface.",
      images: [FT1, FT2, FT3, FT4, FT5, FT6, FT7, FT8],
      github: "https://github.com/JoelKumara24/Next.js-App",
    },
    8: {
      title: "PHU-Site",
      description:
        "Progressive House Universe (PHU) is a dynamic music discovery platform dedicated to the underground progressive house scene. It features curated releases, artist showcases, event listings, and a sleek audio player — all powered by a custom admin dashboard for seamless content management. Built with React, Node.js, and MongoDB, and deployed on Hostinger and Render.",
      images: [PHU1,PHU2,PHU3,PHU4],
      github: "https://github.com/JoelKumara24/Progressive-House-Universe",
    },
    
  };

  const project = projectData[id];
  if (!project) return <h1>Project not found</h1>;

  return (
    <div className="project-detail-container">
      <div className="grain-overlay"></div>

      <div className="detail-content">
        <div className="header-row">
          <h1 className="project-title">{project.title}</h1>
          <Link to="/projects" className="back-button">
            ← Back
          </Link>
        </div>

        <div className="image-gallery">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="project-image"
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>

        <p className="project-description">{project.description}</p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub ↗
        </a>
      </div>

      {activeImage && (
        <div className="modal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Zoomed" className="zoomed-image" />
          <button
            className="close-btn"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;