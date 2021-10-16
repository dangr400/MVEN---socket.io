/**
 * @file Módulo que describe el esquema de un usuario en la BD.
 * @author Daniel Gomez Rodriguez
 * @since 02.10.2021
 * @returns mongoose.model
 */
const mongoose = require("mongoose");

const Usuario = mongoose.model(
  "Usuario",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
module.exports = Usuario;

/*
 module.exports = mongoose => {
    const Usuarios = mongoose.model(
      "usuarios",
      mongoose.Schema(
        {
          nombre: String,
          contra: String
        },
        { timestamps: true }
      )
    );
    
    // Creación del esquema
    var schema = mongoose.Schema(
        {
          nombre: String,
          contra: String
        },
        { timestamps: true }
      );

    // Sobreescribir metodo toJSON para mapear el ID del usuario al objeto "id", en vez de a "_id"
    schema.method("toJSON", function() {
        const { _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Usuarios = mongoose.model("usuarios", schema);
    return Usuarios;
  };
  */