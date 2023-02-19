// Include packages 
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./source/generateHTML.js");

//Create an array to hold all the information
const teamMembers = [];


//Questions for building manager card
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the manager's name?`,
        // validate checks if the console was left empty
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the manager's id?`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the manager's email?`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Error: cannot be left empty.");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamMembers.push(manager);
      addTeamMember();
    });
};

//will the user add another new team member or not
const addTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTeamMember",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "No more team members to add",
        ], //prompts user to select between choices
      },
    ])
    .then((choice) => {

      if (choice.addTeamMember === "Engineer") {
        engineerQuestions();
      } else if (choice.addTeamMember === "Intern") {
        internQuestions();
      } else if (
        choice.addTeamMember === "No more team members to add"
      ) {
        writeToFile("./view/index.html", teamMembers);
      }
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the engineer's name?`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the engineer's id?`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the engineer's email?`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Error: cannot be left empty.");
            return false;
          }
        },
      },
    ])
    .then((engineerInput) => {
      const { name, id, email, github } = engineerInput;
      const engineer = new Engineer(name, id, email, github);
      teamMembers.push(engineer);
      addTeamMemberQuestion();
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the intern's name?`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the intern's id?`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the intern's email?`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Error: cannot be left empty.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Error: cannot be left empty.");
            return false;
          }
        },
      },
    ])
    .then((internInput) => {
      const { name, id, email, school } = internInput;
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      addTeamMemberQuestion();
    });
};

// Function to write the HTML file
function writeToFile(fileName, teamMembers) {
  fs.writeFile(fileName, generateHTML(teamMembers), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("index.html has been generated!");
  });
}

//initialize the app
function init() {
  console.log("Welcome to the team generator!");
  console.log("Use 'npm test' to verify the library/ folder");
  managerQuestions();
}

//call to initialize app
init();
