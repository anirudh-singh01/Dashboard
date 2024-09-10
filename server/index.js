// Import dependencies
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Initialize the express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: '*', // Allow requests from any origin, modify as needed for security in production
    methods: ['GET', 'POST'], // Specify allowed methods
    credentials: true // Enable cookies and credentials if needed
}));

// Create a connection to the MySQL database
const db = mysql.createConnection({
    user: 'root', // MySQL username
    host: 'localhost', // MySQL host
    password: '', // MySQL password (if set)
    database: 'hcldb', // Database name
});

// Connect to the database and handle errors
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// Route for user registration
app.post('/register', (req, res) => {
    // Extract user data from the request body
    const { Email, UserName, Password } = req.body;

    // Prepare the SQL query to insert the new user into the "users" table
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
    
    // Execute the SQL query with user input values
    db.query(SQL, [Email, UserName, Password], (err, results) => {
        if (err) {
            // Handle SQL error
            console.error('Error inserting user:', err.message);
            return res.status(500).send({ error: 'Database error' });
        }
        // Send success response
        console.log('User Inserted Successfully!');
        res.status(201).send({ message: 'User Registered Successfully!' });
    });
});

// Route for user login
app.post('/login', (req, res) => {
    // Extract login data from the request body
    const { LoginUserName, LoginPassword } = req.body;

    // Prepare the SQL query to check if the user exists with the provided credentials
    const SQL = 'SELECT * FROM users WHERE username = ? AND password = ?';

    // Execute the SQL query with user login credentials
    db.query(SQL, [LoginUserName, LoginPassword], (err, results) => {
        if (err) {
            // Handle SQL error
            console.error('Error during login:', err.message);
            return res.status(500).send({ error: 'Database error' });
        }

        if (results.length > 0) {
            // If user is found, return user data
            res.status(200).send(results);
        } else {
            // If no user found, send an appropriate message
            res.status(401).send({ message: 'Invalid Username or Password!' });
        }
    });
});

// Start the server and make it listen on port 3002, available on all network interfaces (0.0.0.0)
app.listen(3002, '0.0.0.0', () => {
    console.log('Server running on port 3002');
});
