import { TextField, Button, Paper, Avatar, Grid, Link } from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Padding } from "@mui/icons-material";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const paperStyle = { height: 300, width: 300 };

  return (
    <Paper elevation={10} square={false} style={paperStyle}>
      <Grid align="center">
        <Avatar sx={{ bgcolor: "#1976d2" }}>
          <LockOutlinedIcon />
        </Avatar>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
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
      </Grid>
    </Paper>
  );
};

export default LoginForm;
