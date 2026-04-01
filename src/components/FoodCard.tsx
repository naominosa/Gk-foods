import React from "react";
import "../styles/topList.css";

type FoodCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  rating: number;
};

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  price,
  rating,
}) => {

  // Function to handle the WhatsApp redirect
  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348109048272"; // Your WhatsApp line
    
    // We'll format the message to include the food name and price
    const message = `Hello GK Foods! 🍲 I'm interested in ordering: *${title}* for ₦${price}. Please let me know the next steps.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Opens the WhatsApp link in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="food-card">
      <img src={image} alt={title} className="food-image" />

      <div className="food-content">
        <p className="rating">⭐ {rating}</p>
        <h3>{title}</h3>
        <p className="desc">{description}</p>

        <div className="bottom">
          <span className="price">₦{price}</span>
          {/* Added the onClick event here */}
          <button className="add-btn" onClick={handleWhatsAppOrder}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;