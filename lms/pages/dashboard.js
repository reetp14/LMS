import React, { useState, useRef, useEffect } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Notes from "../components/leaveRecord";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "block",
    alignItems: "center",
    minHeight: "100vh",
  },

  appbar: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    minHeight: "48px",
    backgroundColor: "#3fb0b5",
  },
  cardwrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    // minHeight: "40vh",
    // minWidth: "100%",
    margin: "15px",

    position: "relative",
    left: "40px",
  },
  cardbutton: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    // justifyContent: "space-around",
    marginTop: 30,
  },

  filterwrap: {
    display: "flex",
    margin: "15px",
    marginTop: "25px",
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-evenly",
    maxWidth: "600px",
  },

  applybox: {
    display: "flex",

    margin: "12px",
    padding: "12px",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",

    justifyContent: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
var passKey;
export default function App() {
  const leaveRecs = useEffect(await);
  const classes = useStyle();
  //   var id = sessionStorage.getItem("id");
  const inputLabel = React.useRef(null);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    l_id: "",
    e_id: "",
  });

  const [editBox, setEditBox] = useState({
    open: false,
    openEdit: false,
    openEditLabel: false,
    display: "none",
    value: "",
  });

  const [selectedDate, setSelectedDate] = React.useState({
    startDate: new Date("2019-08-18T21:11:54"),
    endDate: new Date("2019-08-18T21:11:54"),
  });

  const handleStartDateChange = (date) => {
    setSelectedDate({ ...selectedDate, startDate: date });
    console.log(selectedDate);
  };
  const handleEndDateChange = (date) => {
    console.log(selectedDate);
    setSelectedDate({ ...selectedDate, endDate: date });
    console.log(selectedDate);
  };

  const [leaveType, setLeaveType] = React.useState("");
  const handleLeaveChange = (event) => {
    setLeaveType(event.target.value);
    console.log(leaveType);
  };

  function openDialog(e) {
    if (!editBox.open) {
      setEditBox({ ...editBox, open: true });
    }
  }

  async function handleApply(e) {
    var payload = {
      start_date: selectedDate.startDate,
      end_date: selectedDate.endDate,
      l_id: leaveType,
      e_id: 1,
    };

    await leaveReq("http://localhost:80/app/applylv", payload);
    console.log(payload);

    setEditBox({ ...editBox, open: false });
  }

  async function leaveReq(url = "", payload) {
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
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Typography variant="h5">Welcome to eLms!</Typography>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ position: "absolute", top: 6, right: 8 }}
          onClick={openDialog}
        >
          Apply Leave
        </Button>
      </AppBar>
      <Dialog open={editBox.open} maxWidth="xl">
        <DialogTitle id="simple-dialog-title">Apply your leaves!</DialogTitle>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.applybox}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="startDate"
              name="startDate"
              label="Select Leave Start Date"
              value={selectedDate.startDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="endDate"
              name="endDate"
              label="Select Leave End Date"
              value={selectedDate.endDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Leave Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={leaveType}
                onChange={handleLeaveChange}
              >
                <MenuItem value={1}>Casual Leaves</MenuItem>
                <MenuItem value={2}>EBL</MenuItem>
                <MenuItem value={3}>Others</MenuItem>
              </Select>
            </FormControl>
          </div>
        </MuiPickersUtilsProvider>
        <Button
          variant="contained"
          color="primary"
          onClick={handleApply}
          style={{
            display: "flex",
            position: "relative",
            width: "50px",
            margin: "10px",
          }}
        >
          Apply
        </Button>
      </Dialog>
    </div>
  );
}
