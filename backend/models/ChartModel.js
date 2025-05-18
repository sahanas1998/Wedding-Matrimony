const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  id: {
    type: Number, // or String, depending on how you store it
    required: true,
    unique: true,
  },
  sex: String,
  religion: String,
  caste: String,
  image: String,
  chartData: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chart", chartSchema);
