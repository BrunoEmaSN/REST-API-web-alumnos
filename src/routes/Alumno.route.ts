import AlumnosController         from "../controllers/Alumnos.controller";
import AlumnosMateriasController from "../controllers/AlumnosMaterias.controller";
import AlumnosTutoresController  from "../controllers/AlumnosTutores.controller";
const express               = require('express');
const router                = express.Router();
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(),awaitHandlerFactory(AlumnosController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(AlumnosController.getById));
router.get('/curso_id/:curso_id', auth(), awaitHandlerFactory(AlumnosController.getByCurso));
router.get('/alumno_tutor/id/:id', auth(), awaitHandlerFactory(AlumnosTutoresController.getByAlumno));
router.get('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosMateriasController.getByAlumno));

router.post('/', auth(), awaitHandlerFactory(AlumnosController.create));
router.post('/alumno_tutor/', auth(), awaitHandlerFactory(AlumnosTutoresController.create));
router.post('/alumno_materia/', auth(), awaitHandlerFactory(AlumnosMateriasController.create));

router.put('/id/:id', auth(), awaitHandlerFactory(AlumnosController.update));
router.put('/alumno_tutor/id/:id', auth(), awaitHandlerFactory(AlumnosTutoresController.update));
router.put('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosMateriasController.update));

router.delete('/id/:id', auth(), awaitHandlerFactory(AlumnosController.delete));
router.delete('/alumno_tutor/id/:id', auth(), awaitHandlerFactory(AlumnosController.delete));
router.delete('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosMateriasController.delete));

module.exports = router;