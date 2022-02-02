import React from "react";
import Classes from "./notFound.module.scss";
import CustomeButton from "../../components/CustomeButton/CustomeButton.component";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={Classes.outerWrapper}>
      <h1>404 </h1>
      <h2>Page not found</h2>
      <div>
        <p>Try logging in</p>
        <CustomeButton
          style={{ backgroundColor: "#007bff" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Sign in
        </CustomeButton>
      </div>
    </div>
  );
}
