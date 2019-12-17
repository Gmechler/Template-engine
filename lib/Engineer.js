const eployee = Require("./Employee");

class Engineer extends eployee {
  construtor(ID, name, email, officenumber) {
    super(ID, name, email, "Engineer");
    this.officenumber = officenumber;
  }
}

module.exports = Engineer;
