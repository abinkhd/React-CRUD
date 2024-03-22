import { TextField } from "@mui/material";
import React from "react";

const DefaultInput = ({
  onInputChange,
  name,
  defaultValue,
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
        />
      </div>
    </>
  );
};

export default DefaultInput;
