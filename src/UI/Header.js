import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/products" style={{ textDecoration: "none" }}>
        <div>
          <h3>Products</h3>
        </div>
      </Link>
      <Link to="/users" style={{ textDecoration: "none" }}>
        <div>
          <h3>Users</h3>
        </div>
      </Link>
    </div>
  );
};

export default Header;
