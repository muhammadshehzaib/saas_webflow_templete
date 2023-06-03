import React from "react";
import BrandsTrustedLogos from "./BrandsTrustedLogos";
import Images from "../../../assets/images/Images";

const BrandTrusted = () => {
  const images = [
    Images.Banner.Svg1,
    Images.Banner.Svg2,
    Images.Banner.Svg3,
    Images.Banner.Svg4,
    Images.Banner.Svg5,
    Images.Banner.Svg6,
    Images.Banner.Svg7,
    Images.Banner.Svg8,
    Images.Banner.Svg9,
    Images.Banner.Svg10,
    Images.Banner.Svg11,
    Images.Banner.Svg12,
  ];

  return (
    <div className="brand-trusted-section">
      <div className="container">
        <div className="brand-trusted">
          <div className="content-area">
            <div className="heading mat-h2">
              Trusted by more than 75 million users globally
            </div>
            <div className="paragraph mat-h6">
              Unique and powerful suite of software to run your entire business,
              brought to you transform the way you work.
            </div>
          </div>
          <div className="company-logos">
            <ul>
              <BrandsTrustedLogos images={images} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTrusted;
