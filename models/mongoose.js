const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jest');

const conn = mongoose.connection;

conn.on('error', () => console.log('connection error'));

conn.on('open', () => console.log('Connected to MongoDB'));

module.exports = conn;
