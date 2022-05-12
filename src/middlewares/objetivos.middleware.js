const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const objetivo = req.body;
  if (
    !objetivo ||
    !objetivo.descricao ||
    !objetivo.valor
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do objetivo!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
