import UsersController from "../controllers/Users.controller";
const express             = require('express');
const router              = express.Router();
//const Role                = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');
const {
//    createUserSchema,
//    updateUserSchema,
    validateLogin
} = require('../middleware/validators/userValidator.middleware');

router.get('/', auth(), awaitHandlerFactory(UsersController.getAll));

//router.post('/',createUserSchema, awaitHandlerFactory(UserController.create));
//router.put('/id/:id', auth(Role.Admin), updateUserSchema, awaitHandlerFactory(UserController.update));
//router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(UserController.delete));

router.post('/login', validateLogin, awaitHandlerFactory(UsersController.login));

module.exports = router;