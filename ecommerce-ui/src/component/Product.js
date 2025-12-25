import React from "react";
import { Link } from "react-router-dom";
import products from "../data/Product";

function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </div>
            <Link to={`/product/${p.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
