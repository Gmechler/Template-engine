const Employee = require("./Employee");

class Intern extends Employee {
  constructor(ID, name, email, school) {
    super(ID, name, email, "Intern");
    this.school = school;
  }
}

module.exports = Intern;
