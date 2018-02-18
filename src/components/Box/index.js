import React from "react";
import "./index.css";

const Box = ({ children, className }) => (
  <div className={className + " box"}>{children}</div>
);

export default Box;
