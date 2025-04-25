const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  gst: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Checkout", checkoutSchema);
