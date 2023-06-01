const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean
  } = require('graphql')

const orderType = new GraphQLObjectType({
  name: 'Pedido',
  description: 'This represents an order information',
  fields: () =>({
        id_carrito:{type: GraphQLNonNull(GraphQLInt)},
        id_estado:{type: GraphQLNonNull(GraphQLInt)},
        id_usuario: {type: GraphQLNonNull(GraphQLInt)},
        id_orden:{type: GraphQLNonNull(GraphQLInt)}

  })

})

exports.orderType = orderype