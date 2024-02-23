import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Immunelife</div>
      <ul className="nav">
        <a href="/body">Home</a>
        <a href="/booking">Book your slot</a>
        <a href="/admin">admin</a>
        <a className="loginbtn" href="/login">Login</a>
      </ul>
    </nav>
  );
};

export default Navbar;
