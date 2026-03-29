const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type} show`;
}

function hideMessage() {
    messageDiv.className = 'message';
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Disable button during request
    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';
    hideMessage();

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage('Login successful! Redirecting...', 'success');
            // Redirect or handle success
            setTimeout(() => {
                window.location.href = 'http://localhost:3000/users-service/docs';
            }, 1000);
        } else {
            showMessage(data.message || 'Login failed. Please try again.', 'error');
        }
    } catch (error) {
        showMessage('An error occurred. Please try again.', 'error');
        console.error('Login error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
    }
});
