const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDoList", TodoSchema);
