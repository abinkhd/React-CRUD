import { TextField } from "@mui/material";
import React from "react";

const Input = ({
  onInputChange,
  id,
  defaultValue,
  max,
  maxLength,
  ...rest
}) => {
  return (
    <>
      <div>
        <TextField
          id={id}
          onChange={onInputChange}
          inputProps={{ maxLength: maxLength, max: max }}
          style={{ display: "flex", alignItems: "center" }}
          variant="standard"
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
