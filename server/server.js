// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const mongoConnect = require('./components/mongo'); // Adjust this path to your mongo.js file

// Create an Express application
const app = express();

// Middleware (optional, add as needed)
app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies

// Connect to MongoDB
mongoConnect();

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the MERN Stack Application!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the PORT from environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
