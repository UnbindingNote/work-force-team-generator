//requiring Employee class to be used
const Employee = require("./Employee");

//Manager class extending Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

//exporting the class to be required in other .js files
module.exports = Manager;
