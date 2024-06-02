import Signup from "./screens/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function App() {
  const tokenValue = useSelector((state) => state.user.jsonToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenValue) {
      console.log(tokenValue);
      navigate("/home");
    } else {
      console.log(tokenValue);
      navigate("/");
    }
    // eslint-disable-next-line
  }, [tokenValue]);

  return (
    <Routes>
      <Route path="/" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
