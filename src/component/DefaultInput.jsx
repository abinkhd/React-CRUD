import { TextField } from "@mui/material";
import React from "react";

const DefaultInput = ({
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
        <TextField
          style={{ display: "flex", alignItems: "center" }}
          id={name}
          label={label}
          defaultValue={defaultValue}
          type={type}       
          key={defaultValue}
          minLength={minLength}
          onChange={onInputChange}
          variant="standard"
        />
      </div>
    </>
  );
};

export default DefaultInput;
