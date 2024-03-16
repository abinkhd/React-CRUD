import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Form from "./Form";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Logout } from "./Logout";

const Home = () => {
  const navigate = useNavigate();
  function getCurrentUser() {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (error) {
      return null;
    }
  }
  const data = getCurrentUser();
  useEffect(() => {
    if (!data) navigate("/");
  }, [data, navigate]);

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
