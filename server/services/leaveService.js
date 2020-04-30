const leaveRec = require("../../models/").EmployeeLeaves;
const logger = require("tracer").colorConsole();

module.exports = {
  async fetchLeaveRec(eId) {
    try {
      const leaveRecs = leaveRec.findAll({
        where: { e_id: eId.eId },
      });
      return leaveRecs;
    } catch (error) {
      return error;
    }
  },
  async createLeaveRec(leaveDetails) {
    try {
      //   logger.info(leaveDetails);
      const leave = await leaveRec.create(leaveDetails);
      return {
        leave,
      };
    } catch (error) {
      return {
        error,
      };
    }
  },

  async delLeaveRec(leaveDetails) {
    try {
      const delRecord = await leaveRec.destroy({
        where: { id: leaveDetails.id },
      });
      return delRecord;
    } catch (error) {
      return error;
    }
  },
};
