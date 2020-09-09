;
'use strict'

    fs = require('fs')
const { ok } = require('assert')
const { json } = require('body-parser')
const mongodb = require('../model/models')
const { mongo } = require('../config/db')

const prueba = (req, res)=>{
    res.status(200).send('Hola api')
}
const getCategorias = async(req, res)=>{
    console.log('cate')
    mongodb.Subcategoria.find({})
    .populate({path: "categoria"})
    .exec((err,doc)=>{
      if(err){
        res.status(404)
        res.json('no hay publicaciones activas')
      }else if(doc.length===0){
        res.status(404)
        res.json('no hay publicaciones activas')
      }else{
        res.status(200)
        res.json(doc)
      }
    })
}
const deleteCategoria =async(req, res)=>{
    mongodb.Categoria.remove({
        _id: req.params.id
    
  }).then(()=>{
    res.status(200)
    res.json('eliminado exitosamente')
    console.log('exito')
  })
}
module.exports={
    prueba,
    getCategorias,
  
    deleteCategoria,
 
}