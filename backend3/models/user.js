const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    usuario: String,
    contrasena: String,
    rol: Number,
    _id: {
        type: Number,
        autoIncrement: true,
    }
})

module.exports = mongoose.model('usuario', userSchema)