import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="keita-layout">
      <div className="grain-overlay"></div>

      <div className="left-column">
        <h1 className="name">Joel Kumara</h1>
        <p className="role">Fullstack Developer</p>
        <ul className="nav-links">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="right-column">
        <p className="bio">
          Born in 2001<br />
          in Colombo, Sri Lanka.<br />
          <br />
          Design isn’t just pixels,<br />
          it’s experience.<br />
          I merge discipline with intuition<br />
          to build interfaces<br />
          that don’t just work,<br />
          they <strong>CONNECT</strong>.<br />
          This is more than code.<br />
          This is intention.
        </p>
      </div>
    </div>
  );
}

export default Home;
