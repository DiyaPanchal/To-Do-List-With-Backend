const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Create a new to-do item
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    isDone: req.body.isDone,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all to-do items
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a to-do item
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a to-do item
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("To-Do item deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
