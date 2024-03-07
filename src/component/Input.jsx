import React from "react";

const Input = ({ label, onInputChange, name }) => {
  return (
    <div>
      <label>{label}</label>
      <input id={name} type="text" onChange={onInputChange} />
    </div>
  );
};

export default Input;
