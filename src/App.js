import "./App.css";
import Brands from "./Components/brands/brands.jsx";
import Certifications from "./Components/certifications/certifications.jsx";

import Header from "./Components/header/header.jsx";
import HomeProductCategories from "./Components/homeProductCategories/homeProductCategories.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeProductCategories />
      <Certifications />
      <Brands />
    </div>
  );
}

export default App;
