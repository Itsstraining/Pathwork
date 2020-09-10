const express = require('express');
const controller = require('../controller/board.controller');

const router = express.Router();

router.put('/shared', controller.shareBoardUserEmail);

module.exports = router;