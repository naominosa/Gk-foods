import React, { useRef, useState } from "react";
import FoodCard from "./FoodCard";
import "../styles/topList.css";

import Food from "../assets/food.jpg";
import Food1 from "../assets/food1.jpg";
import Food2 from "../assets/food2.jpg";

const foods = [
  {
    image: Food,
    title: "The Party Pack",
    description: "Spicy gizdodo, peppered beef, and creamy slaw.",
    price: '50,000 ',
    rating: 8.5,
  },
  {
    image: Food1,
    title: "The Combo Special",
    description: "Smokey Jollof and fried rice with grilled chicken.",
    price: '50,000 ',
    rating: 9.2,
  },
  {
    image: Food2,
    title: "The Jollof Tray",
    description: "Party-style Jollof rice topped with boiled eggs.",
    price: '45,000 ',
    rating: 7.3,
  },
];

const TopList = () => {
  const [activeIndex, setActiveIndex] = useState(1); // ✅ FIXED
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < foods.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="top-list">
      <h1>Top List</h1>
      <p>All our best plates in one delicious snap</p>

      {/* CONTROLS */}
      <div className="controls">
        <button onClick={scrollLeft}>◀</button>
        <button onClick={scrollRight}>▶</button>
      </div>

      {/* SLIDER */}
      <div className="slider" ref={sliderRef}>
        {foods.map((food, index) => (
          <div
            key={index}
            className={`card-wrapper ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <FoodCard {...food} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopList;