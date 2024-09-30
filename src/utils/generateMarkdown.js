
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  }
  else if (license === 'Apache 2.0') {
    badge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  }
  else if (license === 'ISC') {
   badge = 'https://img.shields.io/badge/License-ISC-blue.svg';
  }
  else {
   badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let link = '';
  if (data.license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT';
  }
  else if (data.license === 'Apache 2.0') {
    link = 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (data.license === 'ISC') {
    link = 'https://opensource.org/licenses/ISC';
  }
  else {
    link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link = renderLicenseLink(license);
  return link;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let section = renderLicenseSection(data.license)
  let badge = renderLicenseBadge(data.license)

 return `# ${data.projectTitle}

  ![${data.license}](${badge})

  ## Description

  ${data.description}

  ## Table of contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  First, clone the github repository:
  > git clone ${data.repoName}

  Then install dependencies:
  > ${data.installation}

  ## Usage

  When you answer a prompt with the following input:
  > ${data.usage}

  it will add your answer to the README file.
  > ${data.usageResult}

  ## License

  This project is licensed under the ${data.license} license. Click [here](${section}) for more information.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:
  > ${data.tests}

  ## Questions

  If you have any questions you can email me at ${data.email} or through [Github](https://github.com/${data.githubUsername})
  `;
};

export default generateMarkdown;
