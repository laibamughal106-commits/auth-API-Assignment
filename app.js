const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Course Management API is running!"
  });
});

app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

module.exports = app;