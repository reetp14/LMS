const logger = require("tracer").colorConsole();
const leaveService = require("../services/leaveService");

module.exports = {
  async reqLeaveRecsApi(req, res) {
    try {
      console.log(req.body);
      const leaveRecs = await leaveService.fetchLeaveRec(req.body);
      return res.status(200).json({ leaveRecs });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
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
      console.log(req.body);
      const delRecord = await leaveService.delLeaveRec(req.body);
      return res.json({ delRecord });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async editLeaveRecApi(req, res) {
    try {
      console.log(req.body);
      const editRec = await leaveService.editLeaveRec(req.body);
      return res.json({ editRec });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
