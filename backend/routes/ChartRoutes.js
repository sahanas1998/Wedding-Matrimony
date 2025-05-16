const express = require("express");
const router = express.Router();
const multer = require("multer");
const ChartController = require("../controllers/ChartController");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Use multer middleware in POST route
router.post("/", upload.single("image"), ChartController.createChart);
router.get("/", ChartController.getAllCharts);
router.get("/:id", ChartController.getChart);
router.put("/:id", upload.single("image"), ChartController.updateChart);
router.delete("/:id", ChartController.deleteChart);

module.exports = router;
