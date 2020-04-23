const express = require("express");
const router = express.Router();
const helloController = require("./controllers/helloController");
const employeeController = require("./controllers/employeeController");

router.get("/hello", helloController.sendHello);
// router.get("/session", employeeController.sessionApi);
router.post("/createEmp", employeeController.createEmployeeapi);
router.post("/auth", employeeController.empAuthapi);

module.exports = router;
