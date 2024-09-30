// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs, { read } from 'fs';
import renderLicenseSection from './utils/generateMarkdown.js';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:'
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'Enter the URL of your repository:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter CLI command to install dependencies:'
    },
    
    {
        type: 'input',
        name: 'usage',
        message: 'Enter an example of CLI input'
    },
    {
        type: 'input',
        name: 'usageResult',
        message: 'Enter the expected output of the example CLI input'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution outlines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let readMeContent = generateMarkdown(data);
    
    fs.writeFile('README.MD', readMeContent, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File created successfully!');
    }
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {

        
        
        writeToFile('README.MD', response);
})};

// Function call to initialize app
init();

