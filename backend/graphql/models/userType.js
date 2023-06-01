const graphql = require('graphql')

const {GraphQLString, GraphQLInt} = graphql

const GraphQLObjectType = graphql

const userType = new GraphQLObjectType({
    name: 'Usuarios',
    description: 'This represents an user',
    fields: {
        id_usuario: {type: GraphQLInt},
        username: { type: GraphQLString},
        password: {type: GraphQLString},
        role: {type: GraphQLString}
    }
})

exports.userType = userType


  