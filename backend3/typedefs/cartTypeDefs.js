const {gql} = require("apollo-server-express")
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const DateType = new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
        // Convert incoming string value to Date object
        return new Date(value);
    },
    serialize(value) {
        // Convert outgoing Date object to string
        return value.toISOString();
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
        // Convert the string literal to a Date object
        return new Date(ast.value);
        }
        return null;
    },
});
const typeDefs =  gql`
    scalar Date
    type Carro{
        _id: ID!
        usuario: Usuario!
        producto: [Producto]
        fecha_hora: Date!
        total: Int
    }

    input CarroInput{
        usuario: String!
        producto: [String!]
        fecha_hora: Date!
    }

    input CarroUpdateInput{
        producto: [String!]
    }

    type Query{
        getCarro(id: ID!):Carro
        getCarroUsuario(id_usuario: String!):Carro
    }
    type Mutation{
        addCarro(input: CarroInput!): Carro
        updateCarro(id: ID!, input: CarroUpdateInput): Carro!
        deleteProductoCarro(id: ID!, input: CarroUpdateInput): Carro!
    }

`
module.exports = typeDefs

