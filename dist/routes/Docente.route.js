"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Docentes_controller_1 = __importDefault(require("../controllers/Docentes.controller"));
const DocentesMaterias_controller_1 = __importDefault(require("../controllers/DocentesMaterias.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
router.get('/', auth(), awaitHandlerFactory(Docentes_controller_1.default.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(Docentes_controller_1.default.getById));
router.get('/doconte_materia/id/:id', auth(), awaitHandlerFactory(DocentesMaterias_controller_1.default.getByDocente));
router.post('/', auth(), awaitHandlerFactory(Docentes_controller_1.default.create));
router.post('/docente_materia/', auth(), awaitHandlerFactory(DocentesMaterias_controller_1.default.create));
router.put('/id/:id', auth(), awaitHandlerFactory(Docentes_controller_1.default.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(Docentes_controller_1.default.delete));
router.delete('/docente_materia/id/:id', auth(), awaitHandlerFactory(DocentesMaterias_controller_1.default.delete));
module.exports = router;
//# sourceMappingURL=Docente.route.js.map