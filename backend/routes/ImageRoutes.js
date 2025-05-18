const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImageController = require("../controllers/ImageController");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const image = multer({ storage });

// Use multer middleware in POST route
router.post("/", image.single("image"), ImageController.createImage);
router.get("/", ImageController.getAllImages);

module.exports = router;
