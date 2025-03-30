// The form will be blank and waiting for the user to fill out
document.getElementById('userForm').onsubmit = function (event) 
{
    // Prevent the form from being submitted the normal way
    event.preventDefault();

    // This will clear a previous message
    document.getElementById('messageArea').innerHTML = '';

    // What ever the user input for First, Last name and zip
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

    // This will combine the first and last name
    var fullName = firstName + ' ' + lastName;

    // To ensure the user does not go beyond 20 character length a message will display
    if (fullName.length > 20) {
        document.getElementById('messageArea').innerHTML = '<p class="warning">Full name cannot exceed 20 characters.</p>';
        return; // Stop further execution
    }

    // This will ensure to validate a zipcode with only numbers and not have letters
    var zipCodePattern = /^[0-9]{5}$/;
    if (!zipCodePattern.test(zipCode)) {
        document.getElementById('messageArea').innerHTML = '<p class="warning">Zip code must be exactly 5 digits.</p>';
        return; // Stop further execution
    }

    var buttonClickSound = new Audio("terminator-2-sound.mp3");
    buttonClickSound.play();

    // Once everything has been sumbitted correctly a seceret message will appear
    document.getElementById('messageArea').innerHTML = '<p class="secret-message">Congratulations! you willingly gave your information to Skynet! Stop! join the Resistance!.</p>';
}
