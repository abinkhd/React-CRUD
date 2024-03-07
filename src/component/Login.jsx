import React from "react";
import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Grid
      container
      spacing={18}
      columns={3}
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item bgcolor="lightcyan"></Grid>
      <Grid align="center" item>
        <LoginForm />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Login;
