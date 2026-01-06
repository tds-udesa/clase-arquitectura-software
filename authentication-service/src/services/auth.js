const { findUserByUsername } = require('../dal/credentials');
const jwt = require('jsonwebtoken');

function computeHash(password, salt) {
    const hash = `${password}${salt}`;
    return hash;
}

function createJWT() {
    const secretKey = 'FAKE'
    const token = jwt.sign({
        user: 'testuser',
        role: 'admin'
    }, secretKey, { expiresIn: '1h' });

    return token;
}

async function authenticateUser(username, password) {

    const user = await findUserByUsername(username);

    if (!user) {
        return false;
    }

    var salt = user.salt;
    var hashedPassword = computeHash(password, salt);

    if (hashedPassword === user.password) {
        return createJWT();
    }
    else {
        return null;
    }
}


module.exports = { computeHash, authenticateUser };
