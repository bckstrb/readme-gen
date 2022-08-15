// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
    {
        type: 'input',
        message: "What is the title of your project?",
        title: 'title'
    },
    {
        type: 'input',
        message: "What is a description of your app?",
        title: 'description'
    },
    {
        type: 'input',
        message: "How is your app used?",
        title: 'usage'
    },
    {
        type: 'input',
        message: "Which license does your app have?",
        title: 'license'
    },
    {
        type: 'input',
        message: "Who are your contributors?",
        title: 'contributors'
    },
    {
        type: 'input',
        message: "What kind of testing has been run for your app?",
        title: 'title'
    },
    {
        type: 'input',
        message: "Github username?",
        title: 'github'
    },
    {
        type: 'input',
        message: "Email address?",
        title: 'email'
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
