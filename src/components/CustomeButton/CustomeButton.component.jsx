import React from "react";
import Classes from "./CustomeButton.module.scss";

export default function CustomeButton({ children, ...otherProps }) {
  return (
    <button className={Classes.customButton} {...otherProps}>
      {children}
    </button>
  );
}
