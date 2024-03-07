import React from "react";

const Input = ({ label, onInputChange, name, type }) => {
  return (
    <div className="form">
      <label>{label}</label>
      <input id={name} type={type} onChange={onInputChange} />
    </div>
  );
};

export default Input;
