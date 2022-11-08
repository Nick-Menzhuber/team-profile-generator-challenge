//define packages required for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');

//define variable for newly created team
let newTeam = [];

//manager questions array
const managerQs = [
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
    }
]

const decisionPoint = [
    {
        type: 'list',
        name: 'decision',
        message: 'Select a new job type to add to the team, or select "done" if your team is complete:',
        choices: ['Engineer', 'Intern', 'Done']
    }
]

const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the engineer\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the engineer\'s employee ID number:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the engineer\'s email address:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter the engineer\'s GitHub ID:'
    }
]

const internQs = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the intern\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the intern\'s employee ID number:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the intern\'s email address:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter the intern\'s school:'
    }
]


//create function to write HTML file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            console.log(err ? err : "File successfully written!");
        })
    }

//function to initialize app
function init() {
        inquirer
            .prompt(managerQs)
            .then((data) => {
                writeToFile(`./dist/${data.teamName}.html`, new Manager(data))
            })
    }
fs.writeFileSync()
//function call to initialize app
init();