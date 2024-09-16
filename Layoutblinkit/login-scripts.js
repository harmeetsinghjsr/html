// Select elements
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Form submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    
    // Validate input
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    if (emailValue === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Invalid email format');
    } else {
        showSuccess(emailInput);
    }

    if (passwordValue === '') {
        showError(passwordInput, 'Password is required');
    } else {
        showSuccess(passwordInput);
    }
    
    // If all fields are valid, you can submit the form
    if (isFormValid()) {
        alert('Form Submitted Successfully!');
    }
});

// Validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add('error');
    small.textContent = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

// Check if the form is valid
function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let valid = true;
    
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            valid = false;
        }
    });
    
    return valid;
}
