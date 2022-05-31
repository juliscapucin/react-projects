import React from "react";

export default function Product({ image, name, price }) {
  return (
    <div>
      <h2>Products</h2>
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
}
