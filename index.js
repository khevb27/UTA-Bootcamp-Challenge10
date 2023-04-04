const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { generateDiv, generateHTML } = require("./src/template");

const teamLead = new Manager();

const buildTeam = (newEmployee) => {
  switch (newEmployee.getRole()) {
    case "Manager":
      inquirer
        .prompt([
          {
              type: "input",
              name: "name",
              message: "Please enter the team manager's name:",
          },

          {
            type: "input",
            name: "id",
            message: "ID:",
          },

          {
            type: "input",
            name: "email",
            message: "Email:",
          },

          {
            type: "input",
            name: "office",
            message: "Office number:",
          },

          {
            type: "list",
            name: "next",
            message: "Would you like to add another emloyee?",
            choices: ["Engineer", "Intern", "No more employees."],
          },
        ])
        .then((res) => {
          newEmployee.name = res.name;
          newEmployee.id = res.id;
          newEmployee.email = res.email;
          newEmployee.officeNumber = res.office;

          generateDiv(newEmployee);
          checkNext(res.next);
        });
      break;
    case "Engineer":
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Please enter this engineer's name:",
          },

          {
            type: "input",
            name: "id",
            message: "ID:",
          },

          {
            type: "input",
            name: "email",
            message: "Email:",
          },

          {
            type: "input",
            name: "github",
            message: "GitHub username:",
          },

          {
            type: "list",
            name: "next",
            message: "Would you like to add another emloyee?",
            choices: ["Engineer", "Intern", "No more employees."],
          },
        ])
        .then((res) => {
          newEmployee.name = res.name;
          newEmployee.id = res.id;
          newEmployee.email = res.email;
          newEmployee.github = res.github;

          generateDiv(newEmployee);
          checkNext(res.next);
        });
      break;
    case "Intern":
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Please enter this intern's name:",
          },

          {
            type: "input",
            name: "id",
            message: "ID:",
          },

          {
            type: "input",
            name: "email",
            message: "Email:",
          },

          {
            type: "input",
            name: "school",
            message: "School:",
          },

          {
            type: "list",
            name: "next",
            message: "Would you like to add another emloyee?",
            choices: ["Engineer", "Intern", "No more employees."],
          },
        ])
        .then((res) => {
          newEmployee.name = res.name;
          newEmployee.id = res.id;
          newEmployee.email = res.email;
          newEmployee.school = res.school;

          generateDiv(newEmployee);
          checkNext(res.next);
        });
      break;
  }
};

const checkNext = (str) => {
  switch (str) {
    case "Engineer":
      const newEngineer = new Engineer();
      buildTeam(newEngineer);
      break;
    case "Intern":
      const newIntern = new Intern();
      buildTeam(newIntern);
      break;
    default:
      generateHTML();
  }
};

buildTeam(teamLead);
