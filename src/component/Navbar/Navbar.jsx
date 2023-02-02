import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <nav>
      <h1>logo</h1>
      <Link className="link" to={"/"}>home</Link>
      <Link className="link" to={"/basket"}>
        basket <sup>{basket.length}</sup>
      </Link>
    </nav>
  );
}

export default Navbar;
