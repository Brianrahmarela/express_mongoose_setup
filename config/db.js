const mongoose = require('mongoose');
const {MONGODB_LIVE} = require('./environment')
mongoose.connect(MONGODB_LIVE);

// console.log('MONGODB_LIVE', MONGODB_LIVE)
const dbConfigMongo = mongoose.connection;
module.exports = {dbConfigMongo}