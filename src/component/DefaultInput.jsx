import { TextField } from "@mui/material";
import React from "react";

const DefaultInput = ({
  maxLength,
  label,
  onInputChange,
  name,
  type,
  defaultValue,
}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <TextField
          style={{ display: "flex", alignItems: "center" }}
          id={name}
          defaultValue={defaultValue}
          key={defaultValue}
          maxLength={maxLength}
          onChange={onInputChange}
          variant="standard"
        />
      </div>
    </>
  );
};

export default DefaultInput;
