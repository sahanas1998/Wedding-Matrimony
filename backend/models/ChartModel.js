const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  id: String,
  sex: String,
  religion: Number,
  caste: String,
  image: String,
  chartData: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chart", chartSchema);
