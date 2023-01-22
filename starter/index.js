const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptUser = () =>
 inquirer.prompt([
  //Project Title
  {
   type: "input",
   name: "title",
   message: "Please enter your project's title:",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter a title for your project:");
     return false;
    }
   },
  },
  //  Project Description
  {
   type: "input",
   name: "description",
   message: "Enter a brief description of your project:",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter a description for your project (required) :");
     return false;
    }
   },
  },
  //  Installation
  {
   type: "input",
   name: "installation",
   message: "Enter installation instructions for your project :",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log(
      "Please enter installation instructions for your project (required): "
     );
     return false;
    }
   },
  },
  // Usage
  {
   type: "input",
   name: "usage",
   message: "Enter usage information for your project:",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter usage information for your project:");
     return false;
    }
   },
  },
  // License
  {
   type: "list",
   name: "license",
   message: "Choose a software license for this project (Required)",
   choices: ["MIT", "Mozilla Public License 2.0", "Apache 2.0 License", "N/A"],
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please choose a license for your project :");
     return false;
    }
   },
  },
  // Contribution
  {
   type: "input",
   name: "contribution",
   message: "Enter your contribution guidelines for this project (Required):",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter contribution guidelines for your project :");
     return false;
    }
   },
  },
  //  Test
  {
   type: "input",
   name: "tests",
   message: "Enter your testing guidelines for this project (Required) :",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter testing guidelines for your project :");
     return false;
    }
   },
  },
  // Github Username
  {
   type: "input",
   name: "github",
   message: "Enter your github username (Required) :",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter your github username :");
     return false;
    }
   },
  },
  // Email
  {
   type: "input",
   name: "email",
   message: "Enter your email address (Required) :",
   validate: (nameInput) => {
    if (nameInput) {
     return true;
    } else {
     console.log("Please enter your email address :");
     return false;
    }
   },
  },
 ]);

 promptUser() 
 .then((response) => fs.writeFileSync('README.md', generateMarkdown(response)))
 .then(() => console.log('Successfully created README.md '))
 .catch((err) => console.error(err));

