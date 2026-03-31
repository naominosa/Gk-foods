import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Services Column */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>Membership</li>
              <li>Products</li>
              <li>Stories</li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="footer-col">
            <h3>About Us</h3>
            <ul>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Subscription</li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="footer-col">
            <h3>Address</h3>
            <address>
              Morocco,<br />
              Marrakesh 29<br />
              Plaza World
            </address>
          </div>

          {/* Our Services Column */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="services-list">
              <li>Online Booking</li>
              <li>Catering Service</li>
              <li>Membership</li>
              <li>Delivery Service</li>
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div className="footer-col">
            <h3>Stay Connected</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="WhatsApp">@</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
            <div className="payment-icons">
              <span className="pay-text">Pay</span>
              <span className="visa-text">VISA</span>
            </div>
          </div>
        </div>

        {/* Middle Section - Discount & Newsletter */}
        <div className="footer-middle">
          <div className="discount-badge">
            <span className="discount-text">Get 20% Discount For You On First Order.</span>
          </div>
          
          <div className="newsletter">
            <div className="newsletter-group">
              <span className="newsletter-label">Email Address</span>
              <button className="send-btn">Send Now</button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <p>Copyright © achraf el gassab 2020 all right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;