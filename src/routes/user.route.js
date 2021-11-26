"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_controller_1 = __importDefault(require("../controllers/Users.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//const Role                = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
const { 
//    createUserSchema,
//    updateUserSchema,
validateLogin } = require('../middleware/validators/userValidator.middleware');
router.get('/', auth(), awaitHandlerFactory(Users_controller_1.default.getAll));
//router.post('/',createUserSchema, awaitHandlerFactory(UserController.create));
//router.put('/id/:id', auth(Role.Admin), updateUserSchema, awaitHandlerFactory(UserController.update));
//router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(UserController.delete));
router.post('/login', validateLogin, awaitHandlerFactory(Users_controller_1.default.login));
module.exports = router;
