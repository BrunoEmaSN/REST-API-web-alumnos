const express               = require('express');
const router                = express.Router();
const AulasController       = require('../controllers/aulas.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(AulasController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(AulasController.getById));

router.post('/', auth(), awaitHandlerFactory(AulasController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(AulasController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(AulasController.delete));

module.exports = router;
