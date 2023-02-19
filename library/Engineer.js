//requires Employee, because it's being used here
const Employee = require('./Employee');

//Engineer extends Employee, which it's getting from Employee.js, through the exported Employee class, to add details to the Employee being registered
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  
  getRole() {
    return '\'Engineer\'';
  };
}

//exporting Engineer to be used elsewhere, like the Employee class before it, only this one is mostly for display, unlike the Employee one, which is still being used elsewhere
module.exports = Engineer;
