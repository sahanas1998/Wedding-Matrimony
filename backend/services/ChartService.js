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
  return { ...Chart.toObject() };
};

exports.updateChart = async (id, data) => {
  return await Chart.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteChart = async (id) => {
  try {
    const deletedChart = await Chart.findOneAndDelete({ id: parseInt(id, 10) });
    return deletedChart;
  } catch (error) {
    throw error; // Pass the error to controller
  }
};
