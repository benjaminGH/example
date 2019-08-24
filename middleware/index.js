const express = require('express');
const bodyParser = require('body-parser');
const dataFRONT = require('./dataFRONT');
var path = require("path");
const app = express();
const port = process.env.PORT || 5050;
var cors = require('cors');

app.use(cors());
app.use(express.static(__dirname));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'MW is ready  (v.1.00.00)' })
});
