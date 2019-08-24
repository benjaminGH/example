const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query/example.js')
const port = process.env.PORT || 3030
var path = require("path");
var cors = require('cors');

app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

 app.get('/', (request, response) => {
  response.json({ info: 'Khor API HEX-Lala BkE Ready (v.1.02.05)' })
})


/**
* Name of the action.
* {@link #crearExample}
* @name post/Example
* @param {json} request Body with Example.
* @returns {json} Status from database query and Example inserted.
* @example curl --data "example=3" --header "Content-Type: application/x-www-form-urlencoded&x-access-token: eyJhbGciOi.NjMyMfQ.HuOIfy40Hw" -X POST http://localhost:3030/Example
*/
app.post('/Example', Auth.verifyToken, db.createExample)
