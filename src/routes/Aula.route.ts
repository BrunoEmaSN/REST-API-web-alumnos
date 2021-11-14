import AulasController from "../controllers/Aulas.controller";
import express         from "express";
const router                = express.Router();
const awaitHandlerFactory   = require('../middleware/awaitHandlerFactory.middleware');
const auth                  = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(AulasController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(AulasController.getById));

router.post('/', auth(), awaitHandlerFactory(AulasController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(AulasController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(AulasController.delete));

module.exports = router;