import React from "react";
import Images from "../../assets/images/Images";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
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
      </div>
      <div className="homepage-section">
        <div className="container">
          <div className="homepage">
            <div className="text-section">
              <div className="mat-h1 main-heading">
                The CRM Platform Your Whole Business Will Love
              </div>
              <div className="secondary-heading mat-h6">
                Provide excellent customer service. Answer more tickets
                all-in-one Primarily software.
              </div>
              <div className="banner-btns">
                <button className="primary-btn started-btn mat-h6">
                  Get Started
                </button>
                <button className="works-btn mat-h6">How It Work</button>
              </div>
            </div>
            <div className="image-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
