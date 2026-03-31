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
  return (
    <div className="food-card">
      <img src={image} alt={title} className="food-image" />

      <div className="food-content">
        <p className="rating">⭐ {rating}</p>
        <h3>{title}</h3>
        <p className="desc">{description}</p>

        <div className="bottom">
          <span className="price">₦{price}</span>
          <button className="add-btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;