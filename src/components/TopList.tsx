import React, { useRef, useState, useEffect } from "react";
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
    price: '50,000',
    rating: 8.5,
  },
  {
    image: Food1,
    title: "The Combo Special",
    description: "Smokey Jollof and fried rice with grilled chicken.",
    price: '50,000',
    rating: 9.2,
  },
  {
    image: Food2,
    title: "The Jollof Tray",
    description: "Party-style Jollof rice topped with boiled eggs.",
    price: '45,000',
    rating: 7.3,
  },
];

const TopList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Fix: Properly type the ref as HTMLDivElement
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
      // Fix: Check if sliderRef.current exists before using it
      if (isMobile && sliderRef.current) {
        const cardWidth = sliderRef.current.children[0]?.clientWidth || 280;
        sliderRef.current.scrollTo({
          left: (activeIndex - 1) * (cardWidth + 20),
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollRight = () => {
    if (activeIndex < foods.length - 1) {
      setActiveIndex(prev => prev + 1);
      // Fix: Check if sliderRef.current exists before using it
      if (isMobile && sliderRef.current) {
        const cardWidth = sliderRef.current.children[0]?.clientWidth || 280;
        sliderRef.current.scrollTo({
          left: (activeIndex + 1) * (cardWidth + 20),
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle manual scroll on mobile
  const handleScroll = () => {
    // Fix: Proper null check for sliderRef.current
    if (!isMobile || !sliderRef.current) return;

    const scrollPosition = sliderRef.current.scrollLeft;
    const firstChild = sliderRef.current.children[0] as HTMLElement;
    const cardWidth = firstChild?.offsetWidth || 280;
    const newIndex = Math.round(scrollPosition / (cardWidth + 20));

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < foods.length) {
      setActiveIndex(newIndex);
    }
  };

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (isMobile && slider) {
  //     slider.addEventListener('scroll', handleScroll);
  //     return () => slider.removeEventListener('scroll', handleScroll);
  //   }
  // }, [isMobile, activeIndex]); 
useEffect(() => {
  const slider = sliderRef.current;
  if (!isMobile || !slider) return;

  const onScroll = () => {
    const scrollPosition = slider.scrollLeft;
    const cardWidth = slider.children[0]?.clientWidth || 280;
    const newIndex = Math.round(scrollPosition / (cardWidth + 20));

    setActiveIndex(newIndex);
  };

  slider.addEventListener("scroll", onScroll);

  return () => slider.removeEventListener("scroll", onScroll);
}, [isMobile]);

  return (
    <section className="top-list">
      <h1>Top List</h1>
      <p>All our best plates in one delicious snap</p>

      {/* CONTROLS */}
      <div className="controls">
        <button 
          onClick={scrollLeft} 
          disabled={activeIndex === 0}
          style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
        >
          ◀
        </button>
        <button 
          onClick={scrollRight} 
          disabled={activeIndex === foods.length - 1}
          style={{ opacity: activeIndex === foods.length - 1 ? 0.5 : 1 }}
        >
          ▶
        </button>
      </div>

      {/* SLIDER */}
      <div 
        className="slider" 
        ref={sliderRef}
        style={{
          overflowX: isMobile ? 'auto' : 'visible',
          cursor: isMobile ? 'grab' : 'default',
          display: 'flex',
          gap: '20px',
          justifyContent: isMobile ? 'flex-start' : 'center',
          padding: '20px 0'
        }}
      >
        {foods.map((food, index) => (
          <div
            key={index}
            className={`card-wrapper ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              flex: isMobile ? '0 0 auto' : '0 0 auto',
              transition: 'all 0.3s ease'
            }}
          >
            <FoodCard {...food} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopList;