//TODO:
// 1 - finish api routes
// 2 - make readme
const router = require('express').Router(); // express with the Router class for route handling
const fs = require('fs'); // fs to read and write to the database
const path = require('path'); // get local paths so that we can resolve the path in readFileSync because relative paths don't work with it by default
let data = JSON.parse(fs.readFileSync(path.resolve('./db/db.json'), 'utf8'));
const uuid = require('../public/src/uuid.js');
console.log(data);

router.get('/notes', (req, res) => {
    console.log('get');
    try {
        return res.json(data);
    } catch (err) {
        console.error(err);
    }
});

/* router.get('/notes:id', (req, res) => {

    res.json(data[(req.params.id)]);
});

router.post('/notes')

router.delete('/notes/:id', (req, res) => {


}); */

module.exports = router;