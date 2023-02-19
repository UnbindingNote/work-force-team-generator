//requires the Employee class to test, because it's testing the parts of the Employee generation, to be sure information is entering correctly, which it hopefully is, otherwise the test yells at me, because then there's something wrong and it needs to be fixed, so we have the tests to test that.
const Employee = require("../library/Employee"); 

//dictates the order of testing, the testing will go in this order, because that's the order it's been written, so it will run in this order, which is the most beneficial order, so the test is structured in this order, because it's the order information will be entered, so I'd like it to test the inputs in that order, so it is structured this way.
describe("Employee Test", () => {
  it("should check if employee instance returns as an object", () => {
    const employee = new Employee();
    expect(typeof employee).toEqual("object");
  });

  it("should return the name of the employee", () => {
    const name = "James";
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name);
  });

  it("should return the id of the employee", () => {
    const id = 1;
    const employee = new Employee("James", id);
    expect(employee.getId()).toEqual(id);
  });

  it("should return the email of the employee", () => {
    const email = "jvonlienen@yahoo.com";
    const employee = new Employee("James", 1, email);
    expect(employee.getEmail()).toEqual(email);
  });

  it("should return the role of the employee", () => {
    const returnValue = "employee";
    const employee = new Employee();
    expect(employee.getRole()).toEqual(returnValue);
  });
});
