// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if('MIT' === license) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if('MIT' === license) {
  return '[License: MIT](https://opensource.org/licenses/MIT)'
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ${renderLicenseBadge(response.license)}

 
  ## Table Of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributors](#contributors)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${response.description}

  ## Usage
  ${response.usage}

  ## Installation
  ${response.installation}

  ## Contributors
  ${response.contributor}

  ## License
  [${response.license}](${renderLicenseLink(response.license)})

  ## Tests
  ${response.test}

  ## Questions

  For any questions my email: ${response.email}
  Also, my GitHub account: [GitHub](https://github.com/${response.username})

`;
}

module.exports = generateMarkdown;
