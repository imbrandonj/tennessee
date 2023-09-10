// Obtain document input IDs
const emailBox = document.getElementById("email");
const confirmEBox = document.getElementById("confirmE");
const eMsg = document.getElementById("eMsg");
let email, confirmE;

// Obtain `email` value
emailBox.addEventListener("change", function() {
    email = emailBox.value;
})

/*  Confirm `email` matches `confirmE` 
    `confirmE` label will display eMsg on change (default = display: none) */
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