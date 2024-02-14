const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
/* GET users listing. */
router.get('/', (req, res) => userModel.getUsers(req, res));
router.post('/', (req, res) => userModel.addUser(req, res));
router.delete('/:id', (req, res) => userModel.deleteUser(req, res));

module.exports = router;
