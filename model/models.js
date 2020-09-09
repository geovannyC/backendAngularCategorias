'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var publib = Schema({
    cod_categoria: String,
    nombre: String,
    descripcion: String,
    fechaCreacion: String,
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: 'categoria',
    },
    
},
{ timestamps: true });
const categoria = Schema({
    descripcion: String,
},
{timestamps: true})

const Subcategoria = mongoose.model('Subcategoria', publib),
        
        Categoria = mongoose.model('categoria', categoria);
       
// Exportamos el modelo para usarlo en otros ficheros
module.exports = {
    Subcategoria,
    Categoria,
   
};