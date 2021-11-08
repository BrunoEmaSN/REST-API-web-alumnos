const express               = require('express');
const router                = express.Router();
const SancionesController   = require('../controllers/sanciones.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(SancionesController.getAll));
router.get('/id/:id/', auth(), awaitHandlerFactory(SancionesController.getById));

router.post('/', auth(), awaitHandlerFactory(SancionesController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(SancionesController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(SancionesController.delete));

module.exports = router;
