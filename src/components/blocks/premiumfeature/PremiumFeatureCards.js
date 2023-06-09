import React from "react";

const PremiumFeatureCard = (props) => {
  const { svg, heading, paragraph } = props;

  return (
    <div className="premium-feature-card">
      <ul>
        <li>
          <div className="svg-container">{svg}</div>
          <h4 className="heading mat-h4 ">{heading}</h4>
          <p className="paragraph mat-h6">{paragraph}</p>
        </li>
      </ul>
    </div>
  );
};

export default PremiumFeatureCard;
