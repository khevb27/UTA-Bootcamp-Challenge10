const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub(){
        return this.github;
    }

    getSpecial() {
        return `GitHub: <a href="https://github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a>`;
    };

    getIcon() {
        return `fa-glasses`;
    };
    
    getRole(){
        return 'Engineer';
    };
};

module.exports = Engineer;