const employee = require("./Employee");

class Intern extends eployee {
  constructor(ID, name, email, school) {
    super(ID, name, email, "Intern");
    this.school = school;
  }
}

module.exports = Intern;
