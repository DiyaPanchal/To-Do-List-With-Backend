// InputArea.jsx
import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    props.onAdd(inputText); // Call the add function from App.jsx
    setInputText(""); // Clear the input field after adding
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
