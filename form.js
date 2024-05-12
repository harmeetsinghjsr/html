// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform desired actions with the form values
    // For example, you can send the form data to a server using AJAX

    // Reset the form
    form.reset();
});