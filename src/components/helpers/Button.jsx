import React from "react";
import "./button.scss";

const Button = ({ text, className }) => {
  return (
    <a href="/" className={`btn ${className}`}>
      {text}
    </a>
  );
};

export default Button;
