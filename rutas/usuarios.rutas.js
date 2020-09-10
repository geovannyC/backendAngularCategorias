;
'use strict'
const express = require('express')
const api = express.Router(),
usuarioControl = require('../controles/usuarios.control')

api.get('/prueba', usuarioControl.prueba)
api.get('/verCategorias',usuarioControl.getCategorias)
api.get('/versubcategorias/:id',usuarioControl.getSubCategorias)
api.post('/addcategoria', usuarioControl.añadirCategoria)
api.post('/addsubcategoria/:id', usuarioControl.añadirSubCategoria)
api.get('/deletecategoria/:id', usuarioControl.deleteCategoria)
api.get('/deletesubcategoria/:id', usuarioControl.deleteSubCategoria)


module.exports = api