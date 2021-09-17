const db = require("../models");
const Student = db.students;

/*
 * Lista todas las studentes
 */
exports.list = function (req, res) {
  Student.findAll()
    .then((result) => res.json(result))
    .catch((err) => err.message);
};
/*
 * crea una student
 */
exports.create = function (req, res) {
  Student.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => err.message);
};
/*
 * Muestra una student
 * Parámetros: {id}
 */
exports.show = function (req, res) {
  Student.findByPk(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => err.message);
};
/*
 * Actualiza una student por id
 * Parámetros: {id}{objeto}
 */
exports.update = function (req, res) {
  Student.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.json(result))
    .catch((err) => err.message);
};

exports.remove = function (req, res) {
  Student.findByPk(req.params.id)
    .then((instance) => {
      instance
        .destroy()
        .then((result) => res.json(result))
        .catch((err) => err.message);
    })
    .catch((err) => err.message);
};
