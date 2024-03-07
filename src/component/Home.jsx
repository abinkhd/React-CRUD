import React from "react";
import { Grid } from "@mui/material";
import { Users } from "./Users";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Users</h1>
      </Grid>
      <Grid item xs={4}>
        <h1>Grid3</h1>
      </Grid>
      <Grid item xs={8}>
        <Users />
      </Grid>
    </Grid>
  );
};

export default Home;
