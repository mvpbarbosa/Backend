const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../middlewares/objetivos.middleware.js');
const objetivosController = require('../controllers/objetivos.controller.js');

router.get('/all-objetivos', objetivosController.findObjetivosController);
router.get('/one-objetivo/:id', validId, objetivosController.findObjetivoByIdController);
router.post('/create-objetivo', validObjectBody, objetivosController.createObjetivoController);
router.put('/update-objetivo/:id', validId, validObjectBody, objetivosController.updateObjetivoController);
router.delete('/delete-objetivo/:id', validId, objetivosController.deleteObjetivoController);

module.exports = router;