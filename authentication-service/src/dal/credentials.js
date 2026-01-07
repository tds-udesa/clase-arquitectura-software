const { getConnection } = require('../config/database');

/**
 *
 * @param {string} username
 * @returns {Promise<Object|null>}
 */
async function findUserByUsername(username) {
    const db = await getConnection();
    const user = await db.collection('credentials').findOne({ username });
    return user;
}

module.exports = { findUserByUsername };
