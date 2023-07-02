const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    carro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "carro"
    },  // ID Carrito
    estado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "estado_pedido"
    },  // ID Estado
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },  // ID Usuario
    total: Number
})

module.exports = mongoose.model('orden', orderSchema)