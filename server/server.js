const express = require("express");
const app = express();
const router = require("./routes.js");
const logger = require("tracer").colorConsole();
const admin_users = require("../models");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(
  "/app",
  async (req, res, next) => {
    logger.info(`${req.method}: ${req.originalUrl}`);
    next();
  },
  router
);

module.exports = app;
