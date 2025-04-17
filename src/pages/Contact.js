import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-layout">
      <div className="grain-overlay"></div>

      <div className="contact-left-column">
        <h1 className="name">Joel Kumara</h1>
        <p className="role">Fullstack Developer</p>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/info">Info</Link></li>
        </ul>
      </div>

      <div className="contact-right-column">
  <p className="contact-bio">
    Available for collaborations<br />
    or just a friendly hello.<br />
    <br />
    <strong>Email:</strong> <a href="mailto:joelkumara24@gmail.com">joelkumara24@gmail.com</a><br />
    <strong>Phone:</strong> <a href="tel:+947678519">+393518533841</a><br />
    <br />
    <a href="https://www.linkedin.com/in/joel-kumara-b83105282/" target="_blank" rel="noreferrer">LinkedIn</a> •{" "}
    <a href="https://www.instagram.com/joelkumara/" target="_blank" rel="noreferrer">Instagram</a><br />
    <a
    href="/Joel_Kumara.pdf"
    download
    className="cv-download-button"
  >
    Download CV
  </a>
  </p>

  
</div>

    </div>
  );
}

export default Contact;
