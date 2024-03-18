import { TextField, Button, Paper, Avatar, Grid } from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const endPoint = process.env.REACT_APP_API_URL;
  async function authenticateUser() {
    try {
      const res = await axios.post(endPoint, {
        username,
        password,
      });
      const { token: jwt } = res.data;
      localStorage.setItem("token", jwt);
      navigate("/home");
    } catch (ex) {
      if (
        ex.response &&
        ex.response.status >= 400 &&
        ex.response &&
        ex.response.status < 500
      ) {
        console.log(ex.message);
        setError("Invalid Username or Password");
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    authenticateUser();
    // navigate("/home");
  };

  const paperStyle = { height: 300, width: 300 };

  return (
    <div className="form">
      <Paper elevation={10} square={false} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={{ bgcolor: "#1976d2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="username"
                label="Username"
                variant="standard"
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                variant="standard"
                type="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>

            <Button
              style={{ margin: "5px" }}
              disabled={!username || !password}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
          <p>{error}</p>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginForm;
