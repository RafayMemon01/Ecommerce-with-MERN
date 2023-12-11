// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container bg-dark text-light p-3">
      <div className="footer-content">
        <h4 className="text-center">
          All Rights Reserved &copy;
          <a className="text-decoration-none text-light" href="https://www.linkedin.com/in/rafay-memon-930190253/" target="_blank" rel="noopener noreferrer">
            Rafay Memon
          </a>
        </h4>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/rafay-memon-930190253/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/rafaymemon11" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/RafayMemon01" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
