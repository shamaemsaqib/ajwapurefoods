export const riceProducts = [
  {
    name: "Super Kernel Basmati",
    image: require("../assets/products/rice/1121-White-Super-Basmati-Rice-300x300.jpg"),
    category: "rice",
  },
  {
    name: "IRRI-6 White Rice",
    image: require("../assets/products/rice/Long-Grain-IRRI-6-Rice-5-Broken-300x300.jpg"),
    category: "rice",
  },
  {
    name: "1121 Steam Basmati Rice",
    image: require("../assets/products/rice/1121_Steam_Basmati_Rice-300x300.jpg"),
    category: "rice",
  },
  {
    name: "1121 Parboiled Rice",
    image: require("../assets/products/rice/golden-sella-basmati-rice-500x500-300x300.jpg"),
    category: "rice",
  },
  {
    name: "PK-386 White Rice",
    image: require("../assets/products/rice/386-300x300.jpg"),
    category: "rice",
  },
  {
    name: "1121 Parboiled Basmati Rice",
    image: require("../assets/products/rice/1121-Parboiled-Basmati-Rice-300x300.jpeg"),
    category: "rice",
  },
  {
    name: "1121 White Super Basmati Rice",
    image: require("../assets/products/rice/1121-White-Super-Basmati-Rice-300x300.jpg"),
    category: "rice",
  },
  {
    name: "C-9 Brown Rice",
    image: require("../assets/products/rice/C-9-Brown-Rice.jpg"),
    category: "rice",
  },
  {
    name: "IRRI-6 Brown Rice",
    image: require("../assets/products/rice/IRRI-6-Brown-Rice-300x300.jpg"),
    category: "rice",
  },
  {
    name: "Super Kernel Basmati Brown Rice",
    image: require("../assets/products/rice/Super-Kernel-Basmati-Brown-Rice-300x300.jpg"),
    category: "rice",
  },
  {
    name: "Super Kernel Basmati Parboiled Brown Rice",
    image: require("../assets/products/rice/Super-Kernel-Basmati-Parboiled-Brown-Rice-300x300.jpg"),
    category: "rice",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const saltProducts = [
  {
    name: "Figure Shape",
    image: require("../assets/products/salt/Figure Shape.jpg"),
    category: "salt",
  },
  {
    name: "Fire Bowl",
    image: require("../assets/products/salt/fire-bawls-300x300.png"),
    category: "salt",
  },
  {
    name: "Geometrical Shapes",
    image: require("../assets/products/salt/Geometrical Shapes 300x300.jpg"),
    category: "salt",
  },
  {
    name: "Iron Bowls",
    image: require("../assets/products/salt/Iron Bowls-300x300.jpg"),
    category: "salt",
  },
  {
    name: "Night Lamps",
    image: require("../assets/products/salt/Night Lamps.jpg"),
    category: "salt",
  },
  {
    name: "Salt Inhalers",
    image: require("../assets/products/salt/Salt Inhalers-300x300.jpg"),
    category: "salt",
  },
  {
    name: "USB Lamps",
    image: require("../assets/products/salt/usb-lamps-300x300.png"),
    category: "salt",
  },
  {
    name: "Natural Shapes",
    image: require("../assets/products/salt/natural-shape.png"),
    category: "salt",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const spiceProducts = [
  {
    name: "Coriander Powder",
    image: require("../assets/products/spice/Coriander-Powder-1-300x300.jpg"),
    category: "spice",
  },
  {
    name: "Garlic Powder",
    image: require("../assets/products/spice/Garlic-powder-300x300.jpg"),
    category: "spice",
  },
  {
    name: "Red Chilli Flakes",
    image: require("../assets/products/spice/Red-Chilli-Flakes-300x300.jpg"),
    category: "spice",
  },
  {
    name: "Turmeric Powder",
    image: require("../assets/products/spice/turmeric-powder-300x300.jpg"),
    category: "spice",
  },
  {
    name: "Black Pepper",
    image: require("../assets/products/spice/coffee-500x500-300x300.jpg"),
    category: "spice",
  },
  {
    name: "Red Chilli Powder",
    image: require("../assets/products/spice/red-chilli-powder-300x300.png"),
    category: "spice",
  },
].sort((a, b) => a.name.localeCompare(b.name));

let allProductsArr = riceProducts.concat(saltProducts, spiceProducts);

export default allProductsArr.sort((a, b) => a.name.localeCompare(b.name));
