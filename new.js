// Get the box element
var box = document.querySelector('.box');

// Click event listener
box.addEventListener('click', function() {
    box.textContent = '';
    box.style.backgroundColor = 'green';
});

// Mouseover event listener
box.addEventListener('mouseover', function() {
    box.textContent = '';
    box.style.backgroundColor = 'orange';
});

// Keypress event listener
document.addEventListener('keypress', function(event) {
    box.textContent = '' + event.key;
    box.style.backgroundColor = 'purple';
});