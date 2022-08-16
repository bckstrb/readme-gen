// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a description of your app?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "How is your app used?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Which license does your app have?",
    name: "license",
    choices: ["Apache 2.0", "GNU v3.0", "MIT", "Eclipse 2.0"],
  },
  {
    type: "input",
    message: "Who are your contributors?",
    name: "contributors",
  },
  {
    type: "input",
    message: "What kind of testing has been run for your app?",
    name: "tests",
  },
  {
    type: "input",
    message: "Github URL?",
    name: "github",
  },
  {
    type: "input",
    message: "Email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile(`README.md`, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile(`README.md`, generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
