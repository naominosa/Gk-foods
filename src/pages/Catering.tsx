import { useState } from "react";
import MenuCard from "../components/MenuCard";
import "../styles/Catering.css";
import JollofRice from '../assets/jollofRice1.jpg';
import Egusi from '../assets/PoundedYamAndEgusi.jpg';
import BangaStarch from '../assets/Banga soup and starch is here😋.jpg';

// 1. Move Data OUTSIDE the component (Best Practice)
// This keeps the component lean and prevents unnecessary data recreation
const menuData: Record<string, any[]> = {
  "Main Meals": [
    { id: 1, title: "The Combo Special",
       price: "50,000",
        rating: "9.2",
         image: JollofRice, 
         desc: "Smokey Jollof and fried rice with grilled chicken." 
        },
    { id: 2, 
      title: "Egusi & Pounded Yam",
       price: "15,000", 
       rating: "8.8", 
       image: Egusi,
      desc: "Rich melon soup with assorted meat."
       },
       { 
      id: 11, 
      title: "Banga Soup & Starch", 
      price: "22,000", 
      rating: "9.9", 
      image: BangaStarch, 
      desc: "Delta-style palm nut soup flavored with beletietie leaves, served with oily starch." 
    },
  ],
  "Small Chops": [
    { id: 3, title: "The Party Pack", price: "50,000", rating: "8.5", image: "/chops.jpg", desc: "Spicy gizdodo, peppered beef, and slaw." },
    { id: 4, title: "Crunchy Chin Chin", price: "5,000", rating: "9.5", image: "/chinchin.jpg", desc: "GK Special homemade crunchy snacks." }
  ],
  "Bakery": [
    { id: 5, title: "Fruit Parfait", price: "3,500", rating: "9.0", image: "/parfait.jpg", desc: "Creamy yogurt with fresh fruits." }
  ],
  "Continental": [
    { id: 6, title: "Alfredo Pasta", price: "12,000", rating: "8.7", image: "/pasta.jpg", desc: "Creamy pasta with grilled shrimp." }
  ]
};

const Catering = () => {
  const [activeCategory, setActiveCategory] = useState("Main Meals");

  // Generate categories list directly from the data keys to avoid mismatch bugs
  const categories = Object.keys(menuData);

  return (
    <div className="catering-page">
      <div className="catering-header">
        <h1>Our Catering Menu</h1>
        <p>All our best plates in one delicious snap</p>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "tab active" : "tab"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {/* Added a safety check with optional chaining ?. */}
        {menuData[activeCategory]?.map((item) => (
          <MenuCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.desc}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Catering;