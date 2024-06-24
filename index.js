// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// resister inquirer searchable list plugin
inquirer.registerPrompt('search-list', require('inquirer-search-list'));
const fs = require("fs");
const badgelinks = require('./badgelinks');

// set varible to use badgelinks array as the choices array

const licenseChoices = badgelinks;

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
    // {
    //     type: 'input',
    //     name: 'installation',
    //     description: 'Installation',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     description: 'Usage',
    // },
    {
        type: 'search-list',
        message: 'Select License',
        name: 'license',
        choices: licenseChoices.map(license => ({name: license.name, value: license})),
        description: 'License',
    },
    // {
    //     type: 'input',
    //     name: 'contributing',
    //     description: 'Contributing',
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     description: 'Tests',
    // },
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
            
        // pull license name from license answer
        const selectedLicenseName = JSON.stringify(answers.license.name, null, "  ");

        // pull license link from license answer - creates badge
        const selectedLicenseLink = JSON.stringify(answers.license.link, null, "  ");

    // create a variable for the readme content and what should be in it
    const generatereadMEContent = ({ description, contents }) =>
        
        `${selectedLicenseLink}
        ${selectedLicenseName}
# ${description}
## ${contents}`

            const readMEContent = generatereadMEContent(answers);

            // call the write to file function to create a file called readme1.md and fill it with the readmecontent
            writeToFile('README1.md', readMEContent);
        },
    );
}

// Function call to initialize app
init();
