// Includes packages needed for this application
const inquirer = require("inquirer"); // third-party inquirer package
const fs = require("fs"); // reads/writes the files from/to the computer
const generateHTML = require("./source/generateHTML.js"); // helps it to work with other JS files

//get the module.exports from the other .js files
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");

//creating an array to hold all the information passed in
let teamMembersArray = [];

//questions for managers
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the manager's name?`,
        //validate checks if the user left the console blank or not
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the manager's name.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the manager's id?`,
        //validate checks if the user left the console blank or not
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter the manager's id.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the manager's email?`,
        //validate checks if the user left the console blank or not
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter the manager's email.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        //validate checks if the user left the console blank or not
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number.");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput; //object deconstructing
      const manager = new Manager(name, id, email, officeNumber);
      teamMembersArray.push(manager);
      addTeamMemberQuestion();
    });
};

//question for whether adding a new team member or not
const addTeamMemberQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTeamMember",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add more team members",
        ], //prompts user to select between options
      },
    ])
    .then((choice) => {
      //for inquirer the parameter has to be something which is an object here
      if (choice.addTeamMember === "Engineer") {
        engineerQuestions();
      } else if (choice.addTeamMember === "Intern") {
        internQuestions();
      } else if (
        choice.addTeamMember === "I do not want to add more team members"
      ) {
        // console.log(teamMembersArray);
        writeToFile("./view/index.html", teamMembersArray);
      }
    });
};

//questions for engineers
const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the engineer's name?`,
        //validate checks if the user left the console blank or not
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the engineer's name.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the engineer's id?`,
        //validate checks if the user left the console blank or not
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter the engineer's id.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the engineer's email?`,
        //validate checks if the user left the console blank or not
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter the engineer's email.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        //validate checks if the user left the console blank or not
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username.");
            return false;
          }
        },
      },
    ])
    .then((engineerInput) => {
      const { name, id, email, github } = engineerInput; //object deconstructing
      const engineer = new Engineer(name, id, email, github);
      teamMembersArray.push(engineer);
      addTeamMemberQuestion();
    });
};

//questions for interns
const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the intern's name?`,
        //validate checks if the user left the console blank or not
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter the intern's name.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the intern's id?`,
        //validate checks if the user left the console blank or not
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter the intern's id.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the intern's email?`,
        //validate checks if the user left the console blank or not
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter the intern's email.`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
        //validate checks if the user left the console blank or not
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school name.");
            return false;
          }
        },
      },
    ])
    .then((internInput) => {
      const { name, id, email, school } = internInput; //object deconstructing
      const intern = new Intern(name, id, email, school);
      teamMembersArray.push(intern);
      addTeamMemberQuestion();
    });
};

// Creates a function to write HTML file
function writeToFile(fileName, teamMembersArray) {
  //fileName = "./view/index.html";
  fs.writeFile(fileName, generateHTML(teamMembersArray), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("index.html is successfully generated!");
  });
}

// Creates a function to initialize app
function init() {
  console.log("Welcome to the team generator!");
  console.log("Use 'npm test' to verify the library/ folder");
  managerQuestions();
}

// Function call to initialize app
init();
