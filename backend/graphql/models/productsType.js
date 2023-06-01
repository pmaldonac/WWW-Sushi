const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean
  } = require('graphql')

const productType = new GraphQLObjectType({
  name: 'Productos',
  description: 'This represents a product information',
  fields: () =>({
        nombre:  {type: GraphQLNonNull(GraphQLString)},
        foto: {type: GraphQLNonNull(GraphQLString)},
        disponibilidad: {type: GraphQLNonNull(GraphQLBoolean)},
        precio:  {type: GraphQLNonNull(GraphQLInt)},
        ingredientes:  {type: GraphQLNonNull(GraphQLString)},
        descuento: {type: GraphQLNonNull(GraphQLInt)} ,
        id_producto:  {type: GraphQLNonNull(GraphQLInt)}
  })

})

exports.productType = productType