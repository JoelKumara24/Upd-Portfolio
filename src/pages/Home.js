import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      {/* Content Section */}
      <div className="content">
        <h1 className="title">Joel Kumara</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
