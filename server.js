const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// initialize express
const app = express();

// set up console logging
app.use(morgan("tiny"));

// initialize Mongoose and models
require("./models");
// const User = require("mongoose").model("User");
mongoose.connect("mongodb://localhost:27017/todoApp", { useNewUrlParser: true });

// initialize routes
// NOTE: you have to do this after you initialize your models
app.use(require("./routes"));

//start up server on port 8080
app.listen("8080");
