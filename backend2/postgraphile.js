const { postgraphile } = require('postgraphile')
require('dotenv').config()
const {DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE} = process.env

module.exports = postgraphile(
    {
        database: DB_DATABASE,
        user: DB_USER,
        password: DB_PASS,
        host: DB_HOST,
        port: DB_PORT
    },
    'sushi_schema',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true
    }
)