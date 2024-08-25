import React from 'react';
import '../Styles/footer.css';  // Path for Footer CSS
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text">
            We are passionate about bringing you the best recipes and culinary inspiration. Our goal is to help you discover new and exciting dishes that you can enjoy with family and friends.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/recipes">Recipes</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Flavorscape. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
