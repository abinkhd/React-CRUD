import React from "react";

const Input = ({ label, onInputChange, name, type, defaultValue,ref }) => {
  return (
    <div className="form">
      <label>{label}</label>
      <input
        id={name}
        defaultValue={defaultValue}
        ref={ref}
        type={type}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Input;
