document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username === 'Sartha' && password === 'Sartha@123') {
        // Store the last visited page in localStorage
        const lastPage = localStorage.getItem('lastPage') || 'index.html';
        window.location.href = lastPage; // Redirect to the last visited page
    } 
    
    else if (username === 'User' && password === 'Password')
    {
        const lastPage = localStorage.getItem('lastPage') || 'index.html';
        window.location.href = lastPage;
    }

    else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});

// Store the last visited page before navigating to the login page
window.addEventListener('beforeunload', function() {
    localStorage.setItem('lastPage', document.referrer || 'index.html');
});