const fs = require('fs');

function generateREADME() {
    const content = `
# My Professional README

## Description
This is a README file for my project.

## Installation
To install this project, run:
\`\`\`
npm install
\`\`\`

## Usage
To use this project, run:
\`\`\`
node index.js
\`\`\`
`;

    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file created successfully!');
    });
}

// Call the function to generate the README file
generateREADME();