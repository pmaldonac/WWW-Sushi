const { gql } = require("apollo-server-express");
const usuarioTypeDefs = require("./userTypeDefs")
const productoTypeDefs = require("./productTypeDefs")
const tipoProductoTypeDefs = require("./typeProductTypeDefs")
const clienteTypeDefs = require("./customerTypeDefs")
const estadoPedidoTypeDefs = require("./stateTypeDefs")
const carroTypeDefs = require("./cartTypeDefs")
const ordenTypeDefs = require("./orderTypeDefs")

const typeDefs = [
    usuarioTypeDefs,
    productoTypeDefs,
    tipoProductoTypeDefs,
    clienteTypeDefs,
    estadoPedidoTypeDefs,
    carroTypeDefs,
    ordenTypeDefs
  ];
  
  module.exports = typeDefs;