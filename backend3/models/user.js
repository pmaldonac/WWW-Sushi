const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    rol: Number
})

module.exports = mongoose.model('usuario', userSchema)