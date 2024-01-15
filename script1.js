// script.js
document.getElementById('myLink1').addEventListener('click', function(event) {
    // Prevent the default behavior of the anchor tag, which is to navigate to the href
    event.preventDefault();

    // Replace 'destination.html' with the actual URL of the page you want to navigate to
    window.location.href = 'login.html';
});


