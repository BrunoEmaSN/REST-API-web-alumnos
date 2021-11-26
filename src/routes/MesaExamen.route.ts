import MesasExamenesController from "../controllers/MesasExamenes.controller";
const express               = require('express');
const router              = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(MesasExamenesController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(MesasExamenesController.getById));

router.post('/', auth(), awaitHandlerFactory(MesasExamenesController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(MesasExamenesController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(MesasExamenesController.delete));

module.exports = router;