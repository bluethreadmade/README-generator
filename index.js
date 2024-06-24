// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// resister inquirer searchable list plugin
inquirer.registerPrompt('search-list', require('inquirer-search-list'));
const fs = require("fs");
const badgelinks = require('./badgelinks');
const { title } = require("process");

// set varible to use badgelinks array as the choices array

const licenseChoices = badgelinks;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        description: 'What is the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        description: 'Describe your project',
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
        type: 'search-list',
        message: 'Select License',
        name: 'license',
        choices: licenseChoices.map(license => ({name: license.name, value: license})),
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
        name: 'email',
        description: 'Email Address',
    },
    {
        type: 'input',
        name: 'userName',
        description: 'GitHub username',
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

    // ask the questions
    inquirer
        .prompt(questions)
        .then((answers) => {
            
         // create a variable for the readme content and what should be in it
        const generatereadMEContent = ({ title, description, installation, usage, contributing, tests, userName, email, license }) =>
        
`
# ${title}
${license.link}
## Description
${description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## License
This project is licensed under ${license.name}.
## Contributing
${contributing}
## Tests
${tests}
## Questions
Find me on GitHub at [${userName}](https://github.com/${userName})
Email me at ${email} with any questions!
`

            const readMEContent = generatereadMEContent(answers);

            // call the write to file function to create a file called readme1.md and fill it with the readmecontent
            writeToFile('README1.md', readMEContent);
        },
    );
}

// Function call to initialize app
init();
