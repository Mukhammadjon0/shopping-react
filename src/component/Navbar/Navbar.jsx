import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {getUser} from "../../redux/userSlice"
function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch()
  const logOutBtn = () => {
    dispatch(getUser({}))
  };
  return (
    <nav>
      <h1>logo</h1>
      <Link className="link" to={"/"}>home</Link>
      <Link className="link" to={"/login"}>login</Link>
      <Link className="link" to={"/registor"}>register</Link>
      <Link className="link" to={"/basket"}>
        basket <sup>{basket.length}</sup>
      </Link>
      <button onClick={logOutBtn}>chiqish</button>
    </nav>
  );
}

export default Navbar;
