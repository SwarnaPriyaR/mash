import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Products from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <BrowserRouter>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        cartCount={Cart.length}
      />

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
