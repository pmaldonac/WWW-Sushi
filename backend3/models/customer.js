const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    comuna: String,
    provincia: String,
    region: String,
    fecha_nacimiento: String,
    sexo: String,
    correo: String,
    telefono: String,
    rut: String,
    _id: {
        type: Number,
        autoIncrement: true,
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }

})


module.exports = mongoose.model('cliente', customerSchema)