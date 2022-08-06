import React, { useState } from "react";
import "./Registor.css";
import { useAddUserMutation } from "../../services/User";
import { useUsersQuery } from "../../services/User";
import { useNavigate } from "react-router-dom";

function Registor() {
  const [addTask] = useAddUserMutation();
  const { data } = useUsersQuery();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [emailColor, setEmailColor] = useState("none");
  const [nameColor, setNameColor] = useState("none");
  const [parolColor, setParolColor] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = data.some(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );
    if (check) {
      setText("bunday emailik foydalanovchi bor");
    } else if (!name) {
      setText("ism kiritin");
      setNameColor("red");
    } else if (!email) {
      setText("email kiritin");
      setEmailColor("red");
    } else if (!password) {
      setText("parol kiritin");
      setParolColor("red");
    } else {
      setText("");
      const newUser = {
        name,
        email,
        password,
      };
      addTask(newUser);
    }
  };

  return (
    <div className="reg">
      <form action="" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Registor</h1>
        <input
          style={{ border: `2px solid ${nameColor}` }}
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ border: `2px solid ${emailColor}` }}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ border: `2px solid ${parolColor}` }}
          type="password"
          placeholder="parol"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">register</button>
        <h3>{text}</h3>
      </form>
    </div>
  );
}

export default Registor;
