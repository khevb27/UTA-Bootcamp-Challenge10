const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

const teamLead = new Manager("Jane", 5117, "jane@email.com", 222);

describe("Manager class", () => {
    describe("Initialization", () => {
        it("should take name, id, email, and officeNumber values and create a new object", () => {
            
            expect(teamLead.name).toEqual("Jane");
            expect(teamLead.id).toEqual(5117);
            expect(teamLead.email).toEqual("jane@email.com");
            expect(teamLead.officeNumber).toEqual(222);
        });
    });

    describe("getSpecial method", () => {
        it("should return an html string containing the officeNumber value of the Manager-subclass object it's called on.", () => {
            
            expect(teamLead.getSpecial()).toEqual("Office Number: 222");
        });
    });

    describe("getIcon method", () => {
        it("should return string containing the fontAwesome mug icon class when called on an object of the Manager subclass.", () => {
            
            expect(teamLead.getIcon()).toEqual("fa-mug-hot");
        });
    });

    describe("getRole method", () => {
        it("should return 'Manager' only on variables of the Manager subclass.", () => {
            const newEmployee = new Employee()
            
            expect(teamLead.getRole()).toEqual("Manager");
            expect(newEmployee.getRole()).not.toEqual("Manager");
        });
    });
});