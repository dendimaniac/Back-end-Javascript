'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', (req, res) => {
    res.send(`You requested a cat whose id is ${req.params.id}`);
});

// router.post('/', (req, res) => {
//     res.send('With this endpoint you can add cats.');
// });

router.post('/', upload.single('cat'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    res.send('Sent file');
    next();
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

module.exports = router;