//requires the Intern class to test, because it's testing the parts of the Intern generation (which extends on Employee, but is different from Engineer), to be sure information is entering correctly, which it hopefully is, otherwise the test yells at me, because then there's something wrong and it needs to be fixed, so we have the tests to test that.
const Intern = require("../library/Intern");

//dictates the order of testing, the testing will go in this order, because that's the order it's been written, so it will run in this order, which is the most beneficial order, so the test is structured in this order, because it's the order information will be entered, so I'd like it to test the inputs in that order, so it is structured this way.
describe("Intern Test", () => {
    it("hopefully returns intern instance as an object", () => {
        const intern = new Intern();
        expect(typeof(intern)).toEqual('object');
    });

    it("hopefully returns the school of the intern", () => {
        const school = "James";
        const intern = new Intern('James', 1, 'Jvonlienen@yahoo.com', school);
        expect(intern.getSchool()).toEqual(school);
    });

    it("hopefully returns the role of the intern", () => {
        const returnValue = 'Intern';
        const intern = new Intern();
        expect(intern.getRole()).toEqual(returnValue);
    });
});