

// Selecting Elements

var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var submitbtn = document.querySelector("#submitbtn");
var registerForm = document.querySelector("#registerForm");
var success = document.querySelector("#success");

// Function

function check() {

    var isValid = true;

    // Name

    if (nameInput.value.trim() == "") {
        document.querySelector("#nameerror").textContent = "Name is required";
        isValid = false;
    }
    else {
        document.querySelector("#nameerror").textContent = "";
    }

    // Email

    if (emailInput.value.trim() == "") {
        document.querySelector("#emailerror").textContent = "Email is required";
        isValid = false;
    }
    else if (emailInput.value.indexOf("@") == -1 || emailInput.value.indexOf(".") == -1) {
        document.querySelector("#emailerror").textContent = "Enter valid email";
        isValid = false;
    }
    else {
        document.querySelector("#emailerror").textContent = "";
    }

    // Password

    if (passwordInput.value.length < 6) {
        document.querySelector("#passworderror").textContent = "Password must be at least 6 characters";
        isValid = false;
    }
    else {
        document.querySelector("#passworderror").textContent = "";
    }

    // Submit Button

    if (isValid == true) {
        submitbtn.disabled = false;
    }
    else {
        submitbtn.disabled = true;
    }

}

// Real Time Validation

nameInput.addEventListener("input", check);
emailInput.addEventListener("input", check);
passwordInput.addEventListener("input", check);

// Submit

submitbtn.addEventListener("click", function () {

    success.textContent = "Registration Successful!";

    registerForm.reset();

    submitbtn.disabled = true;

    document.querySelector("#nameerror").textContent = "";
    document.querySelector("#emailerror").textContent = "";
    document.querySelector("#passworderror").textContent = "";

});

