const express = require('express');
const controller = require('../controllers/nameuser.controller');

const router = express.Router();

router.get('/:nameuserId', controller.getNameuser);
router.get('/', controller.getNameuser);
router.post('/', controller.createNameuser);
router.put('/:nameuserId', controller.updateNameuser);
router.delete('/:nameuserId', controller.deleteNameuser);

module.exports = router; 