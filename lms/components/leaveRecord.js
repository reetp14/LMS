import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export default function note(props) {
  function handleDel(key) {
    props.delete(key);
  }
  function handleEdit(key, text) {
    props.edit(key, text);
  }
  function addLabel(key) {
    props.handleLabel(key);
  }

  var noteEntries = props.entries;
  var noteItems = noteEntries.map(createNote);

  function createNote(note) {
    return (
      <Card id={note.key} className={props.cardstyle}>
        <Typography variant="h5" style={{ margin: "10px" }}>
          {note.text}
        </Typography>
        <br />
        Label: {note.label.join()}
        <div className={props.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addLabel(note.key)}
            style={{ fontSize: "6px", margin: "10px" }}
          >
            add label
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEdit(note.key, note.text)}
            style={{ fontSize: "6px", margin: "10px" }}
          >
            edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDel(note.key)}
            style={{ fontSize: "6px", margin: "10px" }}
          >
            delete
          </Button>
        </div>
      </Card>
    );
  }

  return <div className={props.cardwrap}>{noteItems}</div>;
}
