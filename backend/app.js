const express = require("express");
const cors = require("cors");
const chartRoutes = require("./routes/ChartRoutes");
const imageRoutes = require("./routes/ImageRoutes")
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/charts", chartRoutes);
app.use("/images" , imageRoutes)
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;


