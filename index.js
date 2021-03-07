// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username'
        
    },
    {
        type: 'input',
        message: 'Type in the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How can this project be used?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Does this project have any installation required? If so what are the instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Does this project have any contributor?',
        name: 'contributor'
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: [
            'MIT'
        ]
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'There is any test for this project?',
        name: 'test'
    }
    ])
    .then((response) => {
        fs.writeFile('NEW README.md', generateREADME(response), (err) => {
            if (err) {
            return console.log(err);
            } else {
                console.log('Your file has been successfully created!')
            }
        })
    })