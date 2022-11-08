const engineerTemplate = (Engineer) =>
`
<div class="col-6">
    <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header bg-primary text-white">${data.name}<br /><br /><i class="fa-solid fa-glasses"></i> Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data.gitHub}">${data.gitHub}</a></li>
        </ul>
    </div>
</div>
`

const internTemplate = (Intern) =>
`
<div class="col-6">
    <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header bg-primary text-white">${data.name}<br /><br /><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">${data.school}</li>
        </ul>
    </div>
</div>
`
