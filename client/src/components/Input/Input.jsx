import React from "react";
import "./input.scss";

const Input = ({
  placeholder,
  value,
  name,
  required = true,
  type = "text",
  textarea,
  onChange,
}) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field-label">
        {placeholder} {required && <span>*</span>}
      </div>

      <div className="field-input">
        {textarea ? (
          <textarea
            required={required}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            required={required}
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
