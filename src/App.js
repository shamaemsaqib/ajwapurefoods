import "./App.css";

//Components
import Navbar from "./Components/navbar/navbar.jsx";
import Header from "./Components/header/header.jsx";
import HomeProductCategories from "./Components/homeProductCategories/homeProductCategories.jsx";
import Certifications from "./Components/certifications/certifications.jsx";
import Brands from "./Components/brands/brands.jsx";
import Footer from "./Components/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HomeProductCategories />
      <Certifications />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
