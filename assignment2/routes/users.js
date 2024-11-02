var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */

router.post('/', usersController.create);
router.get('/', usersController.list);
router.get('/:userID', usersController.userGet ,usersController.userByid);
router.put('/:userID', usersController.update);
router.delete('/:userID', usersController.delete);

module.exports = router;
