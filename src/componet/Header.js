import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const a = {color:'white', fontSize:'20px', textDecoration:'none'}
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        background: "black",
        padding: "15px",
        color: 'whitesmoke'
      }}
    >
      <Link style={a} to="/">Home</Link>
      <Link style={a} to="/order">Order</Link>
      <Link style={a} to="/login">Login</Link>
      <Link style={a} to="/about">about</Link>
    </div>
  );
};

export default Header;
