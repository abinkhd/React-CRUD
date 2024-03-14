import { Input } from "@mui/material";
import React from "react";

const DefaultInput = ({
  maxLength,
  label,
  onInputChange,
  name,
  type,
  defaultValue,
  minLength,
}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <Input
          style={{ display: "flex", alignItems: "center" }}
          id={name}
          defaultValue={defaultValue}
          type={type}
          key={defaultValue}
          minlength={minLength}
          onChange={onInputChange}
          variant="standard"
        />
      </div>
    </>
  );
};

export default DefaultInput;
