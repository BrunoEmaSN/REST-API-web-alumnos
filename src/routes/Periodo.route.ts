import PeriodosController from "../controllers/Periodos.controller";
import express            from "express";
const router              = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');

router.get('/', auth(),awaitHandlerFactory(PeriodosController.getAll));

router.post('/', auth(), awaitHandlerFactory(PeriodosController.create));

module.exports = router;