const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
  id: Number,
  sex: String,
  religion: String,
  caste: String,
  image: String,
  chartData: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chart", chartSchema);
