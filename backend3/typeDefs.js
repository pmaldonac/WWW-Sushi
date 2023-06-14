const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Usuario{
        _id:ID!
        usuario: String!
        contrasena: String!
        rol: String!
    }
    type Cliente{
        _id: ID!
        nombre: String!
        direccion: String!
        comuna: String!
        provincia: String!
        region: String!
        fecha_nacimiento: String!
        sexo: String!
        correo: String!
        telefono: String!
        rut: String!
        usuario: Usuario!
    }

    input UsuarioInput {
        usuario: String!
        contrasena: String!
        rol: String!
    }

    input ClienteInput {
        nombre: String!
        direccion: String!
        comuna: String!
        provincia: String!
        region: String!
        fecha_nacimiento: String!
        sexo: String!
        correo: String!
        telefono: String!
        rut: String!
        usuario: UsuarioInput!
    }

    type Query{
        getClientes: [Cliente]
        getCliente(_id: ID!) : Cliente
        getUsuarios: [Usuario]
        getUsuario(_id: ID!): Usuario
    }
    type Mutation{
        addCliente(input: ClienteInput): Cliente!
        addUsuario(input: UsuarioInput): Usuario!
        updateCliente(_id: ID!, data: ClienteInput): Cliente!
    }

`

module.exports = typeDefs