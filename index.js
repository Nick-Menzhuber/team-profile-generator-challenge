//define packages required for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee')


//manager questions array
const managerQuestions = [
    {
        type: 'input',
        name: 'teamName',
        message: 'Please enter a name for your team:',
      },
      {
          type: 'input',
          name: 'name',
          message: 'Please enter the team manager\'s name:',
      },
      {
          type: 'input',
          name: 'id',
          message: 'Please enter the team manager\'s employee ID number:',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Please enter the team manager\'s email address:',
      },
      {
          type: 'input',
          name: 'phone',
          message: 'Please enter your office phone number:',
      },
    ]

//create function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log( err ? err : "File successfully written!");
    })
}

//function to initialize app
function init() {
    inquirer
    .prompt(managerQuestions)
    .then((data) => {
        writeToFile(`./dist/${data.teamName}.html`, Manager(data), Employee(data))
    })
}

//function call to initialize app
init();