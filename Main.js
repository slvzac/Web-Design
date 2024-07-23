document.addEventListener('DOMContentLoaded', function() {
    var toggleMenu = document.querySelector('.toggle-menu');
    var nav = document.querySelector('.nav');
    var navul = document.querySelector('.nav ul');

    toggleMenu.addEventListener('click', function() {
        nav.classList.toggle('showing');
        navul.classList.toggle('showing');
    });
});

document.getElementById('submit-button').addEventListener('click', function(event) {
    var input = document.querySelector('.contact-input[type="email"]');
    var textarea = document.querySelector('textarea.contact-input');

    if (input.value === "" || textarea.value === "") {
      alert('Please fill out all fields before submitting.');
      event.preventDefault();
    } else {
        event.preventDefault();
        alert('Your message has been sent!');
    }
  });

  window.onload = function() {
    var currentDate = new Date();
    var day = ("0" + currentDate.getDate()).slice(-2); // get the day as a string
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // get the month as a string
    var year = currentDate.getFullYear();
    var hours = ("0" + currentDate.getHours()).slice(-2);
    var minutes = ("0" + currentDate.getMinutes()).slice(-2);
    var seconds = ("0" + currentDate.getSeconds()).slice(-2);
    var dateString = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds; // e.g., "18/05/2021 13:35:20"
    document.getElementById('dateElement').textContent = dateString;
}