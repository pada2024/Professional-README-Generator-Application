// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// const generateREADME = ({ name, location, github, linkedin }) =>
//     `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//     <title>Document</title>
//   </head>
//   <body>
//     <header class="p-5 mb-4 header bg-light">
//       <div class="container">
//         <h1 class="display-4">Hi! My name is ${name}</h1>
//         <p class> ${motivation}.</p>
//         <p class> ${build}.</p>
//         <p class> ${resolution}.</p>
//         <p class> ${installation}.</p>
//         <p class> ${education}.</p>
//         <p class> ${bugs}.</p>
//         <p class> ${contribute}.</p>
//       </div>
//     </header>
//   </body>
//   </html>`;

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },

    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your app?',
    },


    {
        type: 'input',
        name: 'description',
        message: 'Please descrie your application?',
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
        name: 'educationn',
        message: 'What did you learn while creating your application?',
    },

    {
        type: 'input',
        name: 'bugs',
        message: 'How do you report issues with your app?',
    },

    {
        type: 'list',
        name: 'contribute',
        message: 'How can one contribute to this app?',
        choices: ['Public', 'GNU', 'Permissive', 'Copyleft', 'Proprietary',]
    },

    {
        type: 'list',
        name: 'license',
        message: 'How can one contribute to this app?',
        choices: ['Email', 'Phone', 'GitHub', 'Jira',]
    },


    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you ready to proceed?',
    },
])

    .then((answers) => {
        console.log('User responses:');
        console.log(answers);
        generateREADME(answers)

        let READMETemplate = `# ${answers.name} 


## Description
${answers.description}

## Table of Contents (Optional)
${answers.terms}

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Title
${answers.title}

## Motivation
${answers.motivation}

## Build
${answers.build}


## Resolution

${answers.resolution}

## Education
${answers.education}


## Bugs
${answers.bugs}
       
## How to Contribute
${answers.contribute}

## License
${answers.license}

`
        console.log(READMETemplate);
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

