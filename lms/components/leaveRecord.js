import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export default function note(props) {
  // function handleDel(key) {
  //   props.delete(key);
  // }

  var noteEntries = props.rec;
  console.log(noteEntries);
  var noteItems = noteEntries.map(createNote);

  function createNote(rec) {
    return (
      <Card id={rec.id} className={props.cardstyle}>
        <Typography variant="h5" style={{ margin: "10px" }}>
          {rec.start_date} <br />
          {rec.end_date}
          <br />
          {rec.e_id}
          <br />
          {rec.l_id}
          <br />
        </Typography>
        <br />

        <div className={props.buttonWrapper}>
          {/* <Button
            variant="contained"
            color="primary"
            onClick={() => handleEdit(rec.key, no.text)}
            style={{ fontSize: "6px", margin: "10px" }}
          >
            edit
          </Button> */}
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDel(rec.key)}
            style={{ fontSize: "6px", margin: "10px" }}
          >
            delete
          </Button> */}
        </div>
      </Card>
    );
  }

  return <div className={props.cardwrap}>{noteItems}</div>;
}
