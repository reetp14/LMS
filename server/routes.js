const express = require("express");
const router = express.Router();
const helloController = require("./controllers/helloController");
const employeeController = require("./controllers/employeeController");
const leaveController = require("./controllers/leaveController");

router.get("/hello", helloController.sendHello);
router.post("/createEmp", employeeController.createEmployeeapi);
router.post("/auth", employeeController.empAuthapi);
router.post("/applylv", leaveController.createLeaveRecApi);
router.post("/deletelv", leaveController.delLeaveRecApi);
router.post("/reqlvrec", leaveController.reqLeaveRecsApi);
router.post("/editlvrec", leaveController.editLeaveRecApi);

module.exports = router;
