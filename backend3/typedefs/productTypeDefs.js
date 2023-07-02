const {gql} = require("apollo-server-express")

const typeDefs =  gql`
    type Producto{
        _id:ID!
        nombre: String!
        foto: String!
        disponibilidad: Boolean!
        precio: Int!
        ingredientes: String!
        descuento: Int
        tipo_producto: Tipo_producto!
    }

    input ProductoInput{
        nombre: String!
        foto: String!
        disponibilidad: Boolean!
        precio: Int!
        ingredientes: String!
        descuento: Int
        tipo_producto: String! 
    }

    type Query{
        getProductos: [Producto]
    }

    type Mutation{
        addProducto(productoInput:ProductoInput!): Producto
        updateProducto(id:ID!, input: ProductoInput): Producto!
       }
`
module.exports = typeDefs

