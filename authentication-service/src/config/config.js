const dotenv = require('dotenv');

dotenv.config();

const configuration = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 'mongodb://root:example@localhost:27017',
    dbName: process.env.DB_NAME || 'Logins'
}

module.exports = configuration;