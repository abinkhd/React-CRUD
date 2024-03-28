import { TextField } from "@mui/material";
import React from "react";

const inputStyle = { display: "flex", alignItems: "center" };
const Input = ({ ...rest }) => {
  return (
    <div>
      <TextField style={inputStyle} variant="standard" {...rest} />
    </div>
  );
};

export default Input;
