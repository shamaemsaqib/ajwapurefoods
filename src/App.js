import { Route, Routes } from "react-router-dom";

import "./App.css";

//Components
import Navbar from "./Components/navbar/navbar.jsx";
import Footer from "./Components/footer/footer.jsx";

//Route Components
import Home from "./routes/home/home.jsx";
import Products from "./routes/products/products.jsx";
import Gallery from "./routes/gallery/gallery.jsx";
import AboutUs from "./routes/about-us/about-us.jsx";
import Contact from "./routes/contact/contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
