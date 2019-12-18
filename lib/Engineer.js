const Employee = Require("./Employee");

class Engineer extends Employee {
  construtor(ID, name, email, github) {
    super(ID, name, email, "Engineer");
    this.github = github;
  }
}

module.exports = Engineer;
