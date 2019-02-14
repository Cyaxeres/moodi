const poemController = require('./controller');
const express = require('express');
const router = express.Router();

router.get('/', poemController.viewPoems);
router.post('/new', poemController.newPoem);

module.exports = router;
