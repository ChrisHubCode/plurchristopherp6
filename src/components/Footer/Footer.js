import React from "react";
import logo from "../../assets/logowhite.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
