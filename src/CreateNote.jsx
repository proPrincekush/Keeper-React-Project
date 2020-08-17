import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setInputText({
      ...inputText,
      [name]: value
    });
  }

  function handleClick(event) {
    console.log(inputText);

    props.takeNote(inputText);
    event.preventDefault();
    setInputText({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={inputText.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={inputText.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}
export default CreateNote;
