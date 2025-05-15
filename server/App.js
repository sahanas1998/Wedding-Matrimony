const express = require("express");
const cors = require("cors");
const chartRoutes = require("./routes/ChartRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/charts", chartRoutes);

module.exports = app;
