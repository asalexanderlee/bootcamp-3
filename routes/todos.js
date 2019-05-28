const router = require("express").Router();
const Todo = require("mongoose").model("Todo");
const mongoose = require("mongoose");

// GET all todos
router.get("/", (req, res) => {
  // READ todos from db
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => console.log(err));
});

// GET completed todos
router.get("/complete", (req, res) => {
  // READ completed todos (todos where completedOn != null) from db
  Todo.find({ completedOn: { $ne: null } })
    .then(todos => res.send(todos))
    .catch(err => console.log(err));
});

// GET incomplete todos
router.get("/incomplete", (req, res) => {
  // READ incomplete todos (todos where completedOn == null) from db
  Todo.find({ completedOn: null })
    .then(todos => res.send(todos))
    .catch(err => console.log(err));
});

// GET a todo by id
router.get("/:_id", (req, res) => {
  // READ requested todo from db
  Todo.find({ _id: mongoose.Types.ObjectId(req.params._id) })
    .then(todo => res.send(todo))
    .catch(err => console.log(err));
});

// POST todo
router.post("/", (req, res) => {
  const todo = new Todo({ description: req.body.text, createdOn: new Date(), completedOn: null });
  // CREATE new todo in db
  todo.save((err, doc) => {
    if (err) console.error(err);
    res.send("Successfully added todo");
  });
});

// DELETE todo by id
router.delete("/:_id", (req, res) => {
  // DELETE todo in db
  Todo.deleteOne({ _id: mongoose.Types.ObjectId(req.params._id) })
    .then(() => res.send("Successfully deleted todo"))
    .catch(err => console.log(err));
});

// POST completion update to todo
router.post("/:_id/complete", (req, res) => {
  // UPDATE completion date in db
  Todo.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params._id) }, { $set: { completedOn: new Date() } })
    .then(() => res.send("Marked todo as complete"))
    .catch(err => console.log(err));
});

// POST updated todo text
router.post("/:_id", (req, res) => {
  // UPDATE todo text in db
  Todo.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params._id) }, { $set: { description: req.body.text } })
    .then(() => res.send("Updated todo description"))
    .catch(err => console.log(err));
});

module.exports = router;
