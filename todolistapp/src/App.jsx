import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  function editItem(id, newText) {
    setItems((prevItems) => {
      return prevItems.map((item, index) => {
        return index === id ? newText : item;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
                onEdit={editItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
