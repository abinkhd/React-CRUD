import { TextField } from "@mui/material";
import React from "react";

const Input = ({ onInputChange, name, defaultValue, max, ...rest }) => {
  return (
    <>
      <div>
        <TextField
          style={{ display: "flex", alignItems: "center" }}
          {...rest}
          id={name}
          max={max}
          defaultValue={defaultValue}
          key={defaultValue}
          onChange={onInputChange}
          variant="standard"
        />
      </div>
    </>
  );
};

export default Input;
