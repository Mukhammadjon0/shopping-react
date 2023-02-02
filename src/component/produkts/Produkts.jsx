import React from "react";
import { useProductsQuery } from "../../services/Product";
import Produkt from "../produkt/Produkt";
import "./Produkts.css"
function Produkts() {
  const { data, isLoading, isSuccess } = useProductsQuery();

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <div className="data_map">
        {isSuccess &&
          data.map((product) => <Produkt key={product.id} {...product} product={product} />)}
      </div>
    </div>
  );
}

export default Produkts;
