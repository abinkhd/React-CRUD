import React from "react";
import { Grid } from "@mui/material";
import Form from "./Form";
import { Logout } from "./Logout";

const Home = ({ jwt }) => {
  console.log(jwt);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <nav className="navbar justify-content-between header-style">
          <h3>CRUD App</h3>
          <div>
            <Logout />
          </div>
        </nav>
      </Grid>
      <Grid item xs={12}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Home;
