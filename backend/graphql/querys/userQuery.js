const userType = require('../models/userType')
const userController = require("../../controllers/userController")

const graphql = require('graphql')
const GraphQLObjectType = graphql

const UserQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        usuarios: {
        type: new GraphQLList(userType),
        description: 'List of All Users',
        resolve: () => userController
      }
    })
  })

  exports.UserQueryType = UserQueryType