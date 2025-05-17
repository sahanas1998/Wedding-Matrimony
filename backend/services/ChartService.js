const Chart = require("../models/ChartModel");

exports.createChart = async (data, imageFile) => {
  const chart = new Chart({
    ...data,
    image: imageFile,
  });
  return await chart.save();
};

exports.getAllCharts = async () => {
  const charts = await Chart.find();
  return charts.map((chart) => ({
    ...chart.toObject(),
  }));
};

exports.getChartById = async (id) => {
  const Chart = await Chart.findById(id);
  return { ...chart.toObject() };
};

exports.updateChart = async (id, data) => {
  return await Chart.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteChart = async (id) => await Chart.findByIdAndDelete(id);
