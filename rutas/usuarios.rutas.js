;
'use strict'
const express = require('express')
const api = express.Router(),
usuarioControl = require('../controles/usuarios.control')

api.get('/prueba', usuarioControl.prueba)
api.get('/verCategorias',usuarioControl.getCategorias)

api.post('/deleteUser', usuarioControl.deleteCategoria)


module.exports = api