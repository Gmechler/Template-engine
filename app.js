const inquirer = require("inquirer");
const jest = require("Jest");
const util = require("util");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/intern");

var ID = 1000;
const Managers = [];
const Engineers = [];
const Interns = [];
const Employees = [];

var promptForBasicInfo = function() {
  inquirer
    .prompt([
      {
        message: "Please enter the employee name",
        name: "name"
      },
      {
        message: "What is the Employee's Email",
        name: "email"
      },

      {
        type: "list",
        message: "Please choose employee position",
        choices: ["Manager", "Engineer", "Intern"],
        name: "position"
      },
      {
        message: "Please enter Engineer's Github username",
        name: "profileName",
        when: answers => answers.position === "Engineer"
      },
      {
        message: "Please enter Intern's school name ",
        name: "schoolName",
        when: answers => answers.position === "Intern"
      },
      {
        message: "Please enter Manager's office number",
        name: "officeNum",
        when: answers => answers.position === "Manager"
      }
    ])
    .then(function(answers) {
      ID++;
      if (answers.position === "Manager") {
        var Manager = new Manager(
          ID,
          answers.name,
          answers.email,
          answers.officeNum
        );
        Managers.push(Manager);
        return "New manager employee added";
      }
      if (answers.position === "Engineer") {
        var Engineer = new Engineer(
          ID,
          answers.name,
          answers.email,
          answers.profileName
        );
        Engineers.push(Engineer);
        return "New engineer employee added";
      }
      if (answers.position === "Intern") {
        var intern = new Intern(
          ID,
          answers.name,
          answers.email,
          answers.schoolName
        );
        Interns.push(Intern);
        return "New intern employee added";
      }
      endPrompt();
    });
};

function endPrompt() {
  () =>
    inquirer.prompt({
      type: "list",
      message: "Would you like to add another employee?",
      choices: ["Yes", "No"],
      name: closePrompt
    });
  if (answers.closePrompt === "Yes") {
    promptForBasicInfo();
  } else {
  }
}

promptForBasicInfo();
