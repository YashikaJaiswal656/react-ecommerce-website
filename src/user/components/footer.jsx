import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-sections">
          
          {/* Business Hours */}
          <div className="footer-box">
            <h3>Business Hours</h3>
            <ul className="footer-list">
              <li>Monday - Friday: 08.00am - 05.00pm</li>
              <li>Saturday: 10.00am - 08.00pm</li>
              <li>Sunday: <span className="closed">Closed</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-box">
            <h3>Subscribe to Our Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Social Media */}
          <div className="footer-box">
            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook" ></i></a>
              <a href="https://github.com/YashikaJaiswal656" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/yashika-jaiswal-83202a345/" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:yashikajaiswal30@gmail.com" target="_blank"><i className="fab fa-google-plus"></i></a>
              <a href="https://wa.me/8448260585" target="_blank"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

        </div>

        <hr />

        <div className="footer-sections">
          
          {/* About Us */}
          <div className="footer-box">
            <h3>About Freshshop</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          {/* Information Links */}
          <div className="footer-box">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Customer Service</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Delivery Info</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-box">
            <h3>Contact Us</h3>
            <ul className="footer-list">
              <li><i className="fas fa-map-marker-alt"></i> Delhi Shahdara </li>
              <li><i className="fas fa-phone"></i> <a href="tel:+1888705770">+91 8448260587</a></li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:contactinfo@gmail.com">yashikajaiswal30@gmail.com</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 ThewayShop | Developed by <a href="">YASHIKA JAISWAL</a></p>
      </div>
    </footer>
  );
};

export default Footer;
