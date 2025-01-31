import React, { useEffect, useState } from "react";
import Home from "./Components/Pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Player from "./Components/Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";

function Authcontrol() {
  
  const navigate = useNavigate();
  const [user,setuser]=useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setuser(user)
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);
}

function App() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Router>
      <Authcontrol/>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
