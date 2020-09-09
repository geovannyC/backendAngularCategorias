;
'use strict'
const express = require('express')
const api = express.Router(),
usuarioControl = require('../controles/usuarios.control')

api.get('/prueba', usuarioControl.prueba)
api.get('/verCategorias',usuarioControl.getCategorias)
api.post('/añadirCategoria', usuarioControl.añadirCategoria)
api.get('/deleteUser/:id', usuarioControl.deleteCategoria)


module.exports = api