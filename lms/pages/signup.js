import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Paper, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlertDialog from "../components/alertDialog";
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

export default function SignUp() {
  const classes = useStyle();

  const [signDetails, setSignDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [alertToggle, setAlertToggle] = useState({
    state: false,
    message: "",
  });

  function handleChange(event) {
    console.log(event.target.name);
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setSignDetails({ ...signDetails, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      firstName: signDetails.firstName,
      lastName: signDetails.lastName,
      email: signDetails.email,
      password: signDetails.password,
    };
    console.log(payload);
    const body = await signReq("http://localhost:80/app/createEmp", payload);
    setSignDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setAlertToggle({
      state: true,
      message: "SignUp sucessful! Please go back to login page.",
    });
  }

  function handleClose() {
    setAlertToggle({ ...alertToggle, state: false, message: "" });
    console.log(alertToggle);
  }

  async function signReq(url = "", payload) {
    // console.log(JSON.stringify(payload));
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(payload),
    });
    var body = await response.json();

    return body;
  }

  return (
    <div className={classes.root}>
      <CssBaseline>
        <Paper elevation={14} className={classes.paper}>
          <Button>
            <Link href="/">
              <Avatar className={classes.avatar}>
                <KeyboardBackspaceIcon fontSize="large" />
              </Avatar>
            </Link>
          </Button>
          <div className={classes.loginbox}>
            <AccountCircleIcon
              fontSize="large"
              color="primary"
            ></AccountCircleIcon>
            <Typography variant="h6">Sign Up</Typography>

            <TextField
              className={classes.textfield}
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={signDetails.firstName}
              onChange={handleChange}
              autoComplete="FirstName"
              autoFocus
            />
            <TextField
              className={classes.textfield}
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={signDetails.lastName}
              onChange={handleChange}
              autoComplete="lastName"
              autoFocus
            />
            <TextField
              className={classes.textfield}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={signDetails.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              className={classes.textfield}
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="Password"
              name="password"
              value={signDetails.password}
              onChange={handleChange}
              autoComplete="password"
              autoFocus
            />
          </div>
          <Button
            style={{ position: "relative", left: "210px" }}
            onClick={handleSubmit}
          >
            Next
          </Button>
          <AlertDialog
            open={alertToggle.state}
            message={alertToggle.message}
            closeAlert={handleClose}
          ></AlertDialog>
        </Paper>
      </CssBaseline>
    </div>
  );
}
