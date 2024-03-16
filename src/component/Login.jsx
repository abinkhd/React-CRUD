import React from "react";
import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import "../Styles.module.css";

const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <nav className="navbar justify-content-between header-style">
          <h3>CRUD App</h3>
        </nav>
      </Grid>
      <Grid align="center" item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
