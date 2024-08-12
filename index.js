// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs =  require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title', 
        message: "Please provide the title for your application:"
    },
    {
        name: 'description', 
        message: "Please provide the description for your application:"
    },
    {
        name: 'email', 
        message: "Please provide your email:"
    },
    {
        name: 'git', 
        message: "Please provide your github username:"
    },
    {
        name: 'install', 
        message: "Please provide any installation instructions:"
    },
    {
        name: 'contribute', 
        message: "Please provide instructons on hwo to contribute:"
    },
    {
        name: 'test', 
        message: "Please provide any testing instructions:"
    },
    {
        type: 'list',
        name: 'license', 
        message: "Please select one of the following options:",
        choices: ['MIT', 'APACHE', 'GNU', 'BSD', 'N/A']
    },
    {
        name: 'usage', 
        message: "Please provide instructions on how to use the application:"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, res)=>{
        if (err)throw err;
        console.log('readme generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
