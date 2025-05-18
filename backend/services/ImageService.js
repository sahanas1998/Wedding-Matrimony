const Image = require("../models/ImageModel");

exports.createImage = async (imageFile) => {
  const image = new Image({
    image: imageFile,
  });
  return await image.save();
};

exports.getAllImages = async () => {
  const images = await Image.find();
  return images.map((image) => ({
    ...image.toObject(),
  }));
};
