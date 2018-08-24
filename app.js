const console = require("console");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("./config");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/post");
const staticAsset = require("static-asset");

mongoose
  .connect(
    config.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDb start success!");
  })
  .catch(error => {
    console.error(error);
  });

app.set("view engine", "ejs");
app.use(staticAsset(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/", mainRoutes);
app.use("/post", postRoutes);

module.exports = app;
