import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Paper, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #6beffe 50%, #53ffb8a8 100%)",
  },
  loginbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    margin: theme.spacing(3),
    width: theme.spacing(30),
    height: theme.spacing(40),
  },
  textfield: {
    backgroundColor: "white",
    margin: "16px",
  },
  paper: {
    backgroundColor: "white",
    borderRadius: "14px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Login() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Paper elevation={14} className={classes.paper}>
          <div className={classes.loginbox}>
            <Avatar color="primary" className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography variant="h5"> SignIn</Typography>
            <TextField
              className={classes.textfield}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emailId"
              label="Email Address"
              name="emailId"
              // value={loginDetails.emailId}
              // onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="Password"
              name="password"
              // value={loginDetails.emailId}
              // onChange={handleChange}
              autoComplete="password"
              autoFocus
            />
            <Button variant="contained" color="primary">
              Login
            </Button>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              New to eLMS? <Link href="/signup">Register</Link>
            </Typography>
          </div>
        </Paper>
      </CssBaseline>
    </div>
  );
}
