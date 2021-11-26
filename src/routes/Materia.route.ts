import MateriasController from "../controllers/Materias.controller";
const express               = require('express');
const router                = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(MateriasController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(MateriasController.getById));

router.post('/', auth(), awaitHandlerFactory(MateriasController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(MateriasController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(MateriasController.delete));

module.exports = router;