//requires the Engineer class to test, because it's testing the parts of the Engineer generation (which extends on Employee), to be sure information is entering correctly, which it hopefully is, otherwise the test yells at me, because then there's something wrong and it needs to be fixed, so we have the tests to test that.
const Engineer = require("../library/Engineer");

//dictates the order of testing, the testing will go in this order, because that's the order it's been written, so it will run in this order, which is the most beneficial order, so the test is structured in this order, because it's the order information will be entered, so I'd like it to test the inputs in that order, so it is structured this way.
describe("Engineer Test", () => {
    it("should check if engineer instance returns as an object", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toEqual('object');
    });

    it("should return the GitHub of the engineer", () => {
        const github = "unbindingnote";
        const engineer = new Engineer('James', 1, 'jvonlienen@yahoo.com', github);
        expect(engineer.getGithub()).toEqual(github);
    });

    it("should return the role of the engineer", () => {
        const returnValue = 'Engineer';
        const engineer = new Engineer();
        expect(engineer.getRole()).toEqual(returnValue);
    });
});