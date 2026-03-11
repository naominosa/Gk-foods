// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Catering from "../pages/Catering";
// import Logistics from "../pages/Logistics";
// import Forex from "../pages/Forex";
// import Contact from "../pages/Contact";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Catering" element={<Catering />} />
//         <Route path="/logistics" element={<Logistics />} />
//         <Route path="/forex" element={<Forex />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;


// import AppRouter from "./router/AppRouter";

// function App() {
//   return <AppRouter />;
// }

// export default App;

// import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    // <BrowserRouter>
      <AppRouter />
    // </BrowserRouter>
  );
}

export default App;