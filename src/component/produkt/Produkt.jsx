import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToBasket } from "../../redux/basketSlice";

import "./product.css";

function Produkt({ id, title, image, price, product }) {
  // const [son, setSon] = useState(1)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const getDetail = () => {
    navigate(`/productDetail/${id}`);
  };
  const chooseBtn = () => {



    // const check = basket?.some((item) => item.id === id);
    // if (check) {
    // } else {
    dispatch(addToBasket(product));
    // }
  };

  return (
    <div className="product">
      <img onClick={getDetail} src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{price}</h2>
      
      <button onClick={chooseBtn}>kiritish</button>
    </div>
  );
}

export default Produkt;
