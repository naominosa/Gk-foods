import React from 'react';
import "../styles/AboutUs.css";
import Feast from "../assets/FoodPlatter.jpg";

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      {/* Decorative background elements */}
      <div className="bg-pattern-dot"></div>
      
      <div className="about-container">
        {/* Header Section */}
        <section className="about-header">
          <span className="subtitle">The GK Foods Story</span>
          <div className="underline-accent"></div>
          <h1>
            Lagos’s Premier Taste: 
            <span className="highlight"> Authenticity in every bite.</span>
          </h1>
        </section>

        {/* Story Section */}
        <section className="story-grid">
          <div className="story-content">
            <h2 className="story-title">Our Legacy</h2>
            <div className="paragraphs">
  <p className="lead-text">
    The journey of <span className="brand-emphasis">GK Foods</span> began in the heart of 
    <span className="red-accent"> Delta State</span>, where our founder first shared her 
    passion for bold, traditional flavors.
  </p>
  <p>
    What started as a beloved local service in Delta eventually expanded to the vibrant 
    energy of Lagos in 2020. In just a few years, we have rapidly become the trusted choice 
    for those who crave the true taste of home, from intimate family dinners to grand 
    corporate celebrations.
  </p>
  <p>
    While our base moved to the city, our soul remains rooted in the authentic 
    culinary heritage of the South-South and beyond, bringing restaurant-quality 
    catering to every doorstep.
  </p>
</div>
            <button className="flashy-cta">Explore Our Menu</button>
          </div>

          <div className="story-image-wrapper">
            {/* These divs create the flashy layered effect */}
            <div className="decorative-square"></div>
            <div className="decorative-circle"></div>
            <img 
              src={Feast}
              alt="GK Foods Nigerian Spread" 
              className="main-img" 
            />
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="features-container">
          <div className="feature-card">
            <div className="icon-circle gold">🏆</div>
            <h3>20 Years</h3>
            <p>Nearly two decades of serving Lagos with authentic Nigerian cuisine and exceptional service.</p>
          </div>

          <div className="feature-card">
            <div className="icon-circle green">👨‍🍳</div>
            <h3>Expert Team</h3>
            <p>Professional chefs and service staff dedicated to making your event truly memorable.</p>
          </div>

          <div className="feature-card">
            <div className="icon-circle red">🌶️</div>
            <h3>Authentic</h3>
            <p>Traditional recipes passed down through generations, prepared with premium ingredients.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;