import React from "react";
import { Grid } from "@mui/material";
import Form from "./Form";
import CardHeader from "@mui/material/CardHeader";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CardHeader title="CRUD App" className="header-style"></CardHeader>
      </Grid>
      <Grid item xs={12}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Home;
