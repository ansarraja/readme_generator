// function to generate markdown for README

// If there is no license, return an empty string


function renderLicenseLink(license) {
  let link = ""
  switch (license) {
    case "MIT":
      link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Mozilla Public License 2.0":
      link = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "Apache 2.0 License":
      link = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "N/A":
      link = "N/A"
      break;
    default:
      link = "No licence information found"
  }
  return link;
}

function generateMarkdown(data) {

  return `# ${data.title}

  ## License
   ${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}\n
  [Live Demo](https://drive.google.com/file/d/1DqnHSOMp2ldo6DRyqaS-l1j4nZQs4q6c/view)
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Any Questions? Please reachout to me at ${data.email}\n
  You can view this project at https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
