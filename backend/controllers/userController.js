const pool = require('../bd/bd')

const getUsers = (request, response) => {
    pool.query('SELECT * FROM schema_name.usuarios ORDER BY id_usuario ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.json(results.rows)
    })
  }
  exports.getUsers = getUsers