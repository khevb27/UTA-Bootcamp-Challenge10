const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool(){
        return this.school;
    };

    getSpecial() {
        return `School: ${this.getSchool()}`;
    }

    getIcon() {
        return `fa-user-graduate`;
    };

    getRole(){
        return 'Intern';
    };
};

module.exports = Intern;