const { getConnection } = require('../config/database');


async function findUserByUsername(username) {
    const db = await getConnection();
    const user = await db.collection('credentials').findOne({ username });
    return user;
}

module.exports = { findUserByUsername };
