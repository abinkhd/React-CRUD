import { Label } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

const Input = ({
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
        <Label>{label}</Label>
        <TextField
          style={{ display: "flex", alignItems: "center" }}
          id={name}
          defaultValue={defaultValue}
          key={defaultValue}
          type={type}
          maxLength={maxLength}
          onChange={onInputChange}
          variant="standard"
        />
      </div>
    </>
  );
};

export default Input;
