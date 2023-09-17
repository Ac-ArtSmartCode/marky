const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  image: String,
  img_url: String,
});

module.exports = mongoose.model("users", schema);
