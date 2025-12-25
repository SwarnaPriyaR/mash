import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/Product";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);

  return (
    <div className="page-container">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
