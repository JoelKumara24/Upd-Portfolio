// Info.js
import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="info-layout">
      <div className="grain-overlay"></div>

      <div className="info-left-column">
        <h1 className="name">Joel Kumara</h1>
        <p className="role">Fullstack Developer</p>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="info-right-column">
  <p className="info-about-bio">
    Born to build.<br />
    I bend logic and pixels to craft seamless digital worlds.<br />
    Mastery in React. Fluent in Next.<br />
    Mastery in Java. Prefered Backend framework being Springboot.<br />
    SQL Databases were the initial foundation for my projects. <br />
    Familiarity of every system, Not a loyalist for a tech stack.<br />
    Adapting and evolving by the DAY.<br />
    Systems aren’t just built — they’re engineered.<br />
    <br />
    From the rugby field to the IDE —<br />
    Discipline. Grit. Precision.<br />
    <br />
    This isn’t just code.<br />
    This is intention.
  </p>
</div>

    </div>
  );
}

export default Info;