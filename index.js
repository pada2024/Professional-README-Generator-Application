// TODO: Include packages needed for this application
onst inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },

    {
        type: 'input',
        name: 'motivation',
        message: 'What is your motivation behind building this application?',
    },

    {
        type: 'input',
        name: 'build',
        message: 'Why did you build this applicaton and what is it for',
    },

    {
        type: 'input',
        name: 'resolution',
        message: 'How do you use your app and What problem does your application solve?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this app?',
    },


    {
        type: 'input',
        name: 'educationn',
        message: 'What did you learn while creating your application?',
    },

    {
        type: 'list',
        name: 'bugs',
        message: 'How do you report issues with your app?',
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'How can one contribute to this app?',
        choices: ['Email', 'Phone', 'GitHub', 'Jira', ]
    },


    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you ready to proceed?',
    },
];

inquirer.prompt(questions)
    .then((answers) => {
        console.log('User responses:');
        console.log(answers);
    });

// TODO: Create a function to write README file

function generateREADME(data) {
    return `
# ${data.projectName}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License

${data.license}
`;
}

function createREADMEFile(data) {
    const readmeContent = generateREADME(data);

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file created successfully');
    });
}

function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });