const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Initialization", () => {
    it("should create a new object with the name, id, and email properties", () => {
      const employee = new Employee("Dude", 4321, "dude@email.com");
      expect(employee).toEqual({
        name: "Dude",
        id: 4321,
        email: "dude@email.com",
      });
    });
  });

  describe("getName method", () => {
    it("should return the name property of the employee", () => {
      const employee = new Employee("Dude", 4321, "dude@email.com");
      expect(employee.getName()).toEqual("Dude");
    });
  });

  describe("getId method", () => {
    it("should return the id property of the employee", () => {
      const employee = new Employee("Dude", 4321, "dude@email.com");
      expect(employee.getId()).toEqual(4321);
    });
  });

  describe("getEmail method", () => {
    it("should return the email property of the employee", () => {
      const employee = new Employee("Dude", 4321, "dude@email.com");
      expect(employee.getEmail()).toEqual("dude@email.com");
    });
  });

  describe("getRole method", () => {
    it("should return 'Employee' as the role of the employee", () => {
      const employee = new Employee("Dude", 4321, "dude@email.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
