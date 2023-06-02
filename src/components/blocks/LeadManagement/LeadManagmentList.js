import React from "react";

const LeadManagmentList = (props) => {
  const { heading, paragraph } = props;

  return (
    <li>
      <div className="heading mat-h4">{heading}</div>
      <div className="paragraph mat-h6"> {paragraph}</div>
    </li>
  );
};

export default LeadManagmentList;
