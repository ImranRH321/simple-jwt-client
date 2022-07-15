import React from "react";
import Home from "./componet/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./componet/Login";
import Order from "./componet/Order";
import Header from "./componet/Header";
import About from "./componet/About";

function App() {
  return (
    <div className="App">
      <h2>Home page</h2>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
