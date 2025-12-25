import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Home() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Mash Clothing</h1>
      <Link to="/products">
        <button style={{ padding: "10px 20px", margin: "20px" }}>View Products</button>
      </Link>
    </div>
  );
}

export default Home;
