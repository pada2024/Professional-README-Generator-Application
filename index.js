// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },

    // {
    //     type: 'input',
    //     name: 'Title',
    //     message: 'What is the name of your app?',
    // },


    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Please descrie your application?',
    // },

    // {
    //     type: 'input',
    //     name: 'motivation',
    //     message: 'What is your motivation behind building this application?',
    // },

    // {
    //     type: 'input',
    //     name: 'build',
    //     message: 'Why did you build this applicaton and what is it for',
    // },

    // {
    //     type: 'input',
    //     name: 'resolution',
    //     message: 'How do you use your app and What problem does your application solve?',
    // },


    // {
    //     type: 'input',
    //     name: 'educationn',
    //     message: 'What did you learn while creating your application?',
    // },

    // {
    //     type: 'input',
    //     name: 'bugs',
    //     message: 'How do you report issues with your app?',
    // },

    // {
    //     type: 'input',
    //     name: 'contribute',
    //     message: 'How can one contribute to this app?',
    // },

    {
        type: 'list',
        name: 'license',
        message: 'How can one contribute to this app?',
        choices: ['Public', 'GNU', 'Permissive', 'Copyleft', 'Proprietary',]
    },


    // {
    //     type: 'confirm',
    //     name: 'confirm',
    //     message: 'Are you ready to proceed?',
    // },
])

    .then((answers) => {
        console.log('User responses:');
        console.log(answers);
        createREADMEFile(answers);
    });


// TODO: Create a function to write README file
function createREADMEFile(answers) {
    const READMETemplate = generateMarkdown(answers)
    fs.writeFile('README.md', READMETemplate, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file created successfully');
    });
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();

