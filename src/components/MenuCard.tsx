import "../styles/MenuCard.css";

interface MenuCardProps {
  image: string;
  rating: string;
  title: string;
  description: string;
  price: string;
}

const MenuCard = ({ image, rating, title, description, price }: MenuCardProps) => {
  return (
    <div className="menu-card">
      {/* The floating circular image */}
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="floating-img" />
      </div>

      <div className="card-content">
        <div className="rating">⭐ {rating}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-footer">
          <span className="card-price">₦{price}</span>
          <button className="add-btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;