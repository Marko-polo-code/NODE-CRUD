const controllers = require('../controllers/users');
const router = require('express').Router();

// CRUD routes /User
router.get('/', controller.getUsers); //get Users
router.get('/userId', controller.getUser); // get User
router.post('/', controller.createUser); // create User
router.put('/userId', controller.updateUser); // update User
router.delete('/userId', controler.deleteUser); // delete User


module.exports = router;
