import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../styles/Footer.css";

// The URL you extracted from your Mailchimp form code
const MAILCHIMP_URL = "https://gmail.us6.list-manage.com/subscribe/post?u=783d2c9836edbfe5c7c4009b6&id=993b2c69cd&f_id=00b750e0f0";

// Interface to fix TypeScript errors for the custom form props
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
    <div className="newsletter">
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

      {/* Status Messages */}
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
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>Membership</li>
              <li>Products</li>
              <li>Stories</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>About Us</h3>
            <ul>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Subscription</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Address</h3>
            <address>
              No17 KAYODE Turna <br />
              Greenville estate <br />
              Badore Ajah
            </address>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="services-list">
              <li>Online Booking</li>
              <li>Catering Service</li>
              <li>Membership</li>
              <li>Delivery Service</li>
            </ul>
          </div>

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

          {/* Integrated Mailchimp Component */}
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

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <p>Copyright © GK FOODS 2026 all right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;