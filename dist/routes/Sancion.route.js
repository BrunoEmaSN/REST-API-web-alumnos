"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sanciones_controller_1 = __importDefault(require("../controllers/Sanciones.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
router.get('/', auth(), awaitHandlerFactory(Sanciones_controller_1.default.getAll));
router.get('/id/:id/', auth(), awaitHandlerFactory(Sanciones_controller_1.default.getById));
router.put('/id/:id', auth(), awaitHandlerFactory(Sanciones_controller_1.default.update));
module.exports = router;
//# sourceMappingURL=Sancion.route.js.map