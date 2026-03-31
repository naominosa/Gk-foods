import Hero from "../components/Hero";
import SEO from "../seo/SEO";
import  "../styles/Home.css";
import Navbar from "../layout/Navbar";
import TopList from "../components/TopList";
import FeaturedDish from "../components/FeaturedDish";
const Home = () => {
  return (
    <>
      <SEO
        title="GK Foods | Catering Service in Ajah Lagos"
        description="GK Foods offers catering and logistics services in Lagos."
      />
      <div>
<Navbar/>

      </div>
      <Hero />
      <TopList/>
      <FeaturedDish/>
    </>
  );
};

export default Home;