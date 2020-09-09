;
'use strict'
const express = require('express'),
      bodyParser = require('body-parser'),
      connectDb = require('../config/db');
      var cors = require('cors');
const app = express(),
    usuarioRuta = require('../rutas/usuarios.rutas');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/', usuarioRuta)
app.use(cors({
    origin: 'http://localhost:4200/',
    
}))
module.exports = app