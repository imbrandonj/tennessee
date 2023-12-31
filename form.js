/*
    form.js
    author: Brandon Jenkins

    The purpose of this script is to verify the user's email,
    And to display a message whether or not
    the user email and confirmation email are the same.
*/

// Obtain document input IDs
const emailBox = document.getElementById("email");
const confirmEBox = document.getElementById("confirmE");
const eMsg = document.getElementById("eMsg");

let email, confirmE;  // global vars to be used in function scope

// Obtain `email` value
emailBox.addEventListener("change", function() {
    email = emailBox.value;
})

/*  
    Confirm that emails match: `email` matches `confirmE` 
    `confirmE` label will display eMsg on change (default = display: none; see `form.css`) 
*/
confirmEBox.addEventListener("input", function() {
    confirmE = confirmEBox.value;

    // Emails match:
    if (confirmE === email ) {
        eMsg.style.display = "inline-block";
        eMsg.textContent = "Emails match!";
        eMsg.style.color = "green";
    }

    // Emails do not match:
    else {
        eMsg.style.display = "inline-block";
        eMsg.textContent = "Emails must match!"
        eMsg.style.color = "red";    
    }
})