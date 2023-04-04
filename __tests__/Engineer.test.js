const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

const employee = new Engineer("Jane", 5117, "jane@email.com", "engineer_jane");
const employee2 = new Engineer("Mary", 883, "mary@email.com", "engineer_mary");

describe("Engineer class", () => {
    describe("Initialization", () => {
        it("should take name, id, email, and github values and create a new object", () => {
            
            expect(employee.name).toEqual("Jane");
            expect(employee.id).toEqual(5117);
            expect(employee.email).toEqual("jane@email.com");
            expect(employee.github).toEqual("engineer_jane");
        });
    });
    
    describe("getGithub method", () => {
        it("should return the github value of the Engineer-subclass object it's called on", () => {
            
            expect(employee.getGithub()).toEqual("engineer_jane");
            expect(employee2.getGithub()).toEqual("engineer_mary");
        });
    });

    describe("getSpecial method", () => {
        it("should return an html string containing the github value of the Engineer-subclass object it's called on.", () => {
            
            expect(employee.getSpecial()).toEqual("GitHub: <a href=\"https://github.com/engineer_jane\" target=\"_blank\">engineer_jane</a>");
            expect(employee2.getSpecial()).toEqual("GitHub: <a href=\"https://github.com/engineer_mary\" target=\"_blank\">engineer_mary</a>");
        });
    });

    describe("getIcon method", () => {
        it("should return string containing the fontAwesome glasses icon class when called on an object of the Engineer subclass.", () => {
            
            expect(employee.getIcon()).toEqual("fa-glasses");
        });
    });

    describe("getRole method", () => {
        it("should return 'Engineer' only on variables of the Engineer subclass.", () => {
            const newEmployee = new Employee()
            
            expect(employee.getRole()).toEqual("Engineer");
            expect(newEmployee.getRole()).not.toEqual("Engineer");
        });
    });
});