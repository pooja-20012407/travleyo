// checkpoint 1
const countries = ["India", "United States", "France", "Germany", "Australia", "Japan"];
let countryIndex = 0;

const countryElement = document.getElementById('country-name');

function changeCountry() {
    countryIndex = (countryIndex + 1) % countries.length;
    countryElement.textContent = countries[countryIndex];
}

setInterval(changeCountry, 200); 

// checkpoint 2
// Form validation logic
function validateForm() {
    const destination = document.getElementById('destination').value;
    const persons = document.getElementById('persons').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const description = document.getElementById('description').value;

    // Ensure all fields are filled out
    if (!destination || !persons || !startDate || !endDate || description.length < 50) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Ensure end date is greater than start date
    if (new Date(endDate) <= new Date(startDate)) {
        alert("End date should be greater than start date.");
        return;
    }

    alert("Booking successful!");
}
// Register Form Validation
// Registration Form Validation
function validateRegisterForm() {
    let fullname = document.getElementById('fullname').value;
    let contact = document.getElementById('contact').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (!fullname || !contact || !dob || !email || !password) {
        alert("All fields are required!");
        return false;
    }
    // You can add further validation here (e.g., check email format, password strength)
    return true;
}

// Login Form Validation
function validateLoginForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert("Both email and password are required!");
        return false;
    }
    // You can add further validation here (e.g., check email format)
    return true;
}
