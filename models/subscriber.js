const mongoose = require("mongoose"),
  subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
  });

module.exports = mongoose.model("Subscriber", subscriberSchema);
