$(document).ready(function() {
    // Show the modal when the form is submitted
    $('#registration-form').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        showPopup(); // Show popup
    });

    // Close the modal when the close button is clicked
    $('.close').click(function() {
        closePopup(); // Close popup
    });

    // Close the modal when the user clicks outside of it
    $(window).click(function(event) {
        if (event.target == $('#myModal')[0]) {
            closePopup(); // Close popup
        }
    });

    // Function to display popup and apply blur effect to the background
    function showPopup() {
        $('#myModal').show();
        $('.container').addClass('blur-background'); // Add blur class to container
    }

    // Function to close popup and remove blur effect from the background
    function closePopup() {
        $('#myModal').hide();
        $('.container').removeClass('blur-background'); // Remove blur class from container
    }
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbzRrlmqxLwZhgnO3dJm9VZM4IIQGDOl6QUF3XBKmPZ38J84dnxdpCP4dQQQnmHLOUXZ/exec';
const form = document.forms['contact-us'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => { 
            form.reset();
            if (response.ok) {
                window.location.href = 'thank_you.html'; // Redirect to thank you page
            } else {
                alert('Error submitting form'); // Display error message if submission fails
            }
        })
        .catch(error => console.error('Error!', error.message));
});




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("subscribe-btn").addEventListener("click", function() {
        window.location.href = "popup.css"; // Change "other_page.html" to the desired URL
    });
});


