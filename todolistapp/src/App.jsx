import React, { useState, useEffect } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const response = await fetch("http://localhost:5000/api/todos");
    const data = await response.json();
    setItems(data);
  }

    function addItem(inputText) {
      const newItem = {
        text: inputText,
        isDone: false,
      };
      fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
        
          setItems((prevItems) => [...prevItems, data]);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }

  async function editItem(id, newText) {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });

    if (response.ok) {
      const updatedItem = await response.json();
      setItems((prevItems) =>
        prevItems.map((item) => (item._id === id ? updatedItem : item))
      );
    } else {
      const error = await response.text();
      console.error('Error updating item:', error);
    }
  }

  async function deleteItem(id) {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } else {
      const error = await response.text();
      console.error('Error deleting item:', error);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem) => {
            return (
              <ToDoItem
                key={todoItem._id}
                id={todoItem._id}
                text={todoItem.text}
                isDone={todoItem.isDone}
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
