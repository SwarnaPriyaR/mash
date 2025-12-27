import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Home from "./component/Home";
import Products from "./component/product/Product";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/Cart";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
