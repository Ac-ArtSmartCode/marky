const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  prod_name: String,
  prod_price: Number,
  images: String,
  img_url: String,
  create_by: {
    img_url: String,
    image: { type: String, default: "profile.jpg" },
    name: { type: String, default: "marky" },
  },
});

module.exports = mongoose.model("products", schema);
