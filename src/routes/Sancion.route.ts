import SancionesController from "../controllers/Sanciones.controller";
import express from "express";
const router              = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(SancionesController.getAll));
router.get('/id/:id/', auth(), awaitHandlerFactory(SancionesController.getById));

router.put('/id/:id', auth(), awaitHandlerFactory(SancionesController.update));

module.exports = router;