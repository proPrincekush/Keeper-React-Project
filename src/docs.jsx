import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles.css";
function Note(props) {
  function handleClick() {
    props.delt(props.note);
  }

  return (
    <div className="note">
      <h2>{props.note.title}</h2>
      <p>{props.note.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}
export default Note;
