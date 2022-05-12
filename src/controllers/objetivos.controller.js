const objetivosService = require('../services/objetivos.service.js');

const findObjetivosController = async (req, res) => {
  const allObjetivos = await objetivosService.findObjetivosService();
  res.send(allObjetivos);
};

const findObjetivoByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenObjetivo = await objetivosService.findObjetivoByIdService(idParam);
  res.send(chosenObjetivo);
};

const createObjetivoController = async (req, res) => {
    const objetivo = req.body;
    const newObjetivo = await objetivosService.createObjetivoService(objetivo);
    res.send(newObjetivo);
  };
  
  const updateObjetivoController = async (req, res) => {
    const idParam = req.params.id;
    const objetivoEdit = req.body;
    const chosenObjetivo = await objetivosService.findObjetivoByIdService(idParam);
    const updatedObjetivo = await objetivosService.updateObjetivoService(idParam, objetivoEdit);
    res.send(updatedObjetivo);
  };
  
  const deleteObjetivoController = async (req, res) => {
    const idParam = req.params.id;
    const chosenObjetivo = await objetivosService.findObjetivoByIdService(idParam);
    await objetivosService.deleteObjetivoService(idParam);
    res.send({ message: 'Objetivo deletada com sucesso!' });
  };

  module.exports = {
    findObjetivosController,
    findObjetivoByIdController,
    createObjetivoController,
    updateObjetivoController,
    deleteObjetivoController,
  };