import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Products from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
