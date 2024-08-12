// QAP3 reuploaded with contents in index.js file main directory Sorry about that!


const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for supporting PUT and DELETE requests from forms
app.use(methodOverride('_method'));

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static('public'));

// Import and use the routes
const indexRoutes = require('./routes/index');  // Main routes
const menuRoutes = require('./routes/api/menuRoutes');  // API routes

// Use the routes
app.use('/', indexRoutes);
app.use('/api/menu', menuRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
