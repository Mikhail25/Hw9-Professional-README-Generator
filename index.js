// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your projects name?",
                    "Please write a short description of your project?",
                    "What kind of license should your project have?",
                    "What command should be run to install dependencies?",
                    "What command should be run to run tests?",
                    "What does the user need to know about using the repo?",
                    "What does the user need to know about contributing to the repo?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    const contents = generateMarkdown(data);

    fs.appendFile(fileName+'.md', contents, (err) => {
        err ? console.error(err) : console.log('Commit logged!');
    });
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],

            },
            {
                type: 'list',
                name: 'license',
                message: questions[2],                
                choices: ['Apache', 
                'BSD 3-Clause',
                'BSD 2-Clause',
                'MIT',
                'Mozilla Public License 2.0',
                'None'],
            },
            {
                type: 'input',
                name: 'commDepend',
                message: questions[3],

            },
            {
                type: 'input',
                name: 'commTests',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'repoKnow',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'repoContribute',
                message: questions[6],
            },
            
        ])
        .then((data) => {
            writeToFile(data.projName, data);
        });

}

// Function call to initialize app
init();
