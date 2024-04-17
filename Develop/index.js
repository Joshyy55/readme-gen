// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input", 
    name: "title", 
    message: "Project Title?", 
}, {
    type: "input", 
    name: "descriptions", 
    message: "describe me your project?",
}, {
    type: "input", 
    name: "installation", 
    message: "how do you install this?",
}, {
    type: "input", 
    name: "usage", 
    message: "what's the use of your project?",
}, {
    type: "list", 
    name: "license", 
    message: "which license are you going to pick?",
    choices: [`none`, `The Unlicense`,`MIT`, `Microsoft Public License`, `Academic Free License v3.0`, `Apache license 2.0`]
}, {
    type: "input", 
    name: "Contributors", 
    message: "How can the world contribute to the project??",
}, {
    type: "input", 
    name: "tests", 
    message: "what tests have you completed so far?",
}, {
    type: "input", 
    name: "Email", 
    message: "Email?",
}, {
    type: "input", 
    name: "gityhub", 
    message: "whats your github?",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        err ? console.error(err) : console.log('readme has been invented!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
}

// Function call to initialize app
init();
