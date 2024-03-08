import React from "react";

const Input = ({ label, onInputChange, name, type, defaultValue }) => {
  return (
    <div className="form">
      <label>{label}</label>
      <input
        id={name}
        defaultValue={defaultValue}
        key={defaultValue}
        type={type}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Input;
