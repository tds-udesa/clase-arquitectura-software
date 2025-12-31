const { getConnection } = require('../config/database');
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

async function findUserByUsername(username) {
    const db = await getConnection();
    const user = await db.collection('credentials').findOne({ username });
    return user;
}


module.exports = { computeHash, authenticateUser, findUserByUsername };
