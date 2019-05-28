const router = require("express").Router();
const User = require("mongoose").model("User");

// GET all users
router.get("/", (req, res) => {
  //READ all users
  User.find({})
    .then(users => res.send(users))
    .catch(err => console.log(err));
});

// POST a user
router.post("/", (req, res) => {
  const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName });
  // CREATE user in db
  user.save((err, doc) => {
    if (err) console.log(err);
    res.send("Successfully added user");
  });
});

module.exports = router;
