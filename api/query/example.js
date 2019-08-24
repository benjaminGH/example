const Pool = require('pg').Pool
const pool = new Pool({
  host: process.env.API_HOST,
  database: process.env.API_DB,
  user: process.env.API_USR,
  password: process.env.API_PWD,
  port: process.env.API_PORT
})


/**
* Insert Example initial info in database.
* This function uses [exports] for exposure.
* @private
* @param {json} request Body with Example info.
* @returns {json} Status from database query and Example.
*/
const createExample = (request, response) => {
  const { id_company, id_area, id_position } = request.body
  const id_executive = request.user.id
  if (!id_company) { throw 'Example is required (MW)'; }
  pool.query(`query of database') RETURNING "Id_Example"`, [id_example], (error1, results1) => {
    if (error1) {
      return response.status(400).send(error1)
    }
    return response.status(201).send({'Id_Candidate': results1.rows[0].Id_Example})
  })
}
