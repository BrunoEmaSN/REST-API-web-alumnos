"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Materias_controller_1 = __importDefault(require("../controllers/Materias.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
router.get('/', auth(), awaitHandlerFactory(Materias_controller_1.default.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(Materias_controller_1.default.getById));
router.post('/', auth(), awaitHandlerFactory(Materias_controller_1.default.create));
router.put('/id/:id', auth(), awaitHandlerFactory(Materias_controller_1.default.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(Materias_controller_1.default.delete));
module.exports = router;
//# sourceMappingURL=Materia.route.js.map