const mongoose = require('mongoose');


const DB_URL = 'mongodb://localhost:27017/game'
console.log({ DB_URL })

mongoose.connect(DB_URL);

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
