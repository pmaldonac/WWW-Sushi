const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Orden{
        _id: ID!
        estado: Estado_pedido!
        usuario: Usuario!
        carro: Carro!
    }
    input OrdenInput{
        estado: String!
        usuario: String!
        carro: String!
    }
    type Query{
        getOrdenes: [Orden]
        gerOrden(id: ID!) : Orden
    }
    type Mutation{
        addOrden(input: OrdenInput!): Orden
    }
`
module.exports = typeDefs

