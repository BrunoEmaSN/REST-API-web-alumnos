import DocentesController         from "../controllers/Docentes.controller";
import DocentesMateriasController from "../controllers/DocentesMaterias.controller";
const express             = require('express');
const router              = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(DocentesController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(DocentesController.getById));
router.get('/docente_materia/id/:id', auth(), awaitHandlerFactory(DocentesMateriasController.getByDocente));

router.post('/', auth(), awaitHandlerFactory(DocentesController.create));
router.post('/docente_materia/', auth(), awaitHandlerFactory(DocentesMateriasController.create));

router.put('/id/:id', auth(), awaitHandlerFactory(DocentesController.update));
router.put('/docente_materia/id/:id', auth(), awaitHandlerFactory(DocentesMateriasController.update));

router.delete('/id/:id', auth(), awaitHandlerFactory(DocentesController.delete));
router.delete('/docente_materia/id/:id', auth(), awaitHandlerFactory(DocentesMateriasController.delete));

module.exports = router;