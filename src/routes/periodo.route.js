const express               = require('express');
const router                = express.Router();
const PeriodosController    = require('../controllers/periodos.controller');
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(),awaitHandlerFactory(PeriodosController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(PeriodosController.getById));

router.post('/', auth(), awaitHandlerFactory(PeriodosController.create));

module.exports = router;
