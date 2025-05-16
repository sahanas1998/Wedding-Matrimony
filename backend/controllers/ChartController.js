const ChartService = require("../services/ChartService");

exports.createChart = async (req, res) => {
  try {
    const imageFile = req.file ? req.file.filename : null;
    const chart = await ChartService.createChart(req.body, imageFile);
    res.status(201).json(chart);
  } catch (err) {
    console.error("Error creating chart:", err);
    res.status(500).json({ message: "Failed to create chart" });
  }
};

exports.getAllCharts = async (req, res) => {
  const charts = await ChartService.getAllCharts();
  res.json(charts);
};

exports.getChart = async (req, res) => {
  const chart = await ChartService.getChartById(req.params.id);
  res.json(chart);
};

exports.updateChart = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // If an image is uploaded, include it in the update
    if (req.file) {
      updateData.imagePath = req.file.path;
    }

    const updated = await ChartService.updateChart(id, updateData);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating chart:", error);
    res
      .status(500)
      .json({ message: "Failed to update chart", error: error.message });
  }
};

exports.deleteChart = async (req, res) => {
  await ChartService.deleteChart(req.params.id);
  res.json({ message: "chart deleted" });
};
