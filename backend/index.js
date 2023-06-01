const express = require("express")
const {ApolloServer, gql} = require('apollo-server-express')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
  } = require('graphql')

require('dotenv').config();


const server = new ApolloServer({typeDefs,resolvers})

const app = express()
server.start().then(res => {
    server.applyMiddleware({ app, path: '/' });
    app.listen({ port:process.env.PORT_API}, () => 
      console.log("Server ready at port 4000")
    );  
  });
