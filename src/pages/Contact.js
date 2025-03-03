import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      {/* Fixed Header with Title and Back Button */}
      <div className="contact-header">
        <h1 className="contact-title">Contact Me</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <p className="contact-detail">
          📧 Email: <a href="mailto:joelkumara24@gmail.com" className="contact-link">joelkumara24@gmail.com</a>
        </p>
        
        <p className="contact-detail">
          📞 Phone: <a href="tel:+947678519" className="contact-link">+947678519</a>
        </p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/joel-kumara-b83105282/" target="_blank" className="social-button linkedin">LinkedIn</a>
          <a href="https://www.instagram.com/joelkumara/" target="_blank" className="social-button instagram">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
