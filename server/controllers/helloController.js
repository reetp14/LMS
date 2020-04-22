const employee = require("../../models").Employees;

module.exports = {
  sendHello(req, res) {
    console.log("respose sent");
    res.status(200).send("hello Bijay");
  },

  async sendDB(req, res) {
    employee.findAll().then(function (employee) {
      res.status(200).json(employee);
    });
  },
};
