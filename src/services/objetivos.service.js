const Objetivo = require('../models/Objetivos.js');

const findObjetivosService = async () => {
  const objetivos = await Objetivo.find();
  return objetivos;
};

const findObjetivoByIdService = async (id) => {
  const objetivo = await Objetivo.findById(id);
  return objetivo;
};

const createObjetivoService = async (newObjetivo) => {
  const objetivoCriada = await Objetivo.create(newObjetivo)
  return objetivoCriada;
};

const updateObjetivoService = async (id, objetivoEdited) => {
  const objetivoAtualizado = await Objetivo.findByIdAndUpdate(id, objetivoEdited);
  return objetivoAtualizado;
};

const deleteObjetivoService = async (id) => {
  return await Objetivo.findByIdAndDelete(id);
};

module.exports = {
  findObjetivosService,
  findObjetivoByIdService,
  createObjetivoService,
  updateObjetivoService,
  deleteObjetivoService
};
