import React from "react";
import "../styles/FeaturedDish.css";
import Soup from '../assets/soup.jpg';
import Leaf from '../assets/leaf.png';
import tomato from '../assets/tomato.png';
import spice from '../assets/spice.png';

const FeaturedDish: React.FC = () => {

  // Function to handle the WhatsApp redirect for the Featured Dish
  const handleFeaturedOrder = () => {
    const phoneNumber = "2348109048272"; // Your WhatsApp line
    
    // Custom message for the Amala Special
    const message = "Hello GK Foods! 🍲 I just saw the *Amala Special* on your featured section and I'd like to order it!";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="featured">
      <div className="featured-container">
        {/* Left side - Image */}
        <div className="featured-left">
          <div className="image-wrapper">
            <div className="image-circle">
              <img src={Soup} alt="Amala and Ewedu Special" />
            </div>
            <div className="price-badge">
              <span className="price">₦15k</span>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="featured-right">
          <span className="section-tag">The Ultimate Classic</span>
          <h1>Amala Special</h1> {/* Updated title to match the description */}
          <p>
            Experience the soul of Yoruba cuisine. Our soft, fluffy Amala is served with silky Ewedu, savory Gbegiri, and a signature spicy pepper sauce, complete with tender assorted meats.
          </p>
          
          {/* Added the onClick event here */}
          <button className="btn" onClick={handleFeaturedOrder}>
            Order on WhatsApp <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <img src={Leaf} alt="" className="deco deco-leaf-top" />
      <img src={spice} alt="" className="deco deco-spice-bottom" />
      <img src={tomato} alt="" className="deco deco-tomato" />
    </div>
  );
};

export default FeaturedDish;