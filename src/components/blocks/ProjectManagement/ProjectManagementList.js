import React from "react";

const ProjectManagementList = (props) => {
  const { svg, heading, paragraph } = props;
  return (
    <li>
      <div className="svg-container">{svg}</div>
      <div className="icon-heading mat-h4 ">{heading}</div>
      <p className="icon-paragraph mat-h6">{paragraph}</p>
    </li>
  );
};

export default ProjectManagementList;
