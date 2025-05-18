const ImageService = require("../services/ImageService");

exports.createImage = async (req, res) => {
  try {
    const imageFile = req.file ? req.file.filename : null;
    const image = await ImageService.createImage(imageFile);
    res.status(201).json(image);
  } catch (err) {
    console.error("Error creating image:", err);
    res.status(500).json({ message: "Failed to create image" });
  }
};

exports.getAllImages = async (req, res) => {
  const images = await ImageService.getAllImages();
  res.json(images);
};
