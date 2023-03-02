const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  long: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", DataSchema);
