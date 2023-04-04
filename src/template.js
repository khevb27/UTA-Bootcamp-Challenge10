const fs = require('fs');

const employeeDivs = [];

const generateDiv = (employee) => {
    const divStr = `<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${employee.getName()}</h2>
    <h3 class="card-title"><i class="fas ${employee.getIcon()} mr-2"></i>${employee.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">${employee.getSpecial()}</li>
    </ul>
</div>
</div>`

    employeeDivs.push(divStr);
};

const generateHTML = () => {
    const teamHTML = employeeDivs.join("");

    fs.writeFileSync('./dist/team.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
${teamHTML}
            </div>
        </div>
    </div>
</body>
</html>`, 
    (err) => {err ? console.log(err) : console.log('Success!')});

    console.log('Success!');
};

module.exports = { generateDiv, generateHTML }