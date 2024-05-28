document.getElementById('Phone').addEventListener('input', formatPhoneNumber);
document.getElementById('Phone').addEventListener('blur', validatePhone);
document.getElementById('myform').addEventListener('submit', validateForm, false);

function validateForm(event) {
    var errorMessages = "";
    var isValid = true;

    // Clear previous error messages
    document.getElementById("errorMessages").innerHTML = "";
    document.getElementById("fname").innerHTML = "";
    document.getElementById("lname").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";
    document.getElementById("stateError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";
    document.getElementById("zipcodeError").innerHTML = "";

    // First Name Validation
    if (!firstName()) isValid = false;

    // Last Name Validation
    if (!lastName()) isValid = false;

    // Email Validation
    if (!validateEmail()) isValid = false;

    // Phone Validation
    if (!validatePhone()) isValid = false;

    // Username Validation
    if (!validateUsername()) isValid = false;

    // Password Validation
    if (!validatePassword()) isValid = false;

    // Address Validation
    if (!validateAddress()) isValid = false;

    // City Validation
    if (!validateCity()) isValid = false;

    // State Validation
    if (!validateState()) isValid = false;

    // Country and Zip Code Validation
    if (!validateCountryAndZip()) isValid = false;

    if (!isValid) {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }

    return true;
}

function firstName() {
    var firstname = document.getElementById("FirstName").value;
    var validFirstname = false;
    var errorMessages = "";

    if (firstname === "" || firstname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    } else if (!/^[a-zA-Z ,.'-]+$/.test(firstname)) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validFirstname = true;
    }

    document.getElementById("fname").innerHTML = errorMessages;
    return validFirstname;
}

function lastName() {
    var lastname = document.getElementById("LastName").value;
    var validLastname = false;
    var errorMessages = "";

    if (lastname === "" || lastname.length > 50) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
    } else if (!/^[a-zA-Z ,.'-]+$/.test(lastname)) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validLastname = true;
    }

    document.getElementById("lname").innerHTML = errorMessages;
    return validLastname;
}

function validateEmail() {
    var email = document.getElementById("Email").value;
    var validEmail = false;
    var errorMessages = "";

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        errorMessages += "<p>Invalid email</p>";
    } else {
        validEmail = true;
    }

    document.getElementById("emailError").innerHTML = errorMessages;
    return validEmail;
}

function formatPhoneNumber() {
    var phone = document.getElementById("Phone").value;
    phone = phone.replace(/\D/g, ''); // Remove all non-numeric characters
    if (phone.length > 3 && phone.length <= 6) {
        phone = phone.replace(/(\d{3})(\d{1,3})/, '$1-$2');
    } else if (phone.length > 6) {
        phone = phone.replace(/(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
    }
    document.getElementById("Phone").value = phone;
}

function validatePhone() {
    var phone = document.getElementById("Phone").value;
    var validPhone = false;
    var errorMessages = "";

    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        errorMessages += "<p>Invalid phone number (must be in the format XXX-XXX-XXXX)</p>";
    } else {
        validPhone = true;
    }

    document.getElementById("phoneError").innerHTML = errorMessages;
    return validPhone;
}

function validateUsername() {
    var username = document.getElementById("Username").value;
    var validUsername = false;
    var errorMessages = "";

    if (username === "" || username.length > 12) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
    } else {
        validUsername = true;
    }

    document.getElementById("usernameError").innerHTML = errorMessages;
    return validUsername;
}

function validatePassword() {
    var password = document.getElementById("Password").value;
    var validPassword = false;
    var errorMessages = "";

    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
    if (password.length < 1 || password.length > 7) {
        errorMessages += "<p>The password cannot be longer than 7 characters and less then 1 characters</p>";
    } else {
        validPassword = true;
    }

    document.getElementById("passwordError").innerHTML = errorMessages;
    return validPassword;
}

function validateAddress() {
    var address = document.getElementById("Address").value;
    var validAddress = false;
    var errorMessages = "";

    if (address === "") {
        errorMessages += "<p>The address is required</p>";
    } else {
        validAddress = true;
    }

    document.getElementById("addressError").innerHTML = errorMessages;
    return validAddress;
}

function validateCity() {
    var city = document.getElementById("City").value;
    var validCity = false;
    var errorMessages = "";

    if (city === "") {
        errorMessages += "<p>The city is required</p>";
    } else {
        validCity = true;
    }

    document.getElementById("cityError").innerHTML = errorMessages;
    return validCity;
}

function validateState() {
    var state = document.getElementById("State").value;
    var validState = false;
    var errorMessages = "";

    if (state === "") {
        errorMessages += "<p>The state is required</p>";
    } else {
        validState = true;
    }

    document.getElementById("stateError").innerHTML = errorMessages;
    return validState;
}

function validateCountryAndZip() {
    var country = document.getElementById("Country").value;
    var zipcode = document.getElementById("ZipCode").value;
    var validCountryAndZip = true; 
    var countryErrorMessage = "";
    var zipcodeErrorMessage = "";

    // Validate country
    if (country === "") {
        countryErrorMessage = "<p>The country is required</p>";
        validCountryAndZip = false;
    }
   

    // validate if country is USA and zip
    if (country === "USA") {
        if (zipcode.length !== 5 || isNaN(zipcode)) {
            zipcodeErrorMessage += "<p>Invalid zip code (must be 5 digits for USA)</p>";
            validCountryAndZip = false;
        }
    }

    // Display error messages
    document.getElementById("countryError").innerHTML = countryErrorMessage;
    document.getElementById("zipcodeError").innerHTML = zipcodeErrorMessage;

    return validCountryAndZip;
}
