import React from "react";
import { CardHeader, Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import "../Styles.module.css";

const Login = () => {
  return (
    <Grid
      container
      spacing={5}
      columns={2}
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item>
        <CardHeader title="CRUD App" className="header-style"></CardHeader>
      </Grid>
      <Grid align="center" item>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
