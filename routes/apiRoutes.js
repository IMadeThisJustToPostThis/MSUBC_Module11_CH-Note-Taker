// imports
const router = require('express').Router(); // express with the Router class for route handling
const fs = require('fs'); // fs to read and write to the database
const path = require('path'); // get local paths so that we can resolve the path in readFileSync because relative paths don't work with it by default
const dbPath = './db/db.json'; // save database path to a variable for convenience
let data = JSON.parse(fs.readFileSync(path.resolve(dbPath), 'utf8')); // retrieve data
const uuid = require('../public/src/uuid.js'); // import the uuid generator

// route to retrieve all notes currently in the database
router.get('/notes', (req, res) => {

    try {
        return res.json(data); // render initial data to screen
    } catch (err) {
        console.error(err);
    }

});

// route to post the user inputted note
router.post('/notes', (req, res) => {

    let { title, text } = req.body; // retrieve the inputted title and text
    let id = uuid(); // generate a random id
    const newNote = { title, text, id }; // create a new array which will hold our note item

    try {
        data.push(newNote); // push new note item to the end of the data array
        fs.writeFileSync(path.resolve(dbPath), JSON.stringify(data)); // save data array to db.json
        res.json(data); // render new data to screen
    } catch (err) {
        console.error(err);
    }

});

// route to delete a selected note
router.delete('/notes/:id', (req, res) => {

    let id = req.params.id; // retrieve the id of the selected note to delete

    try {
        data = data.filter(selectedNote => { // filter method returns a new array based on the parameters placed in its return statement
            return selectedNote.id !== id; // in this case we filter out our selected note to delete, and maintain everything else
        });
        fs.writeFileSync(path.resolve(dbPath), JSON.stringify(data)); // save data array to db.json
        res.json(data); // render new data to screen
    } catch (err) {
        console.error(err);
    }

});

// export routes (notice how we can export the router variable itself)
module.exports = router;