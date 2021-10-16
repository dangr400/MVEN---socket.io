const mongoose = require("mongoose");

const Rol = mongoose.model(
  "Rol",
  new mongoose.Schema({
    nombre: String
  })
);

module.exports = Rol;