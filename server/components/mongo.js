const { connect, connection } = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const mongoConnect = () => {
    connect(mongoURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.log('Error while connecting to MongoDB:', err);
        });

    connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });
};

// Exporting the function using CommonJS syntax
module.exports = mongoConnect;
