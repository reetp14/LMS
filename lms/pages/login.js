import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Paper, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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

  const [loginDetails, setLoginDetails] = useState({
    emailId: "",
    password: "",
  });

  function handleChange(event) {
    console.log(event.target.name);
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  }

  const [alertToggle, setAlertToggle] = useState({
    state: false,
    message: " ",
  });

  function handleClose() {
    setAlertToggle({ ...alertToggle, state: false, message: "" });
    console.log(alertToggle);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      email: loginDetails.email,
      password: loginDetails.password,
    };
    console.log(payload);
    const body = await loginReq("http://localhost:80/app/auth", payload);
    if (body.auth === true) {
      router.push("/dashboard");
    } else {
      setAlertToggle({
        state: true,
        message: body.errmsg,
      });
    }
  }

  async function loginReq(url = "", payload) {
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
    console.log(body.auth);
    return body;
  }

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
              id="email"
              label="Email Address"
              name="email"
              value={loginDetails.email}
              onChange={handleChange}
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
              value={loginDetails.password}
              onChange={handleChange}
              autoComplete="password"
              autoFocus
            />
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                console.log("clicked");
                {
                  handleSubmit(event);
                }
              }}
            >
              Login
            </Button>
            <AlertDialog
              open={alertToggle.state}
              message={alertToggle.message}
              closeAlert={handleClose}
            />
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              New to eLMS? <Link href="/signup">Register</Link>
            </Typography>
          </div>
        </Paper>
      </CssBaseline>
    </div>
  );
}
