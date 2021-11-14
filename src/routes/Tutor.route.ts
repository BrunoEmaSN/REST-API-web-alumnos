import TutoresController from "../controllers/Tutores.controller";
import express           from "express";
const router              = express.Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth                = require('../middleware/auth.middleware');

router.get('/', auth(), awaitHandlerFactory(TutoresController.getAll));
router.get('/id/:id', auth(), awaitHandlerFactory(TutoresController.getById));
router.get('/withPareja/', auth(), awaitHandlerFactory(TutoresController.getAllWithPareja));
router.get('/withPareja/id/:id', auth(), awaitHandlerFactory(TutoresController.getByIdWithPareja));

router.post('/', auth(), awaitHandlerFactory(TutoresController.create));
router.put('/id/:id', auth(), awaitHandlerFactory(TutoresController.update));
router.delete('/id/:id', auth(), awaitHandlerFactory(TutoresController.delete));

module.exports = router;