import React from "react";
import Images from "../../assets/images/Images";

const Header = () => {
  return (
    <div className="header-section">
      <div className="logo">
        <div className="logo-svg">
          <img src={Images.logo} alt="" />
        </div>
        <div className="logo-text mat-h2">PrimeCRM</div>
      </div>
      <div className="navbar">
        <ul className="mat-h6">
          <li>Solution</li>
          <li>Industries</li>
          <li>Products</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>
            <button className="primary-btn mat-h6">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
