"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Alumnos_controller_1 = __importDefault(require("../controllers/Alumnos.controller"));
const AlumnosMaterias_controller_1 = __importDefault(require("../controllers/AlumnosMaterias.controller"));
const AlumnosTutores_controller_1 = __importDefault(require("../controllers/AlumnosTutores.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/auth.middleware');
router.get('/', auth(), awaitHandlerFactory(Alumnos_controller_1.default.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(Alumnos_controller_1.default.getById));
router.get('/curso_id/:curso_id', auth(), awaitHandlerFactory(Alumnos_controller_1.default.getByCurso));
router.get('/alumno_tutor/id/:id', auth(), awaitHandlerFactory(AlumnosTutores_controller_1.default.getByAlumno));
router.get('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosMaterias_controller_1.default.getByAlumno));
router.post('/', auth(), awaitHandlerFactory(Alumnos_controller_1.default.create));
router.post('/alumno_tutor/', auth(), awaitHandlerFactory(AlumnosTutores_controller_1.default.create));
router.post('/alumno_materia/', auth(), awaitHandlerFactory(AlumnosMaterias_controller_1.default.create));
router.put('/id/:id', auth(), awaitHandlerFactory(Alumnos_controller_1.default.update));
router.put('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosMaterias_controller_1.default.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(Alumnos_controller_1.default.delete));
router.delete('/alumno_tutor/id/:id', auth(), awaitHandlerFactory(Alumnos_controller_1.default.delete));
router.delete('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosMaterias_controller_1.default.delete));
module.exports = router;
//# sourceMappingURL=Alumno.route.js.map