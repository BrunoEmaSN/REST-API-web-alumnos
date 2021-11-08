const express               = require('express');
const router                = express.Router();
const ClasesController      = require('../controllers/clases.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(ClasesController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(ClasesController.getById));

router.post('/', auth(), awaitHandlerFactory(ClasesController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(ClasesController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(ClasesController.delete));

module.exports = router;
