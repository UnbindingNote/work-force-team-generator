//Manager goes here, details are taken from the Manager.js, because it extended Employee to have extra characteristics, so they get pulled in here, at the manager card, where the manager goes. All that tasty info becomes a card.
const managerProbably = function (manager) {
  return `
    <div class="card employee-card">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title">
          <i class="fa fa-address-book" aria-hidden="true"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>
    `;
};

//Engineer goes here, details are taken from the Engineer.js, because it extended Employee to have extra characteristics, those get pulled in here, at the engineer card, where the engineer goes. All that spicy info becomes ANOTHER card.
const likelyEngineer = function (engineer) {
  return `
    <div class="card employee-card">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fa fa-address-book-o" aria-hidden="true"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
    `;
};

//Intern goes here, details are taken from the Intern.js, because it extended Employee to have extra characteristics, and those get pulled in here, at the intern card, where the intern goes. All that gourmet info becomes - you won't believe it - yet ANOTHER card!
const internSadly = function (intern) {
  return `
    <div class="card employee-card">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fa fa-address-card" aria-hidden="true"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
    `;
};

//Don't tell anyone that we did this, cause we had to, can't get away from it unless we sacrifice 3 goats and half of two frogs - which is way beside the point - it makes an empty array for the cards to go into :D
const maybeArray = [];

//pushes all those delicious cards into that thankfully not awkward empty array, even organizes them by their roles too, because roles are important, and making sense of what each thing does helps alot... so I named Manager as Manager, instead of colStinkface because it should be Manager. 
const generateHTML = (data) => {
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    switch (role) {
      case "Manager":
        const managerCard = managerProbably(employee);
        maybeArray.push(managerCard);
        break;
      case "Engineer":
        const engineerCard = likelyEngineer(employee);
        maybeArray.push(engineerCard);
        break;
      case "Intern":
        const internCard = internSadly(employee);
        maybeArray.push(internCard);
        break;
    }
  }
  return generateTeamMembers(maybeArray.join(""));
};

// This just returns a whole bunch of html with the team information, the information that filled the cards, that it finds in the array, that were put in by generateHTML, which was filled by the generateCamelcasedroles at the top, which was filled by those extended Employee classes. 
const generateTeamMembers = function (maybeArray) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>The Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/e9ecdaabc8.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">The Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${maybeArray}
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

//some other files need the generateHTML to be exported, otherwise it just sits here and gets dirty without being productive. Just sits here, sad and alone while we wonder why things aren't showing up. Lucky we don't have to, because it's being exported right here, to be used and seen by those that need it. Thank you export function. 
module.exports = generateHTML;
