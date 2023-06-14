const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {ApolloServer, gql} = require("apollo-server-express")
require('dotenv').config();
const {merge} = require("lodash");
const mongoose = require("mongoose")

const typeDefs = require("./typeDefs")
const resolvers  = require("./resolvers")

mongoose.connect(process.env.URI_BD)

let apolloServer = null
const corsOptions = {
    origin: process.env.URI_API,
    Credentials: false
}

async function startServer(){
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions})
    await apolloServer.start()

    apolloServer.applyMiddleware({app, cors:false})
}
startServer()

const app = express()
app.use(cors())
app.listen(process.env.PORT_API, () =>{
    console.log("Servidor Iniciado")
} )