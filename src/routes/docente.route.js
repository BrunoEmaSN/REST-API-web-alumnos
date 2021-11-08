const express               = require('express');
const router                = express.Router();
const DocentesController    = require('../controllers/docentes.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(DocentesController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(DocentesController.getById));

router.post('/', auth(), awaitHandlerFactory(DocentesController.create));
router.post('/docente_materia/', auth(), awaitHandlerFactory(DocentesController.createDocenteMateria));

router.put('/id/:id', auth(), awaitHandlerFactory(DocentesController.update));

router.delete('/id/:id', auth(), awaitHandlerFactory(DocentesController.delete));
router.delete('/docente_materia/id/:id', auth(), awaitHandlerFactory(DocentesController.deleteDocenteMateria));

module.exports = router;
