const model = require('../models/costume-shop')

create = (req, res, next) => {
  const costume = model.create(req.body)

  if (costume.errors) {
    return next({
      status: costume.status,
      message: costume.message,
      errors: costume.errors
    })
  }
  res.status(201).json({ costume })
}
getAll = (req, res, next) => {

}
getById = (req, res, next) => {

}
update = (req, res, next) => {

}
deleteById = (req, res, next) => {

}



module.exports = { create, getAll, getById, update, deleteById  }
