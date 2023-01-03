//requiring Employee class to be used
const Employee = require("./Employee");

//Engineer class extending Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

//exporting the class to be required in other .js files
module.exports = Engineer;
