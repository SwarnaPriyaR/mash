import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);


  const phoneNumber = "9176449578"; // WhatsApp number

  const message = cart
    .map((p, i) => `${i + 1}. ${p.name} - ${p.price}`)
    .join("\n");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello, I want to place an order:\n" + message
  )}`;

  return (
    <div className="page-container">


      <h2 style={{ marginTop: "20px" }}>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="product-list">
            {cart.map((p, idx) => (
              <li className="cart-item" key={idx}>
                <strong>{p.name}</strong>
                <span>{p.price}</span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="theme-btn" style={{ marginTop: "20px" }}>
              Checkout via WhatsApp
            </button>
          </a>

          <button
            className="theme-btn"
            style={{ marginTop: "12px", background: "#444" }}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
