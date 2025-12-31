const { MongoClient } = require('mongodb');
const { dbName, dbUrl } = require('./config');

let db;
let client;

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

async function closeConnections() {
    if (client) {
        await client.close();
    }
}

module.exports = { getConnection, closeConnections };
