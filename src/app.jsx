import React, { useState } from "react";
import * as head from "./header.jsx";
import * as foot from "./footer.jsx";
import Note from "./docs.jsx";
// import Notes from "./note";
import CreateNote from "./CreateNote";

function Appp() {
  const [task, setTask] = useState([]);

  function CreateNotes(note) {
    // console.log(note);
    setTask([...task, note]);
    // console.log(task);
  }

  function deleteTask(newtask) {
    let taskIndex = task.indexOf(newtask);
    console.log(taskIndex);
    if (taskIndex > -1) {
      task.splice(taskIndex, 1);
    }

    setTask([...task]);
  }

  function ShowNotes(note, index) {
    return <Note key={index} note={note} delt={deleteTask} />;
  }

  return (
    <div>
      <head.Header />
      <CreateNote takeNote={CreateNotes} />
      {task.map(ShowNotes)}
      <foot.Foot />
    </div>
  );
}

export { Appp };
