//requiring Employee class to be used
const Employee = require("./Employee");

//Intern class extending Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

//exporting the class to be required in other .js files
module.exports = Intern;
