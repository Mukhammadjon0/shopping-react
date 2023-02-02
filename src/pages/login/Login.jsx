import React, { useState } from "react";
import "./Login.css";
import { useUsersQuery } from "../../services/User";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

function Logi() {
  const { data } = useUsersQuery();
  const [logEmail, setLogEmail] = useState("");
  const [logParol, setLogParol] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data.find(
      (item) =>
        item.email.toLowerCase() === logEmail.toLowerCase() &&
        item.password === logParol
    );
    if (user) {
      dispatch(getUser(user));
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/");
    } else {
      setText("parol yoki email hato");
      setColor("red");
    }
  };
  return (
    <div className="login">
      <h1 style={{ color: "white" }}>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setLogEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setLogParol(e.target.value)}
          type="password"
          placeholder="parol"
        />
        <button type="submit">kirish</button>
      </form>
      <h3 style={{ color: color }}>{text}</h3>
    </div>
  );
}

export default Logi;
