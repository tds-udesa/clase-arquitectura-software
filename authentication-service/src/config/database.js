const { MongoClient } = require('mongodb');
const { dbName, dbUrl } = require('./config');

let db;
let client;

/**
 * Establishes a connection to the MongoDB database.
 * @returns {Promise<import('mongodb').Db>} A promise that resolves to the database connection.
 */
async function getConnection() {
    if (db) return db;

    try {
        client = await MongoClient.connect(dbUrl);
        db = client.db(dbName);

        return db;
    } catch (error) {
        throw error;
    }
}

/**
 * Closes the database connection.
 * @returns {Promise<void>}
 */
async function closeConnections() {
    if (client) {
        await client.close();
    }
}

module.exports = { getConnection, closeConnections };
