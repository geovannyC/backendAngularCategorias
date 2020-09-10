;
'use strict'
fs = require('fs')
const mongodb = require('../model/models')

const prueba = (req, res)=>{
    res.status(200).send('Hola api')
}
const añadirCategoria =(req,res)=>{
  console.log(req.body)
     mongodb.Subcategoria.create(req.body).then((data)=>{
         res.status(200)
         res.json('creadoexitosamente')
         console.log('creado')
     })
}
const getCategorias = async(req, res)=>{
    mongodb.Subcategoria.find({})
    .populate({path: "categoria"})
    .exec((err,doc)=>{
      if(err){
        res.status(404)
        res.json('no hay data')
      }else if(doc.length===0){
        res.status(200)
        res.json('no hay data')
      }else{
        res.status(200)
        res.json(doc)
      }
    })
}
const deleteCategoria =async(req, res)=>{
  console.log(req.params.id)
    mongodb.Subcategoria.findOneAndRemove({
        _id: req.params.id
  }).then(()=>{
    res.status(200)
    res.json('eliminado exitosamente')
    console.log('exito')
  }
     
    

  )
}
module.exports={
    prueba,
    getCategorias,
    añadirCategoria,
    deleteCategoria,
}