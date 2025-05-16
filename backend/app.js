const express = require("express");
const cors = require("cors");
const chartRoutes = require("./routes/ChartRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/charts", chartRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;


