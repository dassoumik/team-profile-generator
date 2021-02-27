const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require('fs');
const htmlgenerator = require("./dist/htmlgenerator");

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
    },
    {
        type: 'input',
        message: 'Please enter intern school:',
        name: 'internSchool',
    },
];

const choiceQuestion = [{
    type: 'expand',
    message: 'Please enter "a" to add engineer: ',
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
async function init() {
    inquirer
        .prompt(managerQuestions)
        .then((res) => {
            console.log(res);
            const manager = new Manager(res.managerID, res.managerName, res.managerEmail, res.managerOfficeNum)
            employeeArray.push(manager);
            inquirer
                .prompt(choiceQuestion)
                .then((res) => {
                    console.log(res);
                    switchFunction(res)
                })
        })
}

async function callPrompts(role) {
    if (role == "intern") {
        inquirer
            .prompt(internQuestions)
            .then((res) => {
                console.log(res);
                const intern = new Intern(res.internID, res.internName, res.internEmail, res.internSchool);
                employeeArray.push(intern);
                console.log(employeeArray);
                choiceFunction();
            })
    } else if (role == "engineer") {
        inquirer
            .prompt(engineerQuestions)
            .then((res) => {
                console.log(res);
                const engineer = new Engineer(res.engineerID, res.engineerName, res.engineerEmail, res.engineerGitID)
                employeeArray.push(engineer);
                choiceFunction();
            })
    }
}

async function switchFunction(res) {
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

async function choiceFunction() {
    inquirer
        .prompt(choiceQuestion)
        .then((res) => {
            console.log(res);
            switchFunction(res)
        });
}

function buildTeam() {
    for (const element of employeeArray) {
        console.log(element.getRole());
        cardHTML += `<div class="card mt-5 text-center" style="margin: 0 auto; max-width: 12rem;">
      <div class="card-header text-white bg-primary" style="height: 4rem; line-height:.5em;">
          <p>${element.getName()}</p>
          <p>${element.getRole()}</p>
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
    console.log(cardHTML);
    const htmlContent = htmlgenerator(cardHTML);
    writeToFile("./generated-files/index.html", htmlContent);
    return false;
}

// Function call to initialize app
init();