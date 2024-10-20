import React, { useState } from "react";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(props.text);

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

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={handleChange}
          className="edit-input" 
        />
      ) : (
        <li>{props.text}</li>
      )}
      <button onClick={handleEditClick}>{isEditing ? "Cancel" : "Edit"}</button>
      {isEditing && <button onClick={handleSaveClick}>Save</button>}
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
