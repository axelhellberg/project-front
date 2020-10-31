const courses = document.getElementById('courses');

function getCourses() {
    fetch('https://axelhellberg.se/projapi/course') // fetch entries
        .then(response => response.json())
        .then(result => {
            result.forEach(course => { // print each entry in table row
                courses.innerHTML += `
                    <div class="course">
                        <div class="dates">
                            <span>${course.start_date} –</span>
                            <span>${course.end_date}</span>
                        </div>
                        <span>${course.title}, ${course.uni}</span>
                    </div>    
                `;
            }) 
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
