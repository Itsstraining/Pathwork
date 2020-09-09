const express = require('express');
const controller = require('../controller/iduser.controller');

const router = express.Router();

// //router.get('/:iduserId', controller.getIduser);
// router.get('/', controller.getIduser);
// router.post('/', controller.createIduser);
// router.put('/:iduserId', controller.updateIduser);
// router.delete('/:iduserId', controller.deleteIduser);


router.get('/', controller.getUserbyid);
router.put('/',controller.updateUserid);

module.exports = router;