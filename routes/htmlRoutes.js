// imports
const path = require('path'); // get local paths
const router = require('express').Router(); // express class for modular route handling

// retrieve index.html (because this is the homepage, this is setup as the default route)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// retrieve notes.html (for this page we specifiy which route to utilize)
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// export routes (notice how we can export the router variable itself)
module.exports = router;


