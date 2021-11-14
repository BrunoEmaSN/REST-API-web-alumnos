import CalificacionesController from "../controllers/Calificaciones.controller";
import express                  from "express";
const router                = express.Router();
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(CalificacionesController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(CalificacionesController.getById));

router.put('/id/:id', auth(), awaitHandlerFactory(CalificacionesController.update));

module.exports = router;