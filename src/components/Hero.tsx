import "../styles/hero.css";
import JollofRice from '../assets/jollofrice.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-badge">
          🍛 Now Delivering Across Lagos
        </div>
        <h1>Hot Nigerian Meals <span className="accent">Delivered Fast</span></h1>
        <p>
          GK Foods brings fresh catering, reliable logistics, and forex services 
          straight to you. Order your favourite dishes today!
        </p>
        {/* <div className="hero-buttons">
          <button className="btn-primary">Order Now</button>
          <button className="btn-secondary">Book Catering</button>
        </div> */}

        <div className="hero-buttons">
  {/* Order Now Link */}
  <a 
    href="https://wa.me/2348109048272?text=I%20would%20like%20to%20order%20a%20platter" 
    target="_blank" 
    rel="noreferrer"
  >
    <button className="btn-primary">Order Now</button>
  </a>

  {/* Book Catering Link */}
  <a 
    href="https://wa.me/2348109048272?text=I%20would%20like%20to%20inquire%20about%20your%20catering%20services" 
    target="_blank" 
    rel="noreferrer"
  >
    <button className="btn-secondary">Book Catering</button>
  </a>
</div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span>500+</span>
            <p>Happy Customers</p>
          </div>
          <div className="hero-stat">
            <span>30 min</span>
            <p>Avg. Delivery</p>
          </div>
          <div className="hero-stat">
            <span>20+</span>
            <p>Menu Items</p>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image">
          <img src={JollofRice} alt="Jollof Rice" />
        </div>
        <div className="hero-float-card">
          <span className="icon">🔥</span>
          <div className="card-text">
            <strong>Fresh & Hot</strong>
            <span>Cooked to order</span>
          </div>
        </div>
        <div className="hero-rating-pill">
          ⭐ 4.9 Rating
        </div>
      </div>
    </section>
  );
};

export default Hero;