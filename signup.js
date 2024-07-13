document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var role = document.getElementById('role').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (firstName === '' || lastName === '' || email === '' || password === '') {
        document.getElementById('signupErrorMessage').innerText = 'Please fill in all fields.';
    } else {
        // Proceed with form submission or AJAX request
        // For now, just simulate a successful registration
        document.getElementById('signupErrorMessage').innerText = '';
        alert(`Registration successful as ${role}!`);
    }
});
