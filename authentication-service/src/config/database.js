const { MongoClient } = require('mongodb');

let db;
let client;

async function getConnection() {
  if (db) return db;

  try {
    client = await MongoClient.connect('mongodb://root:example@localhost:27017');
    db = client.db('Logins');
    console.log('Connected to MongoDB');

    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);

    throw error;
  }
}

async function disposeClient() {
  if (client) {
    await client.close();
  }
}

module.exports = { getConnection, disposeClient };