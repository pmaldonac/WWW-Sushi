const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    comuna: String,
    provioncia: String,
    region: String,
    fecha_nacimiento: Date,
    sexo: String,
    correo: String,
    telefono: String,
    rut: String
})

module.exports = mongoose.model('cliente', clienteSchema)