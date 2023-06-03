import React from "react";
// import Images from "../../assets/images/Images";
import {
  PremiumFeatures,
  LeadManagement,
  ProjectManagement,
  BrandTrusted,
} from "../blocks/Index";

const Home = () => {
  return (
    <div className="home">
      <PremiumFeatures />
      <LeadManagement />
      <ProjectManagement />
      <BrandTrusted />
    </div>
  );
};

export default Home;
