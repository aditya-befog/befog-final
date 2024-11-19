import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import logo from "../../assets/picsvg.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container-footer">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-content">
        <p className="footer-text">Befog(A&W Technology)</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className="icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
  <div className="left">
    <p className="footer-p">Company</p>
    <ul className="footer-ul">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div className="center">
    <p className="footer-p">Services</p>
    <ul className="footer-ul">
      <li><a href="/uiux">UI/UX</a></li>
      <li><a href="/web">WEB DEVELOPMENT</a></li>
      <li><a href="/Digital">DIGITAL MARKETING</a></li>
      <li><a href="/Business">BUSINESS CONSULTANCY SERVICE</a></li>
      <li><a href="/Social">Social Media Marketing</a></li>
      <li><a href="/strategy">Content Strategy</a></li>
      <li><a href="/paid">Paid Advertising</a></li>
    </ul>
  </div>
  <div className="right">
    <p className="footer-p">Get in Touch</p>
    <ul className="footer-ul">
      <li><a href="">+1-222-454-7890</a></li>
      <li><a href="">Befog@gmail.com</a></li>
    </ul>
  </div>
</div>

    </footer>
  );
};

export default Footer;
