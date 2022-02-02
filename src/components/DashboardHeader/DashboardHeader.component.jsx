import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardHeader.styles.scss";
export default function DashboardHeader() {
  return (
    <div className="headerContainer">
      <span className="hidden">
        <NavLink
          to="/dashboard/profile"
          className={(isActive) => "hyperLink" + (!isActive ? " active" : " ")}
        ></NavLink>
      </span>
      <NavLink
        to="/dashboard/goal"
        className="hyperLink"
        style={{ borderRadius: "10px 0px 0px 10px" }}
      >
        <div>
          <h4>GOAL</h4>
        </div>
      </NavLink>
      <NavLink to="/dashboard/activity" className="hyperLink">
        <div>
          <h4>ACTIVITY</h4>
        </div>
      </NavLink>
      <NavLink to="/dashboard/profile" className="hyperLink">
        <div>
          <h4>PROFILE</h4>
        </div>
      </NavLink>
      <NavLink
        to="/dashboard/selectcoach"
        className="hyperLink"
        style={{ borderRadius: "0px 10px 10px 0px" }}
      >
        <div>
          <h4>SELECT COACH</h4>
        </div>
      </NavLink>
    </div>
  );
}
