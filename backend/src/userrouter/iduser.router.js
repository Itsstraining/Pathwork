const express = require('express');
const controller = require('../controllers/iduser.controller');

const router = express.Router();

router.get('/:iduserId', controller.getIduser);
router.get('/', controller.getIduser);
router.post('/', controller.createIduser);
router.put('/:iduserId', controller.updateIduser);
router.delete('/:iduserId', controller.deleteIduser);

module.exports = router;