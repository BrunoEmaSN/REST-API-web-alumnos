"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Periodos_controller_1 = __importDefault(require("../controllers/Periodos.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
router.get('/', auth(), awaitHandlerFactory(Periodos_controller_1.default.getAll));
router.post('/', auth(), awaitHandlerFactory(Periodos_controller_1.default.create));
module.exports = router;
//# sourceMappingURL=Periodo.route.js.map