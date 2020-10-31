const sites = document.getElementById('sites');

function getSites() {
    fetch('https://axelhellberg.se/projapi/website') // fetch entries
        .then(response => response.json())
        .then(result => {
            result.forEach(site => { // print each entry in table row
                sites.innerHTML += `
                    <div class="site">
                        <a href="${site.url}" target="_blank">${site.title}</a>
                        <span>${site.info}</span>
                    </div>
                `;
            }) 
        })
        .catch(error => {
            console.log('Error:', error);
        });
}