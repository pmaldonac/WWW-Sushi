const usuarioResolvers = require("./userResolver")
const productoResolvers = require("./productResolver")
const tipoProductoResolvers = require("./typeProductResolver")
const clienteResolvers = require("./customerResolver")
const estadoPedidoResolvers = require("./stateTypeResolver")
const carroResolvers = require("./cartResolver")
const ordenResolvers = require("./orderResolver")

const resolvers = [
    usuarioResolvers,
    productoResolvers,
    tipoProductoResolvers,
    clienteResolvers,
    estadoPedidoResolvers,
    carroResolvers,
    ordenResolvers
]

module.exports = resolvers