import React from "react";
import logo from "../assets/images/logo.png";
import "./index.css";
const Header = () => {
  return (
    <div>
      <div class="logoContainer">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
