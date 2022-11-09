//define packages required for application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const HTMLgeneration = require('./src/HTMLgeneration');


//define variable for newly created team
let newTeam = [];

//manager questions array, answers get pushed to team array
const newManager = () => {
    return inquirer
        .prompt([{
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
            message: 'Please enter your office phone number:'
        }
        ])
        .then((data => {
            const manager = new Manager(data.teamName, data.name, data.id, data.email, data.phone);
            newTeam.push(manager);
            console.log(`Welcome to the team, ${data.name}!`);
            decisionPoint();
        }))
}

//prompts user to add new team member or say they are done, reroutes as appropriate
const decisionPoint = () => {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'decision',
            message: 'Select a new job type to add to the team, or select "Done" if your team is complete:',
            choices: ['Engineer', 'Intern', 'Done']
        }
        ])
        .then((data) => {
            if (data.decision == 'Engineer') {
                newEngineer();
            } else if (data.decision == 'Intern') {
                newIntern();
            } else {
                console.log('Okay, you\'re all done!')
                writeHTML();
            }
            })
        }

//engineer questions array, answers get pushed to team array
const newEngineer = () => {
        return inquirer
            .prompt([{
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
                message: 'Please enter the engineer\s GitHub ID:'
            }
            ])
            .then((data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
                newTeam.push(engineer);
                console.log(`Welcome to the team, ${data.name}!`);
                decisionPoint();
            }))
    }

    //intern questions array, answers get pushed to team array
    const newIntern = () => {
        return inquirer
            .prompt([{
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
                name: 'school',
                message: 'Please enter the intern\'s school name:',
            }
            ])
            .then((data => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                newTeam.push(intern);
                console.log(`Welcome to the team, ${data.name}!`);
                decisionPoint();
            }))
    }

    //function to create HTML file
    function writeHTML() {
        let page = HTMLgeneration(newTeam);
        fs.writeFile(`./dist/${newTeam[0].teamName}.html`, page, (err) =>
        err ? console.log(err) : console.log('Your team has been created!'))
    }
    //function call to initialize app
    newManager()