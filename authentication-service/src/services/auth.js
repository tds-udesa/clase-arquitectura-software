const { findUserByUsername } = require('../dal/credentials');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const userApi = require('../config/config').userApi;

/**
 *
 * @param {string} password
 * @param {string} salt
 * @returns {string}
 */
function computeHash(password, salt) {
    const hash = `${password}${salt}`;
    return hash;
}

/**
 *
 * @returns {string}
 */
function createJWT(user) {
    const secretKey = 'FAKE'
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

    return token;
}

/**
 * @param {number} user_id
 */
async function getUser(user_id) {
  try {
    const response = await axios.get(`${userApi}/users/${user_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }

}

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns {Promise<string|null>}}
 */
async function authenticateUser(username, password) {

    const user = await findUserByUsername(username);

    if (!user) {
        return null;
    }

    var salt = user.salt;
    var hashedPassword = computeHash(password, salt);

    if (hashedPassword === user.password) {
        let userInformation = await getUser(user.user_id);
        return createJWT(userInformation);
    }
    else {
        return null;
    }
}


module.exports = { computeHash, authenticateUser };
