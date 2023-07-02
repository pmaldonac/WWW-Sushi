const mongoose = require("mongoose")

const typeProductSchema = new mongoose.Schema({
    nombre_tipo: String    
})

module.exports = mongoose.model('tipo_producto', typeProductSchema)
