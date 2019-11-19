'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', (req, res) => {
    res.send(`You requested a user whose id is ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('With this endpoint you can add cats.');
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

module.exports = router;