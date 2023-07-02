const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Usuario{
        _id:ID!
        username: String!
        password: String!
        rol: String!
    }
    input UsuarioInput {
        username: String!
        password: String!
        rol: String!
    }
    type Query{
        getUsuarios: [Usuario]
        getUsuario(id: ID!): Usuario
    }
    type Mutation{
        addUsuario(input: UsuarioInput!): Usuario
    }

`
module.exports = typeDefs

