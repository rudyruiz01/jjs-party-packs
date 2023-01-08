//******* toggle links ******//
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    links.classList.toggle('toggle-links');
    navToggle.classList.toggle('rotate');
});

//****** ******/