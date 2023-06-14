const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    usuario: Number,  // ID Usuario
    producto: Number,  // ID Producto
    fecha_hora: Date
})

module.exports = mongoose.model('cliente', clienteSchema)