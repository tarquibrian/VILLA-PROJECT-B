const mongoose = require("mongoose");

const SystemSchema = new mongoose.Schema({
  counter: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("System", SystemSchema);
