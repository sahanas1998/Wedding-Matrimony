const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => {
      console.log(`Server running on port`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
