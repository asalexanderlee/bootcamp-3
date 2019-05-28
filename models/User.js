const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, maxlength: 100 },
  lastName: { type: String, maxlength: 100 }
});

module.exports = mongoose.model("User", UserSchema);
