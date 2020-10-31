const toggleBtn = document.getElementsByClassName('toggle-list'); // get toggle button elements

for (let i = 0; i < toggleBtn.length; i++) { // attach event listeners to each toggle button
    toggleBtn[i].addEventListener('click', function() {
        toggleBtn[i].classList.toggle('reflect-y'); // toggle css class
        const list = this.previousElementSibling; // get list item above button
        list.classList.toggle('collapsed'); // toggle list visibility
    })
}