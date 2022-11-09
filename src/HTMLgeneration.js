function createHTML(newTeam) {
    let navAndManager;
    let engineerCard = [];
    let internCard = [];
    for (let i = 0; i < newTeam.length; i++) {
        console.log(newTeam)
        console.log(newTeam[0].getJobType())
        if (newTeam[i].getJobType() === "Manager") {
            navAndManager =
                `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <title>Team Profile</title>
</head>

<body>
    <nav class="navbar bg-light">
        <div class="container-fluid justify-content-center text-white bg-secondary">
            <i class="fa-solid fa-people-group"></i>
            <span class="navbar-brand mb-0 h1 m-2"> ${newTeam[i].teamName}</span>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header bg-primary text-white">${newTeam[i].name}<br /><br /><i class="fa-solid fa-mug-hot"></i> Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${newTeam[i].id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${newTeam[i].email}">${newTeam[i].email}</a></li>
                        <li class="list-group-item">Office Phone: ${newTeam[i].phone}</li>
                    </ul>
                </div>
            </div>
            
            `
        } else if (newTeam[i].getJobType() === "Engineer") {
            engineerCard =
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header bg-primary text-white">${newTeam[i].name}<br /><br /><i class="fa-solid fa-glasses"></i> Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${newTeam[i].id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${newTeam[i].email}">${newTeam[i].email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${newTeam[i].gitHub}">${newTeam[i].gitHub}</a></li>
                    </ul>
                </div>
            </div>
            `
        } else if (newTeam[i].getJobType() === "Intern") {
            internCard =
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header bg-primary text-white">${newTeam[i].name}<br /><br /><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${newTeam[i].id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${newTeam[i].email}">${newTeam[i].email}</a></li>
                        <li class="list-group-item">${newTeam[i].school}</li>
                    </ul>
                </div>
            </div>
            `
        }
    }
    const endTemplate =
`
    </div>
</div>
<script src="https://kit.fontawesome.com/82d7de5ec8.js" crossorigin="anonymous"></script>
</body>
</html>
`
let page;
page = navAndManager + engineerCard + internCard + endTemplate

return page;
}

module.exports = createHTML;