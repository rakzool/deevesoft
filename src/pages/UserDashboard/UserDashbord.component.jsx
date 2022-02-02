import React from "react";
import { useNavigate } from "react-router-dom";
import Classes from "./userDashboard.module.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import CustomeButton from "../../components/CustomeButton/CustomeButton.component";

export default function UserDashboard() {
  const navigate = useNavigate();

  const userLogOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className={Classes.dashboarMain}>
      <h2>
        Welcome
        <span> {auth.currentUser ? auth.currentUser.displayName : ""}</span>
      </h2>

      <CustomeButton onClick={userLogOut}>logout</CustomeButton>
    </div>
  );
}
