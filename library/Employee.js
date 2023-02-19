//Employee class, it's the class, for the employee, will be used elsewhere
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

//exporting Employee class, for ease of call, because it'll be used elsewhere, like in the other js pages
module.exports = Employee;
