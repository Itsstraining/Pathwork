const express = require('express');
const controller = require('../controllers/passworduser.controller');

const router = express.Router();

router.get('/:pasworduserId', controller.getPassword);
router.get('/', controller.getPassword);
router.post('/', controller.createPassword);
router.put('/:passworduserId', controller.updatePassword);
router.delete('/:passworduserId', controller.deletePassword);

module.exports = router;