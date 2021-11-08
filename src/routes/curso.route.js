const express               = require('express');
const router                = express.Router();
const CursosController       = require('../controllers/cursos.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(CursosController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(CursosController.getById));

router.post('/', auth(), awaitHandlerFactory(CursosController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(CursosController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(CursosController.delete));

module.exports = router;
