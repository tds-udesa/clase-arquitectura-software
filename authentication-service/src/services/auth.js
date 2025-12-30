
function computeHash(password, salt) {
    const hash = `${password}${salt}`;
    return hash;
}

async function authenticateUser(username, password) {
    // Simulate authentication logic
    return username === 'testuser' && password === 'password123';
}

module.exports = { computeHash, authenticateUser };