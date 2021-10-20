const fs = require("fs");
const inquirer = require("inquirer");
const readme = require("./readme.js");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "usr"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }, 
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    }, 
    {
        type: "input",
        message: "Please provide a description of your project:",
        name: "description"
    },
    {
        type: "list",
        message: "Please select your project license:",
        name: "license",
        choices: ["MIT", "GNU", "Apache"]
    }, 
    {
        type: "input",
        message: "What is required to install for your project?",
        name: "install"
    }, 
    {
        type: "input",
        message: "Please provide instructions and examples for use:",
        name: "instructions"
    },
    {
        type: "input",
        message: "Please provide contribution guidelines:",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please provide test instructions:",
        name: "test"
    }
])
.then((input) => {
    readme.create(input);
});
