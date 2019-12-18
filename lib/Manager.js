const Employee = require("./Employee");

class Manager extends Employee {
  constructor(ID, name, email, officeNum) {
    super(ID, name, email);
    this.officeNum = officeNum;
  }
  getOfficeNumber() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
