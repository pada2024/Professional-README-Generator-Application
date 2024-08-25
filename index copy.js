const inquirer = required('inquirer');
const fs = required('fs');

inquirer
.prompt([{

    type: 'input',
    message: 'What is your name?',
    name: 'userName',

},

{
    type: 'input',
    message: 'Where are you located?',
    name: 'userLocation',

},

{
    type: 'input',
    message: 'Do you have a bio?',
    name: 'userBio',

},

{
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'userLinkedIn',

},

{
    type: 'input',
    message: 'What is your GitHub URL?',
    name: 'userGitHub'

},

])

    .then((response) => {
        const htmlTemplate = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parisa's Portfolio</title>
</head>
<body>
    <h1>About Me</h1>
    <p>${response.userName}</p>

    <h2>Location</h2>
    <ul>
    %PROJECTS%
    </ul>

    <h2>Contact</h2>
    <p>Email: %EMAIL%</p>
</body>
</html>
        `

        console.log(response)
    }
    );