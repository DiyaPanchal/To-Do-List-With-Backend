const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://todolist-two-sooty-97.vercel.app/"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use('/api/todos', todoRoutes); 

app.get("/", (req, res) => {
  res.send("To-Do List API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
