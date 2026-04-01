import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import "../styles/Footer.css";

const MAILCHIMP_URL = "https://gmail.us6.list-manage.com/subscribe/post?u=783d2c9836edbfe5c7c4009b6&id=993b2c69cd&f_id=00b750e0f0";

interface CustomFormProps {
  status: "sending" | "error" | "success" | null;
  message: string | Error | null;
  onValidated: (data: { EMAIL: string }) => void;
}

const CustomForm = ({ status, message, onValidated }: CustomFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    // Added ID here for the bookmarking link
    <div className="newsletter" id="newsletter-section">
      <form className="newsletter-group" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="send-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Now"}
        </button>
      </form>
      <div style={{ marginTop: "10px", fontSize: "14px" }}>
        {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
        {status === "error" && (
          <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message as string }} />
        )}
        {status === "success" && <div style={{ color: "green" }}>Subscribed successfully!</div>}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [showMission, setShowMission] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          
          {/* About Us Column */}
          <div className="footer-col">
            <h3>About Us</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li>
                <span 
                  style={{ cursor: "pointer" }} 
                  onClick={() => setShowMission(true)}
                >
                  Our Mission
                </span>
              </li>
              {/* Bookmark Link to Newsletter */}
              <li><a href="#newsletter-section">Subscription</a></li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="footer-col">
            <h3>Address</h3>
            <address>
              No17 KAYODE Turna <br />
              Greenville estate <br />
              Badore Ajah
            </address>
          </div>

          {/* Our Services Column - All link to Contact */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="services-list">
              <li><Link to="/contact">Online Booking</Link></li>
              <li><Link to="/contact">Catering Service</Link></li>
              <li><Link to="/contact">Membership</Link></li>
              <li><Link to="/contact">Delivery Service</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Stay Connected</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="https://instagram.com/yourhandle" aria-label="Instagram">in</a>
              <a href="https://wa.me/2348109048272" aria-label="WhatsApp">@</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
            <div className="payment-icons">
              <span className="pay-text">Pay</span>
              <span className="visa-text">VISA</span>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="discount-badge">
            <span className="discount-text">Get 20% Discount For You On First Order.</span>
          </div>

          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }: any) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData: any) => subscribe(formData)}
              />
            )}
          />
        </div>

        <div className="footer-bottom">
          <p>Copyright © GK FOODS 2026 all right reserved</p>
        </div>
      </div>

      {/* Simple Mission Pop-up / Modal */}
      {showMission && (
        <div className="mission-modal-overlay" onClick={() => setShowMission(false)}>
          <div className="mission-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Our Mission</h2>
            <p>
              At GK Foods, our mission is to bring the authentic taste of premium Nigerian 
              and Continental cuisine to your doorstep. We are committed to culinary 
              excellence, using the freshest ingredients to create memorable experiences 
              for every event in Lagos and beyond.
            </p>
            <button className="close-btn" onClick={() => setShowMission(false)}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;