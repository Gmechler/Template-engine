const inquirer = require("inquirer");
// const jest = require("Jest");
// const util = require("util");
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
const basicHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Team Profile</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
    
        <!-- Bootstrap CSS -->
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <h1
          class="col-12 py-4 display-4 text-center my-4"
          style="background-color: aqua; color:black"
        >
          Dev Team
        </h1>
        <div id="managerDis"></div>
        <div id="engineerDis"></div>
        <div id="interndis"></div>
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;

fs.writeFile("index.html", basicHtml, function(err) {
  if (err) throw err;
});

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
        name: "github",
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
        var manager = new Manager(
          ID,
          answers.name,
          answers.email,
          answers.officeNum
        );
        Managers.push(manager);
        console.log("New manager employee added");
        endPrompt();
      }

      if (answers.position === "Engineer") {
        var engineer = new Engineer(
          ID,
          answers.name,
          answers.email,
          answers.github
        );
        Engineers.push(engineer);
        console.log("New engineer employee added");
        endPrompt();
      }

      if (answers.position === "Intern") {
        var intern = new Intern(
          ID,
          answers.name,
          answers.email,
          answers.schoolName
        );
        Interns.push(intern);
        console.log("New intern employee added");
        endPrompt();
      }
    });
};

function endPrompt() {
  () =>
    inquirer
      .prompt({
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
        name: "closePrompt"
      })
      .then(function(answers) {
        if (answers.closePrompt === "Yes") {
          promptForBasicInfo();
        } else {
          for (i = 0; i < Engineers.length; ++i) {
            const EngineerCard = `
        <div class="row">
        <div class="card" style="width: 18rem">
            <div class="card-body" style="background-color:aqua; color: black;">
            <h5 class="card-title text-center">Name of Employee</h5>
            <p class="card-text text-center">Job Title</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${ID}</li>
            <li class="list-group-item">EMAIL: ${Engineers[i].email}</li>
            <li class="list-group-item">Github Profile: ${Engineers[i].github}</li>
            </ul>
        </div>
        </div>
        `;
            let element = document.getElementById("engineerDis");
            document.element.innerHTML(EngineerCard);
          }
        }
      });
}

promptForBasicInfo();
