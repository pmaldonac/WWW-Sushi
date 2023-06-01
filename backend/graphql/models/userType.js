const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } = require('graphql')

const userType = new GraphQLObjectType({
    name: 'Usuarios',
    description: 'This represents an user',
    fields: () =>({
        id_usuario: {type: GraphQLNonNull(GraphQLInt)},
        username: { type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)},
        role: {type: GraphQLString}
    })
})

exports.userType = userType


  