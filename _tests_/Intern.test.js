const Intern = require("../library/Intern"); //requiring the class to test

//describing the test and testing each property and methods for the class
describe("Intern Test", () => {
    it("should check if intern instance returns as an object", () => {
        const intern = new Intern();
        expect(typeof(intern)).toEqual('object');
    });

    it("should return the school of the intern", () => {
        const school = "James";
        const intern = new Intern('James', 1, 'Jvonlienen@yahoo.com', school);
        expect(intern.getSchool()).toEqual(school);
    });

    it("should return the role of the intern", () => {
        const returnValue = 'Intern';
        const intern = new Intern();
        expect(intern.getRole()).toEqual(returnValue);
    });
});