import React from "react";
import Classes from "./goalPage.module.scss";
import GoalTextArea from "../../components/GoalTextArea/GoalTextArea.component";
import SetGoalArea from "../../components/SetGoalArea/SetGoalArea.component";

export default function GoalPage() {
  return (
    <div className={Classes.GoalPageMainContainer}>
      <div>
        <GoalTextArea />
      </div>
      <div>
        <SetGoalArea />
      </div>
    </div>
  );
}
