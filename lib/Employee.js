class Employee {
  constructor(ID, name, email) {
    this.ID = ID;
    this.name = name;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.ID;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
