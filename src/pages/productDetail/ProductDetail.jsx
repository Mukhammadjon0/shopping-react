import React from "react";
import { useParams } from "react-router-dom";
import { useProductsQuery } from "../../services/Product";
import "./productDetail.css"
function ProductDetail() {
  const { id } = useParams();
  const { data } = useProductsQuery();

  const chosenProduct = data?.find((item) => item.id === parseInt(id));
  return (
    <div className="produkt_detail">
      <img src={chosenProduct.image} alt={chosenProduct.title} />
      <h1>{chosenProduct.title}</h1>
      <h2>{chosenProduct.price}</h2>
    </div>
  );
}

export default ProductDetail;
