const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Cliente{
        _id: ID!
        nombre: String!
        direccion: String!
        comuna: String!
        provincia: String
        region: String!
        fecha_nacimiento: String
        sexo: String!
        correo: String!
        telefono: String!
        rut: String!
        usuario: Usuario!
    }
    input ClienteInput {
        nombre: String!
        direccion: String!
        comuna: String!
        provincia: String
        region: String!
        fecha_nacimiento: String
        sexo: String!
        correo: String!
        telefono: String!
        rut: String!
    }

    type Query{
        getClientes: [Cliente]
        getCliente(id: ID!) : Cliente
    }

    type Mutation{
        addCliente(clienteInput: ClienteInput!, userInput: UsuarioInput!): Cliente
        updateCliente(_id: ID!, input: ClienteInput): Cliente!
    }

`
module.exports = typeDefs

