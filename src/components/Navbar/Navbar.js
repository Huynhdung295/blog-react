import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>Huỳnh Dũng Blog</h1>
      <div className="links">
        <button onClick={props.onClick}>{props.text}</button>
        <Link to="/">Home</Link>
        <Link to="/create" className="new-blog">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
