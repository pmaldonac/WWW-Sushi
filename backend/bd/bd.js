const pgPromise = require('pg-promise')
require('dotenv').config();

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db