import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const cartTotal = cart.reduce(
    (sum, p) => sum + Number(p.price.replace("₹", "")) * p.quantity,
    0
  );

  if (cart.length === 0) {
    return <div className="page-container"><h2>Your cart is empty</h2></div>;
  }

  return (
    <div className="page-container">
      <h2><FaShoppingCart /> Cart</h2>

      {cart.map((p) => {
        const price = Number(p.price.replace("₹", ""));
        const total = price * p.quantity;

        return (
          <div className="cart-item" key={p.id}>
            <img src={p.image} alt={p.name} />

            <div className="cart-info">
              <h4>{p.name}</h4>
              <p>₹{price} × {p.quantity}</p>
            </div>

            <div className="cart-total">
              ₹{total}
            </div>
          </div>
        );
      })}

      <h3>Grand Total: ₹{cartTotal}</h3>

      <button className="icon-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
