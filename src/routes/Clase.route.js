"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clases_controller_1 = __importDefault(require("../controllers/Clases.controller"));
const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
router.get('/', auth(), awaitHandlerFactory(Clases_controller_1.default.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(Clases_controller_1.default.getById));
router.post('/', auth(), awaitHandlerFactory(Clases_controller_1.default.create));
router.put('/id/:id', auth(), awaitHandlerFactory(Clases_controller_1.default.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(Clases_controller_1.default.delete));
module.exports = router;
