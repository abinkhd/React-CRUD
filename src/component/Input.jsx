import { TextField } from "@mui/material";
import React from "react";

const Input = ({
  onInputChange,
  name,
  defaultValue,
  max,
  maxLength,
  ...rest
}) => {
  return (
    <>
      <div>
        <TextField
          style={{ display: "flex", alignItems: "center" }}
          {...rest}
          id={name}
          defaultValue={defaultValue}
          key={defaultValue}
          onChange={onInputChange}
          variant="standard"
          inputProps={{ maxLength: maxLength, max: max }}
        />
      </div>
    </>
  );
};

export default Input;
