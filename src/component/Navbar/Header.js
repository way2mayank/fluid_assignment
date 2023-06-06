import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">SignUp</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Header;
