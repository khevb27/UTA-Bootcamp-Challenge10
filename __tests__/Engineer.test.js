const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("Initialization", () => {
    it("should create a new Engineer object with the given name, id, email, and github properties", () => {
      const name = "Dude";
      const id = 4321;
      const email = "dude@email.com";
      const github = "engineer_dude";

      const employee = new Engineer(name, id, email, github);

      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
      expect(employee.github).toEqual(github);
    });
  });

  describe("getGithub method", () => {
    it("should return the github property of the Engineer object it's called on", () => {
      const github = "engineer_dude";
      const employee = new Engineer("Dude", 4321, "dude@email.com", github);

      expect(employee.getGithub()).toEqual(github);
    });
  });

  describe("getSpecial method", () => {
    it("should return an HTML string with a link to the Engineer's GitHub profile", () => {
      const github = "engineer_dude";
      const employee = new Engineer("Dude", 4321, "dude@email.com", github);
      const expected = `GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a>`;

      expect(employee.getSpecial()).toEqual(expected);
    });
  });

  describe("getIcon method", () => {
    it("should return the fontAwesome icon class for an Engineer object", () => {
      const employee = new Engineer("Dude", 4321, "dude@email.com", "engineer_dude");

      expect(employee.getIcon()).toEqual("fa-glasses");
    });
  });

  describe("getRole method", () => {
    it("should return the role 'Engineer' for an Engineer object", () => {
      const employee = new Engineer("Dude", 4321, "dude@email.com", "engineer_dude");

      expect(employee.getRole()).toEqual("Engineer");
    });

    it("should not return the role 'Engineer' for a generic Employee object", () => {
      const employee = new Employee("John", 1234, "john@email.com");

      expect(employee.getRole()).not.toEqual("Engineer");
    });
  });
});
