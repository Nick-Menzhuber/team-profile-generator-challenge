function createHTML(newTeam) {
    for (let i = 0; i < newTeam.length; i++) {
        if (newTeam[i].getJobType() === "Manager") {
            const navAndManager =
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
            <span class="navbar-brand mb-0 h1 m-2"> ${Manager.teamName}</span>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header bg-primary text-white">${Manager.name}<br /><br /><i class="fa-solid fa-mug-hot"></i> Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Manager.id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                        <li class="list-group-item">Office Phone: ${Manager.phone}</li>
                    </ul>
                </div>
            </div>
            
            `
        } else if (newTeam[i].getJobType() === "Engineer") {
            const engineerCard =
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header bg-primary text-white">${Engineer.name}<br /><br /><i class="fa-solid fa-glasses"></i> Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Engineer.id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></li>
                    </ul>
                </div>
            </div>
            `
        } else if (newTeam[i].getJobType() === "Intern") {
            const internCard =
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header bg-primary text-white">${Intern.name}<br /><br /><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Intern.id}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                        <li class="list-group-item">${Intern.school}</li>
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

module.export = HTMLgeneration;