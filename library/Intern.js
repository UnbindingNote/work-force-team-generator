//requires Employee, which it gets from Employee.js, because it's being used here, just like in Engineer.js - but that one's not being used here.
const Employee= require("./Employee");

//Intern extends Employee, because it builds on the Employee class, but it's different from Engineer.js, because they're probably not Engineers yet - so they have school names instead of github links.
class Intern extends Employee{
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Unpaid Intern";
  }
}

//exporting Intern to be used elsewhere, like the Engineer class before it, and especially the Employee class before that - as it uses Employee and not Engineer - because they're different.
module.exports = Intern;
