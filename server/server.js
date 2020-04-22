const express = require("express");
const app = express();
const router = require("./routes.js");
const logger = require("tracer").colorConsole();
const admin_users = require("../models");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  "/app",
  async (req, res, next) => {
    logger.info(`${req.method}: ${req.originalUrl}`);
    next();
  },
  router
);

module.exports = app;
