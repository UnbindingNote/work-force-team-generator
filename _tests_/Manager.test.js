//requires the Manager class to test, because it's testing the parts of the Manager generation (which extends on Employee, but is different from both Engineer and Intern), to be sure information is entering correctly, which it hopefully is, otherwise the test yells at me, because then there's something wrong and it needs to be fixed, so we have the tests to test that.
const Manager = require("../library/Manager"); 

//dictates the order of testing, the testing will go in this order, because that's the order it's been written, so it will run in this order, which is the most beneficial order, so the test is structured in this order, because it's the order information will be entered, so I'd like it to test the inputs in that order, so it is structured this way.
describe("Manager Test", () => {
    it("should check if manager instance returns as an object", () => {
        const manager = new Manager();
        expect(typeof(manager)).toEqual('object');
    });

    it("should return the office number of the manager", () => {
        const officeNumber = "0";
        const manager = new Manager('James', 1, 'Jvonlienen@yahoo.com', officeNumber);
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });

    it("should return the role of the manager", () => {
        const returnValue = 'Manager';
        const manager = new Manager();
        expect(manager.getRole()).toEqual(returnValue);
    });
});