import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/Product";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="page-container">
      <h2>Products</h2>

      <div className="filter-bar">
        <button className="filter-btn" onClick={() => setSelectedCategory("all")}>
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => setSelectedCategory("Oversized")}
        >
          Oversized Fit
        </button>
        <button
          className="filter-btn"
          onClick={() => setSelectedCategory("Regular")}
        >
          Regular Fit
        </button>
      </div>

      <ul className="product-list">
        {filteredProducts.map(p => (
          <li key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-img" />
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <Link to={`/product/${p.id}`}>
              <button className="view-btn">View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
