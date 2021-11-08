const express               = require('express');
const router                = express.Router();
const AlumnosController     = require('../controllers/alumnos.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(),awaitHandlerFactory(AlumnosController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(AlumnosController.getById));
router.get('/curso_id/:curso_id', auth(), awaitHandlerFactory(AlumnosController.getByCurso));

router.post('/', auth(), awaitHandlerFactory(AlumnosController.create));
router.post('/alumno_tutor/', auth(), awaitHandlerFactory(AlumnosController.createAlumnoTutor));
router.post('/alumno_materia/', auth(), awaitHandlerFactory(AlumnosController.createAlumnoMateria));

router.put('/id/:id', auth(), awaitHandlerFactory(AlumnosController.update));

router.delete('/id/:id', auth(), awaitHandlerFactory(AlumnosController.delete));
router.delete('/alumno_tutor/id/:id', auth(), awaitHandlerFactory(AlumnosController.deleteAlumnoTutor));
router.delete('/alumno_materia/id/:id', auth(), awaitHandlerFactory(AlumnosController.deleteAlumnoMateria));

module.exports = router;
