const Employee = require("./Employee");

class Intern extends Employee {
  constructor(ID, name, email, school) {
    super(ID, name, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
