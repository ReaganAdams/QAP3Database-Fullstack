const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // For parsing JSON requests
app.use(methodOverride('_method'));

const apiRoutes = require('./api/menuRoutes'); // Import API routes

app.use('/api/menu', apiRoutes); // API routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});