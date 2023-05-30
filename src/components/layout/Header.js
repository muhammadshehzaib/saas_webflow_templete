import React from "react";
import Images from "../../assets/images/Images";

const Header = () => {
  return (
    <div className="header-section">
      <div className="logo">
        <div className="logo-svg">
          <img src={Images.logo} alt="" />
        </div>
        <div className="logo-text mat-h1">PrimeCRM</div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
