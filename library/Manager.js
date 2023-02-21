//Requires Employee, because it'll be used by Manager
const Employee= require("./employee");

//Manager is extending Employee, that it get from Employee's export, so it can add extra info to it, which will be used elsewhere
class Manager extends Employee{
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

//exporting Manager to be used elsewhere, like the Intern before it, the Engineer before that, and especially the Employee before them all, because it's also an extention of Emplyee - just special because it have office numbers instead of school names or github links.
module.exports = Manager;
