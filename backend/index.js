const express = require("express")
const expressGraphQL = require('express-graphql')
const UserQueryType = require("./graphql/querys/userQuery")
const app = express()
const GraphQLSchema = require('graphql')

require('dotenv').config();


const schema = new GraphQLSchema({
  query: UserQueryType
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(process.env.PORT_API, () => console.log('Server Running'))