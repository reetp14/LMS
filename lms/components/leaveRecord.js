import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function note(props) {
  function handleDel(key) {
    console.log(key);
    props.delete(key);
  }

  var noteEntries = props.rec;
  console.log(noteEntries);
  var noteItems = noteEntries.map(createNote);

  function createNote(rec) {
    console.log(new Date(rec.end_date) - new Date(rec.start_date));
    return (
      <Card id={rec.id} className={props.cardstyle}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              Leave Start Date
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              Leave End Date
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              Duration
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              Leave Type
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              {rec.start_date}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              {rec.end_date}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              {1 +
                (new Date(rec.end_date) - new Date(rec.start_date)) /
                  (60 * 60 * 24 * 1000)}{" "}
              {" days"}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              style={{ marginLeft: "25px", marginTop: "8px" }}
            >
              {rec.l_id}
            </Typography>
          </Grid>
        </Grid>
        <br />

        <div
          style={{
            justifyContent: "flex-end",
            display: "flex",
            alignItems: "flex-end",
            padding: "8px",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDel(rec.id)}
            style={{ margin: "10px" }}
          >
            delete
          </Button>
        </div>
      </Card>
    );
  }

  return <div className={props.cardwrap}>{noteItems}</div>;
}
