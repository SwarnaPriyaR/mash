import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const phoneNumber = "9176449578"; // your WhatsApp number

  const message = cart
    .map((p, i) => `${i + 1}. ${p.name} - ${p.price}`)
    .join("\n");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello, I want to place an order:\n" + message
  )}`;

  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((p, idx) => (
          <li key={idx}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button>Checkout via WhatsApp</button>
      </a>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
