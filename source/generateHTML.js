//generating manager card
const generateManager = function (manager) {
    return `
    <div class="card employee-card">
      <div class="card-header bg-primary text-white">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fa fa-address-book" aria-hidden="true"></i>${manager.getRole()}</h3>
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
  }
  
  //generating engineer card
  const generateEngineer = function (engineer) {
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
    `
  }
  
  //generating intern card
  const generateIntern = function (intern) {
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
    `
  };
  
  //an array to hold all the cards
  const employeeCardsArray = [];
  
  //pushes the cards to the array depending on their class name
  const generateHTML = (data) => {
  
    for (let i = 0; i < data.length; i++) {
  
      const employee = data[i];
      const role = employee.getRole();
  
      switch (role) {
        case 'Manager':
          const managerCard = generateManager(employee);
          employeeCardsArray.push(managerCard);
          break;
        case 'Engineer':
          const engineerCard = generateEngineer(employee);
          employeeCardsArray.push(engineerCard);
          break;
        case 'Intern':
          const internCard = generateIntern(employee);
          employeeCardsArray.push(internCard);
          break;
      }
    }
    return generateTeamMembers(employeeCardsArray.join(''));
  }
  
  // Creates a function to generate HTML file with the whole team
  const generateTeamMembers = function (employeeCardsArray) {
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
                    ${employeeCardsArray}
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
  }
  
  //exports the generateMarkdown required by other .js files
  module.exports = generateHTML;