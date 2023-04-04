const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

const employee = new Intern("Jane", 5117, "jane@email.com", "Intern University");
const employee2 = new Intern("Mary", 883, "mary@email.com", "IU Austin");

describe("Intern class", () => {
    describe("Initialization", () => {
        it("should take name, id, email, and school values and create a new object", () => {
            
            expect(employee.name).toEqual("Jane");
            expect(employee.id).toEqual(5117);
            expect(employee.email).toEqual("jane@email.com");
            expect(employee.school).toEqual("Intern University");
        });
    });
    
    describe("getSchool method", () => {
        it("should return the school value of the Intern-subclass object it's called on", () => {

            expect(employee.getSchool()).toEqual("Intern University");
            expect(employee2.getSchool()).toEqual("IU Austin");
        });
    });

    describe("getSpecial method", () => {
        it("should return an html string containing the school value of the Intern-subclass object it's called on.", () => {
            
            expect(employee.getSpecial()).toEqual("School: Intern University");
            expect(employee2.getSpecial()).toEqual("School: IU Austin");
        });
    });

    describe("getIcon method", () => {
        it("should return string containing the fontAwesome user-graduate icon class when called on an object of the Intern subclass.", () => {

            expect(employee.getIcon()).toEqual("fa-user-graduate");
        });
    });

    describe("getRole method", () => {
        it("should return 'Intern' only on variables of the Intern subclass.", () => {
            
            const newEmployee = new Employee()
            
            expect(employee.getRole()).toEqual("Intern");
            expect(newEmployee.getRole()).not.toEqual("Intern");
        });
    });
});