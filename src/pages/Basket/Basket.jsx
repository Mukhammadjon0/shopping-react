import React from "react";
import "./Basket.css";
import { useSelector } from "react-redux";
import ProduktBasket from "../../component/produktBasket/ProduktBasket";

function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  console.log(basket);

  return (
    <div className="basket">
      {basket.length > 0 ? (
        basket.map((item) => (
          <ProduktBasket key={item.id} {...item} product={item} />
        ))
      ) : (
        <h1>savat bosh</h1>
      )}
    </div>
  );
}

export default Basket;
