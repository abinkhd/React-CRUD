import React from "react";
import { Grid } from "@mui/material";
import Form from "./Form";
import { Logout } from "./Logout";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Home;
