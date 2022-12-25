//TODO:
// 1) - add check to make sure uuid doesn't generate an id that already exists in the database

// initialize express application
const express = require('express'); // express.js middleware so that we can communicate between our front-end and back-end
const app = express(); // assign express middleware to a constant variable
const PORT = process.env.PORT || 3001; // setup which port to use: either use the environment variable port, or if it's not found, use universal standard of 3001

// import our routes
const apiRoutes = require('./routes/apiRoutes'); // routes for our back-end data
const htmlRoutes = require('./routes/htmlRoutes'); // routes for our front-end webpages

// setup express app
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // sets up express to parse url's using the 'qs' library
app.use(express.static('public')); // sets up express to serve the files in the public folder
app.use('/', htmlRoutes);  // serves up our html routes with the default '/' url path
app.use('/api', apiRoutes); // serves up our api routes with the '/api' url path

// Start the server on the port
app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`)); // listen to the fully setup application
