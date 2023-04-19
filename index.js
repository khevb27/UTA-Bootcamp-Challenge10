const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { generateDiv, generateHTML } = require("./src/template.js");

const teamLead = new Manager();

const buildTeam = (newEmployee) => {
  const employeeQuestions = [
    {
      type: "input",
      name: "name",
      message: `Enter the ${newEmployee.getRole().toLowerCase()}'s name:`,
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
  ];

  switch (newEmployee.getRole()) {
    case "Manager":
      employeeQuestions.push({
        type: "input",
        name: "office",
        message: "Office number:",
      });
      break;
    case "Engineer":
      employeeQuestions.push({
        type: "input",
        name: "github",
        message: "GitHub username:",
      });
      break;
    case "Intern":
      employeeQuestions.push({
        type: "input",
        name: "school",
        message: "School:",
      });
      break;
  }

  employeeQuestions.push({
    type: "list",
    name: "next",
    message: "Would you like to add another employee?",
    choices: ["Engineer", "Intern", "No more employees."],
  });

  inquirer.prompt(employeeQuestions).then((res) => {
    newEmployee.name = res.name;
    newEmployee.id = res.id;
    newEmployee.email = res.email;

    switch (newEmployee.getRole()) {
      case "Manager":
        newEmployee.officeNumber = res.office;
        break;
      case "Engineer":
        newEmployee.github = res.github;
        break;
      case "Intern":
        newEmployee.school = res.school;
        break;
    }

    generateDiv(newEmployee);
    checkNext(res.next);
  });
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
