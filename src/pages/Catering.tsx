import { useState } from "react";
import MenuCard from "../components/MenuCard";
import "../styles/Catering.css";

// Image Imports
import JollofRice from '../assets/jollofRice1.jpg';
import Egusi from '../assets/PoundedYamAndEgusi.jpg';
import BangaStarch from '../assets/Bangasoupandstarch.jpg';
import OwoStarch from '../assets/OwoSoupStarch.jpg';
import EgusiPepperSoup from '../assets/egusipeppersoupandstarch.jpg';
import Ogbono from '../assets/ogbonosoup.jpg';
import FishermanSoup from '../assets/fishermansoup.jpg';
import Smallchops from '../assets/smallChops.jpg';
import ChinChin from '../assets/CHINCHIN.jpg';
import AsunImage from '../assets/asun.jpg';
import Fries from '../assets/CHOPCHOP.jpg';
import tapioca from '../assets/tapioca.jpg';
import cake from '../assets/cake.jpg';
import meatpie from '../assets/meatpie.jpg';
import parfait from '../assets/parfait.jpg';
import alfredo from '../assets/alfredoPasta.jpg';
import noodles from '../assets/noodles.jpg';
import SpeacialFriedRice from '../assets/speacialfreidrice.jpg';
import chicken from '../assets/chickenandvegetable.jpg';
import creamyPasta from '../assets/creamypasta.jpg';



const menuData: Record<string, any[]> = {
  "Main Meals": [
    { id: 1, title: "The Combo Special", price: "50,000", rating: "9.2", image: JollofRice, desc: "Smokey Jollof and fried rice with grilled chicken." },
    { id: 2, title: "Egusi & Pounded Yam", price: "15,000", rating: "8.8", image: Egusi, desc: "Rich melon soup with assorted meat." },
    { id: 11, title: "Banga Soup & Starch", price: "22,000", rating: "9.9", image: BangaStarch, desc: "Delta-style palm nut soup with oily starch." },
    { id: 12, title: "Owo Soup & Starch", price: "20,000", rating: "9.6", image: OwoStarch, desc: "Traditional Delta 'Yellow Soup' with starch." },
    { id: 13, title: "Egusi Pepper Soup & Starch", price: "18,500", rating: "9.3", image: EgusiPepperSoup, desc: "Fusion of spicy pepper soup and grounded egusi." },
    { id: 14, title: "Ogbono Soup & Eba", price: "14,000", rating: "8.9", image: Ogbono, desc: "Drawy wild mango seed soup with yellow garri." },
    { id: 15, title: "Fisherman Pepper Soup", price: "25,000", rating: "9.7", image: FishermanSoup, desc: "Fresh river fish and prawns in aromatic broth." }
  ],
  "Small Chops": [
    { 
      id: 3, 
      title: "The Party Pack", 
      price: "50,000", 
      rating: "8.5", 
      image: Smallchops, 
      desc: "Spicy gizdodo, peppered beef, samosa, spring rolls, and slaw." 
    },
    { 
      id: 4, 
      title: "Crunchy Chin Chin", 
      price: "5,000", 
      rating: "9.5", 
      image: ChinChin, 
      desc: "GK Special homemade crunchy snacks, perfect for munching." 
    },
    { 
      id: 16, 
      title: "Signature Asun", 
      price: "15,000", 
      rating: "9.8", 
      image: AsunImage, 
      desc: "GK signature spicy smoked goat meat sautéed with onions and habanero peppers." 
    },
    { 
      id: 17, 
      title: "Chop Chop", 
      price: "8,000", 
      rating: "9.1", 
      image: Fries, 
      desc: "Sweet plantain mosa paired with fluffy, golden-brown puff puff." 
    }
  ],
  "Bakery": [
    { 
      id: 5, 
      title: "Fruit Parfait", 
      price: "3,500", 
      rating: "9.0", 
      image: parfait, 
      desc: "Creamy Greek yogurt layered with granola and seasonal fresh fruits." 
    },
    { 
      id: 18, 
      title: "Signature Celebration Cake", 
      price: "25,000", 
      rating: "9.7", 
      image: cake, 
      desc: "Moist, rich sponge cake with vanilla buttercream frosting. Available in chocolate or red velvet." 
    },
    { 
      id: 19, 
      title: "Creamy Tapioca Pudding", 
      price: "4,500", 
      rating: "8.9", 
      image: tapioca, 
      desc: "Traditional creamy tapioca pearls cooked with coconut milk and a hint of condensed milk." 
    },
    { 
      id: 20, 
      title: "Buttery Meat Pie (Box of 6)", 
      price: "9,000", 
      rating: "9.5", 
      image: meatpie, 
      desc: "Flaky, buttery crust filled with seasoned minced beef, carrots, and potatoes." 
    }
  ],
 
  "Continental": [
    { 
      id: 6, 
      title: "Shrimp Alfredo Pasta", 
      price: "12,000", 
      rating: "8.7", 
      image: alfredo, 
      desc: "Rich and creamy fettuccine pasta tossed in parmesan sauce with succulent grilled shrimps." 
    },
    { 
      id: 21, 
      title: "Special Singapore Noodles", 
      price: "15,500", 
      rating: "9.8", 
      image: noodles, 
      desc: "Thin rice vermicelli noodles stir-fried with curry powder, veggies, chicken, and baby prawns." 
    },
    { 
      id: 22, 
      title: "Chinese Special Fried Rice", 
      price: "13,000", 
      rating: "9.2", 
      image: SpeacialFriedRice, 
      desc: "Authentic wok-tossed rice with shredded beef, eggs, carrots, and sweet peas." 
    },
    { 
      id: 23, 
      title: "Grilled Chicken & Veggie Stir-fry", 
      price: "14,500", 
      rating: "9.0", 
      image: chicken, 
      desc: "Sautéed seasonal vegetables and tender chicken breast tossed in a savory oyster sauce." 
    },
    { 
      id: 24, 
      title: "Creamy Seafood Pasta", 
      price: "18,000", 
      rating: "9.5", 
      image: creamyPasta, 
      desc: "A luxury mix of calamari, prawns, and fish in a white wine cream sauce with linguine." 
    }
  ],
};

const Catering = () => {
  const [activeCategory, setActiveCategory] = useState("Main Meals");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Object.keys(menuData);
  const currentItems = menuData[activeCategory] || [];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <div className="top-list">
      <h1>Our Catering Menu</h1>
      <p>All our best plates in one delicious snap</p>

      <div className="category-tabs" style={{ marginBottom: '100px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "tab active" : "tab"}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="slider-container">
        <div className="slider">
          {currentItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`card-wrapper ${index === currentIndex ? "active" : ""}`}
              style={{ display: index === currentIndex || Math.abs(index - currentIndex) <= 1 ? 'block' : 'none' }}
            >
              <MenuCard {...item} />
            </div>
          ))}
        </div>

        <div className="controls">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Catering;