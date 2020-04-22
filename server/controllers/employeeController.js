const logger = require("tracer").colorConsole();
const employeeService = require("../services/employeeService");

module.exports = {
  async createEmployeeapi(req, res) {
    try {
      console.log("ok");
      console.log(req.body);
      const user = await employeeService.createEmployee(req.body);
      //calling service
      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async empAuthapi(req, res) {
    try {
      const auth = await employeeService.empAuth(req.body);
      return res.status(200).json(auth);
    } catch (error) {
      return res.status(400).json("auth failed");
    }
  },
};
