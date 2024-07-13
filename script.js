document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var role = document.getElementById('role').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        document.getElementById('errorMessage').innerText = 'Please fill in all fields.';
    } else {
        // Proceed with form submission or AJAX request
        // For now, just simulate a successful login
        document.getElementById('errorMessage').innerText = '';
        alert(`Login successful as ${role}!`);
    }
});
