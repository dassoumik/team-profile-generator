const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require('fs');
const htmlgenerator = require("./src/htmlgenerator");

const inquirer = require('inquirer');

const employeeArray = [];
let cardHTML = ``;
// Array of questions for user input
const managerQuestions = [{
        type: 'input',
        message: 'Please enter project manager name: ',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Please enter manager employee ID: ',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'Please enter manager email address: ',
        name: 'managerEmail',
        validate: function (val) {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!val.match(mailformat)) {
                return "Please enter a valid email";
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'Please enter manager office number:',
        name: 'managerOfficeNum',
    },
];

const engineerQuestions = [{
        type: 'input',
        message: 'Please enter engineer name: ',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Please enter engineer employee ID: ',
        name: 'engineerID',
    },
    {
        type: 'input',
        message: 'Please enter engineer email address: ',
        name: 'engineerEmail',
        validate: function (val) {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!val.match(mailformat)) {
                return "Please enter a valid email";
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'Please enter engineer github username:',
        name: 'engineerGitID',
    },
];

const internQuestions = [{
        type: 'input',
        message: 'Please enter intern name: ',
        name: 'internName',

    },
    {
        type: 'input',
        message: 'Please enter intern employee ID: ',
        name: 'internID',
    },
    {
        type: 'input',
        message: 'Please enter intern email address: ',
        name: 'internEmail',
        validate: function (val) {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!val.match(mailformat)) {
                return "Please enter a valid email";
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'Please enter intern school:',
        name: 'internSchool',
    },
];

const choiceQuestion = [{
    type: 'expand',
    message: 'Please enter "a" to add engineer "b" to add intern and "c" to finish: ',
    name: 'choiceName',
    choices: [{
            key: "a",
            name: "addEngineer",
            value: "Add Engineer",
        },
        {
            key: "b",
            name: "addIntern",
            value: "Add Intern",
        },
        {
            key: "c",
            name: "Finish",
            value: "Build Team",
        },
    ]
}];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('HTML logged!'));
}

// Function to initialize app
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((res) => {
            const manager = new Manager(res.managerID, res.managerName, res.managerEmail, res.managerOfficeNum)
            employeeArray.push(manager);
            inquirer
                .prompt(choiceQuestion)
                .then((res) => {
                    switchFunction(res)
                })
        })
}

function callPrompts(role) {
    if (role == "intern") {
        inquirer
            .prompt(internQuestions)
            .then((res) => {
                const intern = new Intern(res.internID, res.internName, res.internEmail, res.internSchool);
                employeeArray.push(intern);
                choiceFunction();
            })
    } else if (role == "engineer") {
        inquirer
            .prompt(engineerQuestions)
            .then((res) => {
                const engineer = new Engineer(res.engineerID, res.engineerName, res.engineerEmail, res.engineerGitID)
                employeeArray.push(engineer);
                choiceFunction();
            })
    }
}

function switchFunction(res) {
    switch (res.choiceName) {
        case "Add Engineer":
            callPrompts("engineer");
            break;
        case "Add Intern":
            callPrompts("intern");
            break;
        case "Build Team":
            buildTeam();
            break;
    }
}

function choiceFunction() {
    inquirer
        .prompt(choiceQuestion)
        .then((res) => {
            switchFunction(res)
        });
}

function buildTeam() {
    for (const element of employeeArray) {
        const role = element.getRole();
        let logo;
        switch (role) {
            case "Manager":
                logo = '<i class="fas fa-award"></i>';
                break;
            case "Engineer":
                logo = '<i class="fas fa-certificate"></i>';
                break;
            case "Intern":
                logo = '<i class="fas fa-cannabis"></i>';
                break;
            default:
                break;
        }
        cardHTML += `<div class="card mt-5 text-center border rounded-lg" style="margin: 0 auto; min-width: 12rem; max-width: 12rem;">
      <div class="card-header text-white bg-primary" style="height: 4rem; line-height:.5em;">
          <p>${element.getName()}</p>
          <p><span>${logo}</span> ${role}</p>
      </div>
      <div class="card-body">
          <h5 class="card-title">ID:${element.getID()}</h5>
          <p class="card-text">Email: <a class="btn" href="mailto:${element.getEmail()}">${element.getEmail()}</a>
          </p>`
        switch (element.getRole()) {
            case "Manager":
                cardHTML += `<p calss="card-text">Office: ${element.offcnum}</p>
              </div>
          </div>`;
                break;
            case "Engineer":
                cardHTML += `<p calss="card-text">Git: <a href="https://github.com/${element.gituserid}" target="_blank">${element.gituserid}</a></p>
              </div>
          </div>`;
                break;
            case "Intern":
                cardHTML += `<p calss="card-text">School: ${element.school}</p>
              </div>
          </div>`;
                break;
        }

    };
    const htmlContent = htmlgenerator(cardHTML);
    writeToFile("./dist/index.html", htmlContent);
    return false;
}

// Function call to initialize app
init();