const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },  // ID Usuario
    producto: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "producto"
    }],  // ID Producto
    fecha_hora: Date,
    total: Number
})

module.exports = mongoose.model('carro', cartSchema)