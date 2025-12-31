const { findUserByUsername } = require('../dal/credentials');

function computeHash(password, salt) {
    const hash = `${password}${salt}`;
    return hash;
}

async function authenticateUser(username, password) {

    const user = await findUserByUsername(username);

    if (!user) {
        return false;
    }

    var salt = user.salt;
    var hashedPassword = computeHash(password, salt);

    return hashedPassword === user.password;
}




module.exports = { computeHash, authenticateUser };
