const employee = require("./Employee");

class Manager extends eployee {
  constructor(ID, name, email, github) {
    super(ID, name, email, "Engineer");
    this.github = github;
  }
}

module.exports = Manager;
