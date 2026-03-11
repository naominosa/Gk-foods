// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Catering from "../pages/Catering";
// import Logistics from "../pages/Logistics";
// import Forex from "../pages/Forex";
// import Contact from "../pages/Contact";

// const AppRouter = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/catering" element={<Catering />} />
//       <Route path="/logistics" element={<Logistics />} />
//       <Route path="/forex" element={<Forex />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default AppRouter;  

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Catering from "../pages/Catering";
import Logistics from "../pages/Logistics";
import Forex from "../pages/Forex";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>  {/* Add BrowserRouter here temporarily to test */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;