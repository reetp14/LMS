const employee = require("../../models/").Employees;
const logger = require("tracer").colorConsole();

module.exports = {
  async createEmployee(employeeDetails) {
    try {
      logger.info(employeeDetails);
      const user = await employee.create(employeeDetails); //db entry
      return {
        user,
      };
    } catch (error) {
      return error;
    }
  },

  async empAuth(loginDetails) {
    try {
      logger.info(loginDetails);
      const uid = await employee.findOne({
        where: { email: loginDetails.email },
      });
      if (uid === null) {
        console.log("auth failed/no user");
        return {
          auth: false,
          errmsg: "User does not exist",
        };
      }
      if (uid !== null && loginDetails.password === uid.password) {
        console.log("auth success");
        console.log(uid);
        return {
          auth: true,
          eID: uid.id,
          eName: uid.firstName,
        };
      } else {
        console.log(uid);
        console.log("auth failed/wrong password");
        return {
          auth: false,
          errmsg: "Wrong Password!",
        };
      }
    } catch (error) {
      logger.info(error);
      return error;
    }
  },

  // async sessionApi(loginDetails){

  // }
};
