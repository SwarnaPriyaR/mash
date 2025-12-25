import React from "react";
import { Link } from "react-router-dom";
import products from "../data/Product";

function Products() {
  return (
    <div className="page-container">
      <h2>Products</h2>

      <ul className="product-list">
        {products.map((p) => (
          <li key={p.id} className="product-card">
            <div>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </div>

            <Link to={`/product/${p.id}`}>
              <button className="theme-btn">View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
