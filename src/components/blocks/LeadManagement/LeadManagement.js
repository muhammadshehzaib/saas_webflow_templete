import React from "react";
import Images from "../../../assets/images/Images";
import LeadManagmentList from "./LeadManagmentList";

const LeadManagement = () => {
  return (
    <div className="lead-management">
      <div className="img">
        <div className="imgs">
          <div className="sale-analytics-img">
            <img src={Images.Banner.img1} alt="" />
          </div>
          <div className="charts-imgs">
            <img src={Images.Banner.img2} alt="" />
            <img src={Images.Banner.img3} alt="" />
          </div>
          <div className="task-assign">
            <img src={Images.Banner.img4} alt="" />
          </div>
        </div>
      </div>
      <div className="content-area">
        <div className="mat-h2 main-heading">
          Allocate Leads and Simplify Lead Management
        </div>
        <div className="mat-h6 main-paragraph">
          Unique and powerful suite of software to run your entire business,
          brought to you by a company with the long term vision to transform the
          way you work.
        </div>
        <ul>
          <LeadManagmentList
            heading={"Lead generation"}
            paragraph={
              "Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs."
            }
          />
          <LeadManagmentList
            heading={"Team Email"}
            paragraph={
              "Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default LeadManagement;
