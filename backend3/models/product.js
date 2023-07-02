const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    nombre: String,
    foto: String,
    disponibilidad: Boolean,
    precio: Number,
    ingredientes: String,
    descuento: Number,
    tipo_producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipo_producto"
    }

})

module.exports = mongoose.model('producto', productSchema)