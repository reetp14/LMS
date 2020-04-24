const logger = require("tracer").colorConsole();
const leaveService = require("../services/leaveService");

module.exports = {
  async createLeaveRecApi(req, res) {
    try {
      console.log(req.body);
      const leaveRec = await leaveService.createLeaveRec(req.body);
      return res.status(201).json({ leaveRec });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async delLeaveRecApi(req, res) {
    try {
      const delRecord = await leaveService.delLeaveRec(req.body);
      return res.json({ delRecord });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
