const {MONGODB_LIVE, PORT, JWT_KEY} = require('./environment')
const {dbConfigMongo} = require('./db')
module.exports = {
    PORT,
    MONGODB_LIVE,
    JWT_KEY,
    dbConfigMongo
}