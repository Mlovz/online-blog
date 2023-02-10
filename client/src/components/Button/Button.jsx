import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ to, variant, onClick, fullWidth, children }) => {
  const style = {
    width: fullWidth ? "100%" : "",
  };

  return (
    <>
      {to ? (
        <Link to={to} style={style} className={`btn ${variant}`}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} style={style} className={`btn ${variant}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
