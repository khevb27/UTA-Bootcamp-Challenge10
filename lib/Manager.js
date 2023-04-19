const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getSpecial() {
    return `Office Number: ${this.officeNumber}`;
  }

  getIcon() {
    return "fa-mug-hot";
  }
}

module.exports = Manager;
