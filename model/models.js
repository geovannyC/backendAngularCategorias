
'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var subcategoria = Schema({
    cod_categoria: mongoose.Schema.ObjectId,
    nombre: String,
    descripcion: String,
    fechaCreacion: String,
    
    
},
{ timestamps: true });
const categoria = Schema({
    descripcion: String
},
{timestamps: true})

const Subcategoria = mongoose.model('Subcategoria', subcategoria),
        
        Categoria = mongoose.model('categoria', categoria);
       
// Exportamos el modelo para usarlo en otros ficheros
module.exports = {
    Subcategoria,
    Categoria,
   
};