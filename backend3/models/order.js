const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    carro: Number,  // ID Carrito
    estado: Number,  // ID Estado
    usuario: Number  // ID Usuario
})

module.exports = mongoose.model('cliente', clienteSchema)