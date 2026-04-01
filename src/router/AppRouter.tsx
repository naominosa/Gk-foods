import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catering from "../pages/Catering";
import AboutUs from "../pages/About";
import Contact from "../pages/Contact";

// Import your universal components
import Navbar from "../layout/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* 1. Navbar is placed here so it stays at the top of every page */}
      <Navbar />

      {/* 2. The Routes component handles switching the middle content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 3. Footer is placed here so it stays at the bottom of every page */}
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;