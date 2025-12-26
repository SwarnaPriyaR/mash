import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/Product";

import addToCartImg from "../assets/images/add-to-cart.png";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="page-container product-detail">
      <img
        src={product.image}
        alt={product.name}
        className="product-detail-img"
      />

      <h2 className="product-title">{product.name}</h2>
      <p className="product-desc">{product.description}</p>
      <h3 className="product-price"> {product.price}</h3>

      {/* ADD TO CART IMAGE BUTTON */}
      <div
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
        role="button"
        aria-label="Add to cart"
      >
        <img
          src={addToCartImg}
          alt="Add to cart"
          className="add-to-cart-icon"
        />
        <span className="add-to-cart-text">Add to Cart</span>
      </div>
    </div>
  );
}

export default ProductDetail;
