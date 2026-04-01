import "../styles/MenuCard.css";

interface MenuCardProps {
  image: string;
  rating: string;
  title: string;
  description: string;
  price: string;
}

const MenuCard = ({ image, rating, title, description, price }: MenuCardProps) => {
  
  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348109048272"; 
    const message = `Hello GK Foods! I would like to order the *${title}* for ₦${price}. Please provide payment details and delivery timeline.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="food-card"> 
      <img src={image} alt={title} className="food-image" />
      
      <div className="food-content">
        <div className="rating">⭐ {rating}</div>
        <h3>{title}</h3>
        <p className="desc">{description}</p>
        
        <div className="bottom">
          <span className="price">₦{price}</span>
          <button className="add-btn" onClick={handleWhatsAppOrder}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;