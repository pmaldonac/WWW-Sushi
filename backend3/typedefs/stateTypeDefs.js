const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Estado_pedido {
        _id: ID!
        nombre_estado: String!
    }
    
    input EstadoPedidoInput{
        nombre_estado: String!
    }

    type Query{
        getEstadoPedido: [Estado_pedido]
    }

    type Mutation{
        addEstadoPedido(input: EstadoPedidoInput!): Estado_pedido
    }


`
module.exports = typeDefs

