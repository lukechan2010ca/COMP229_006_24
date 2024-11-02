var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

/* GET contact*/
router.post('/', contactsController.create);
router.get('/', contactsController.list);
router.get('/:userID', contactsController.contactGet, contactsController.contactByid);
router.put('/:userID', contactsController.update);
router.delete('/:userID', contactsController.delete);

module.exports = router;

