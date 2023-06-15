const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema({
    nombre_estado: String
})

module.exports = mongoose.model('estado_pedido', stateSchema)