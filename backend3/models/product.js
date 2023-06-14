const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    nombre: String,
    foto: String,
    disponibilidad: Boolean,
    precio: Number,
    ingredientes: String,
    descuento: Number
})

module.exports = mongoose.model('cliente', clienteSchema)