//define packages required for application
const inquirer = require('inquirer');
const fs = require('fs');


//manager questions array
const questions = [
    {
        type: 'input',
        name: 'teamName',
        message: 'Please enter a name for your team:',
      },
      {
          type: 'input',
          name: 'managerName',
          message: 'Please enter the team manager\'s name:',
      },
      {
          type: 'input',
          name: 'managerId',
          message: 'Please enter the team manager\'s employee ID number:',
      },
      {
          type: 'input',
          name: 'managerEmail',
          message: 'Please enter the team manager\'s email address:',
      },
      {
          type: 'input',
          name: 'office',
          message: 'Please enter the office number:',
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
    .prompt(questions)
    .then((data) => {
        writeToFile(`./new_readmes/${data.shortname}README.md`, generateMarkdown(data))
    })
}

//function call to initialize app
init();