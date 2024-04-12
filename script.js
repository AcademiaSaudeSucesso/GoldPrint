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






document.addEventListener("DOMContentLoaded", function() {
    // Get the video pop-up element
    var videoPopup = document.getElementById("videoPopup");

    // Get the close button for the pop-up
    var closeButton = document.querySelector(".close-popup");

    // Show the pop-up when the page loads
    videoPopup.style.display = "block";

    // Close the pop-up when the close button is clicked
    closeButton.addEventListener("click", function() {
        videoPopup.style.display = "none";
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var volumeMessage = document.querySelector('.volume-message');

    // Show the volume message when the popup opens
    volumeMessage.style.display = 'block';

    // Hide the volume message after 3 seconds
    setTimeout(function() {
        volumeMessage.style.display = 'none';
    }, 3000);
});












// Get the country code select element
var countryCodeSelect = document.getElementById('country-code');

// Get the phone number input element
var phoneNumberInput = document.getElementById('phone-number');

// Add event listener to the country code select element
countryCodeSelect.addEventListener('change', function() {
    // Get the selected country code
    var selectedCountryCode = countryCodeSelect.value;
    
    // Set the phone number input placeholder to include the selected country code
    phoneNumberInput.placeholder = "Digite o seu whatsapp (ex: " + selectedCountryCode + " XXXXXXXXX)";
});
