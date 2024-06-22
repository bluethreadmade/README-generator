// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'description',
        description: 'Describe your project',
    },
    {
        type: 'input',
        name: 'contents',
        description: 'Table of Contents',
    },
    {
        type: 'input',
        name: 'installation',
        description: 'Installation',
    },
    {
        type: 'input',
        name: 'usage',
        description: 'Usage',
    },
    {
        type: 'input',
        name: 'license',
        description: 'License',
    },
    {
        type: 'input',
        name: 'contributing',
        description: 'Contributing',
    },
    {
        type: 'input',
        name: 'tests',
        description: 'Tests',
    },
    {
        type: 'input',
        name: 'questions',
        description: 'Questions',
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
        err ? console.log(err) : console.log('Successfully created a readme')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
