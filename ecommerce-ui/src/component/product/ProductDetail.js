import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import products from "../../data/Product";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="page-container product-detail">
      {/* PRODUCT CARD */}
      <div className="product-card product-detail-card">
      <img src={product.image} alt={product.name} className="product-img" />
        <h2 className="product-title">{product.name}</h2>
        <h3 className="product-price">{product.price}</h3>
      </div>

      {/* DESCRIPTION */}
      <p className="product-desc">{product.description}</p>

      {/* ADD TO CART & CONTINUE SHOPPING */}
      <div className="product-actions">
        <button
          className="add-to-cart-btn-centered"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button
          className="continue-shopping-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
