import React from "react";
import Classes from "./GoalTextArea.module.scss";

export default function GoalTextArea() {
  return (
    <div className={Classes.goalTextContainerMain}>
      <h1>Goal</h1>
      <p>
        Select your Primary Goal. What do you want to
        <br />
        accomplish in the next few months?
      </p>
    </div>
  );
}
