// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.name} 

## Description
${answers.description}

## Table of Contents (Optional)

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

`;
}

module.exports = generateMarkdown;
