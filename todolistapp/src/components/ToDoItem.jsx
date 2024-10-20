import React, { useState, useEffect } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(props.text);

  useEffect(() => {
    setNewText(props.text);
  }, [props.text]); 

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  function handleChange(event) {
    setNewText(event.target.value);
  }

  function handleSaveClick() {
    props.onEdit(props.id, newText);
    setIsEditing(false);
  }

  function handleToggleCompleted() {
    setIsDone((prevValue) => !prevValue);
  }

  return (
    <div className="todoitem">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={handleChange}
          className="form-input"
        />
      ) : (
        <li
          onClick={handleToggleCompleted}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {props.text}
        </li>
      )}
      <button className="list-button" onClick={handleEditClick}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing && (
        <button className="list-button" onClick={handleSaveClick}>
          Save
        </button>
      )}
      <button className="list-button" onClick={() => props.onChecked(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
