//dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const mysql = require("mysql");
const inquirer = require("inquirer");
const pug = require("pug");
const axios = require("axios");

// instance of app
const app = express();
//port
const PORT = process.env.PORT || 3000;

// data
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//routes

server.get("/", function (req, res) {
  res.send("Note Taker!");
});

server.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
