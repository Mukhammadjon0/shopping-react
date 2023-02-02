import React from "react";
import "./ProduktBasket.css"
function ProduktBasket({ title, image, price }) {
  return (
    <div className="product_basket">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}

export default ProduktBasket;
