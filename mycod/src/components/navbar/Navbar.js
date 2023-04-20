import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="navbar">
        Click to view our about page
      </Link>
      <Link to="about" className="navbar">
        Click to view our about page
      </Link>
      <Link to="contact" className="navbar">
        Click to view our contact page
      </Link>
    </div>
  );
};

export default Navbar;
