const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("Initialization", () => {
    it("should create a new object with name, id, email, and school properties", () => {
      const employee = new Intern(
        "Dude",
        4321,
        "dude@email.com",
        "Cool University"
      );
      expect(employee.name).toEqual("Dude");
      expect(employee.id).toEqual(4321);
      expect(employee.email).toEqual("dude@email.com");
      expect(employee.school).toEqual("Cool University");
    });
  });

  describe("getSchool method", () => {
    it("should return the school value of the Intern object it's called on", () => {
      const employee = new Intern(
        "Dude",
        4321,
        "dude@email.com",
        "Cool University"
      );
      const employee2 = new Intern(
        "Kelly",
        1122,
        "kelly@email.com",
        "UT Awesome"
      );

      expect(employee.getSchool()).toEqual("Cool University");
      expect(employee2.getSchool()).toEqual("UT Awesome");
    });
  });

  describe("getSpecial method", () => {
    it("should return an html string containing the school value of the Intern object it's called on", () => {
      const employee = new Intern(
        "Dude",
        4321,
        "dude@email.com",
        "Cool University"
      );
      const employee2 = new Intern(
        "Kelly",
        1122,
        "kelly@email.com",
        "UT Awesome"
      );
    
      expect(employee.getSpecial()).toEqual(
        "<span>School: Cool University</span>"
      );
      expect(employee2.getSpecial()).toEqual("<span>School: UT Awesome</span>");
    });
    
  });

  describe("getIcon method", () => {
    it("should return a string containing the fontAwesome user-graduate icon class when called on an object of the Intern class", () => {
      const employee = new Intern(
        "Dude",
        4321,
        "dude@email.com",
        "Cool University"
      );

      expect(employee.getIcon()).toEqual("fa-user-graduate");
    });
  });

  describe("getRole method", () => {
    it("should return 'Intern' only on variables of the Intern class", () => {
      const employee = new Intern(
        "Dude",
        4321,
        "dude@email.com",
        "Cool University"
      );
      const newEmployee = new Employee();

      expect(employee.getRole()).toEqual("Intern");
      expect(newEmployee.getRole()).not.toEqual("Intern");
    });
  });
});
