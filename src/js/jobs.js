const jobs = document.getElementById('jobs');

function getJobs() {
    fetch('https://axelhellberg.se/projapi/job') // fetch entries
        .then(response => response.json())
        .then(result => {
            result.forEach(job => { // print each entry in table row
                jobs.innerHTML += `
                    <div class="job">
                        <div class="dates">
                            <span>${job.start_date} –</span>
                            <span>${job.end_date}</span>
                        </div>
                        <span>${job.title}, ${job.workplace}</span>
                    </div>    
                `;
            }) 
        })
        .catch(error => {
            console.log('Error:', error);
        });
}