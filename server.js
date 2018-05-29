const express = require("express");
const morgan = require("morgan");

// Initialize express
const app = express();
// Setup console logging
app.use(morgan("tiny"));

// TODO Initialize Mongoose.
// TODO Define a schema for Todo.

// TODO Write your routes here. Interact with database as necessary.
app.get("/", (req, res) => {
  res.send({ message: "I'm alive!" });
});

// Listen to port 8080
app.listen("8080");
