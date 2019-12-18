const Employee = require("./Employee");

class Manager extends Employee {
  constructor(ID, name, email, officeNum) {
    super(ID, name, email, "Manager");
    this.officeNum = officeNum;
  }
}

module.exports = Manager;
