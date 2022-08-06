import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Login from "./pages/login/Login";
import Registor from "./pages/registor/Registor";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Home from "./pages/home/Home";
import Basket from "./pages/Basket/Basket";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";
import { getUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"));
    dispatch(getUser(userr));
  }, [dispatch]);
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"));
    dispatch(getUser(userr));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registor" element={<Registor />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
