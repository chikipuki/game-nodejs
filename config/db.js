const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongodb.uri);

mongoose.connection.on('error', (err) => {
    console.log("Error: ", err);
});

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on('disconnected', () => {
    console.log("Disconnected from MongoDB");
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Connection closed. exiting');
        process.exit(0);
    });
});

module.exports = mongoose;
