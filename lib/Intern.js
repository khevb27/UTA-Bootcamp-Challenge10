const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getSpecial() {
    return `<span>School: ${this.getSchool()}</span>`;
  }

  getIcon() {
    return `fa-user-graduate`;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
