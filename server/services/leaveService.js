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

  async editLeaveRec(leaveDetails) {
    try {
      var editRec = await leaveRec.findOne({
        where: { id: leaveDetails.id },
      });
      editRec.start_date = leaveDetails.start_date;
      editRec.end_date = leaveDetails.end_date;
      editRec.l_id = leaveDetails.l_id;
      await editRec.save();
      await editRec.reload();
      console.log(editRec);
      return editRec;
    } catch (error) {
      return error;
    }
  },
};
