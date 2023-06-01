require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const postgraphile = require("./postgraphile")
const { PORT_API } = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphile)

app.listen(PORT_API, () => console.log(`Server running on port ${PORT_API}`))