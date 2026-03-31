import React from "react";
import "../styles/FeaturedDish.css";
import Soup from '../assets/soup.jpg';
import Leaf from '../assets/leaf.png';
import tomato from '../assets/tomato.png';
import spice from '../assets/spice.png';

const FeaturedDish: React.FC = () => {
  return (
    <div className="featured">
      <div className="featured-container">
        {/* Left side - Image */}
        <div className="featured-left">
          <div className="image-wrapper">
            <div className="image-circle">
              <img src={Soup} alt="Italian meatball soup" />
            </div>
            <div className="price-badge">
              <span className="price">₦15k</span>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="featured-right">
          <span className="section-tag">The Ultimate Classic</span>
          <h1>Our Dish</h1>
          <p>
            Experience the soul of Yoruba cuisine. Our soft, fluffy Amala is served with silky Ewedu, savory Gbegiri, and a signature spicy pepper sauce, complete with tender assorted meats.
          </p>
          <button className="btn">
            Check <span className="btn-arrow">→</span>
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