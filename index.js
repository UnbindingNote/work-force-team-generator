const Engineer = require("./library/Engineer");
const fs = require("fs");
const generateHTML = require("./source/generateHTML.js");
const inquirer = require("inquirer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");

// need/want(mostly need) an array to hold all the info
const teamMembers = [];


//Beginning questions, make the Manager first because they lead the team obv
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the manager's name?`,
        // v- can't leave things blank or the building yells at you
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

//Does the team have more members? Asks after Manager and after each selected followup question group
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
          "Done",
        ], //^^^ options, occurs after each question segment, so the user has options and isn't trapped filling a team with only managers and no 'let me out!' option
      },
    ])
    .then((choice) => {

      if (choice.addTeamMember === "Engineer") {
        engineerQuestions();
      } else if (choice.addTeamMember === "Intern") {
        internQuestions();
      } else if (
        choice.addTeamMember === "Done"
      ) {
        writeToFile("./view/index.html", teamMembers);
      }
    });
};

// Engineer questionaire, wheeeeeeeeeeeeeeeeeeeeee.
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

// You guessed it, questions for the Intern, just in case the user wanted to add Interns.
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

// This writes all the answers to the HTML, which was generated by the source and will THEN be filled by these answers.
function writeToFile(fileName, teamMembers) {
  fs.writeFile(fileName, generateHTML(teamMembers), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Generated index.html!");
  });
}

//init means initialize, which this does for the app, starting with the Manager questions. Even says hello.
function init() {
  console.log("Willkommen in meinem Teamgenerator!");
  console.log("npm test is for the test, might be broken from changes, who knows.");
  managerQuestions();
}

//call to initialize app
init();
