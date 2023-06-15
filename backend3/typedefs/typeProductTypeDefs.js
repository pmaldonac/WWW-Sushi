const {gql} = require("apollo-server-express")

const typeDefs =  gql`

    type Tipo_producto{
        _id:ID!
        nombre_tipo: String!
    }

    input TipoProductoInput{
        nombre_tipo: String!
    }

    type Query{
        getTipoProducto: [Tipo_producto]
    }

    type Mutation{
        addTipoProducto(input: TipoProductoInput): Tipo_producto
    }
`
module.exports = typeDefs

