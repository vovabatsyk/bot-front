import React from "react";
import "./Button.css";

export const Button = ({ props, children }) => {
  return (
    <button {...props} className={"button " + props?.className}>
      {children}
    </button>
  );
};
