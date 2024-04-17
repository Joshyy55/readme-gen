// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require(`./utils/generateMarkdown`)
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
    choices: [`none`, `The Unlicense`,`MIT`, `IBM`, `Eclipse`, `Apache license 2.0`]
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
    fs.writeFile(`${fileName}.md`, data, (err) => {
        err ? console.error(err) : console.log('readme has been invented!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(input => {
            writeToFile(input.title, generateMarkdown(input))
        })
}

// Function call to initialize app
init();
