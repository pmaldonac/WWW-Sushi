const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Response{
        data: Usuario
        error: String
        status: Int!
    }

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
        loginUsuario(user: String!, passw: String!): Response
    }

`
module.exports = typeDefs

