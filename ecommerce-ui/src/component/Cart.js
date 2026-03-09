import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../Cart.css"; // create this file for styling

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const phoneNumber = "8825506681";
  const message = cart
    .map((p, i) => `${i + 1}. ${p.name} - ${p.price} × ${p.quantity}`)
    .join("\n");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello, I want to place an order:\n" + message
  )}`;

  const cartTotal = cart.reduce(
    (sum, p) => sum + Number(p.price.replace("₹", "")) * p.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="page-container">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>
        <FaShoppingCart /> Cart
      </h2>

      {cart.map((p) => {
        const price = Number(p.price.replace("₹", ""));
        const total = price * p.quantity;

        return (
          <div className="cart-item" key={p.id}>
            <img src={p.image} alt={p.name} className="cart-img" />
            <div className="cart-info">
              <span className="cart-name">{p.name}</span>
              <span className="cart-quantity">
                ₹{price} × {p.quantity}
              </span>
            </div>
            <div className="cart-total">₹{total}</div>
          </div>
        );
      })}

      <h3>Grand Total: ₹{cartTotal}</h3>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button>Order via WhatsApp</button>
      </a>

      <button className="icon-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
