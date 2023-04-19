const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

const teamLead = new Manager("Dude", 4321, "Dude@email.com", 333);

describe("Manager class", () => {
    describe("Initialization", () => {
        it("should create a new Manager object with name, id, email, and officeNumber values", () => {
            expect(teamLead).toEqual({
                name: "Dude",
                id: 4321,
                email: "Dude@email.com",
                officeNumber: 333
            });
        });
    });

    describe("getSpecial method", () => {
        it("should return an html string containing the officeNumber value of the Manager object it's called on.", () => {
            expect(teamLead.getSpecial()).toEqual("Office Number: 333");
        });
    });

    describe("getIcon method", () => {
        it("should return the fontAwesome mug icon class when called on a Manager object.", () => {
            expect(teamLead.getIcon()).toEqual("fa-mug-hot");
        });
    });

    describe("getRole method", () => {
        it("should return 'Manager' only on Manager objects.", () => {
            const newEmployee = new Employee()
            expect(teamLead.getRole()).toEqual("Manager");
            expect(newEmployee.getRole()).not.toEqual("Manager");
        });
    });
});
