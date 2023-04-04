const Employee = require('../lib/Employee');

const employee = new Employee("Jane", 5117, "jane@email.com");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should take name, id, and email values and create a new object", () => {
            
            expect(employee.name).toEqual("Jane");
            expect(employee.id).toEqual(5117);
            expect(employee.email).toEqual("jane@email.com");
        });
    });
    
    describe("get methods", () => {
        it("should return the corresponding values of the employee their called on.", () => {
            
            expect(employee.getName()).toEqual("Jane");
            expect(employee.getId()).toEqual(5117);
            expect(employee.getEmail()).toEqual("jane@email.com");
        });
    });

    describe("getRole method", () => {
        it("should return 'Employee' on variables of the Employee class.", () => {

            const notEmployee = "Employee"
            
            expect(employee.getRole()).toEqual("Employee");
            expect(() => notEmployee.getRole()).toThrow(Error);
        });
    });
});