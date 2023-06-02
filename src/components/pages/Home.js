import React from "react";
// import Images from "../../assets/images/Images";
import { PremiumFeatures, LeadManagement } from "../blocks/Index";

const Home = () => {
  return (
    <div className="home">
      <div className="homepage">
        <div className="text-section">
          <div className="mat-h1 main-heading">
            The CRM Platform Your Whole Business Will Love
          </div>
          <div className="secondary-heading mat-h6">
            Provide excellent customer service. Answer more tickets all-in-one
            Primarily software.
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
      <PremiumFeatures />
      <LeadManagement />
    </div>
  );
};

export default Home;
