import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <nav className="container">
        <div>iTask</div>
        <ul>
          <li>Home</li>
          <li>Your Tasks</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
