;
'use strict'
fs = require('fs')
const mongodb = require('../model/models')

const prueba = (req, res)=>{
    res.status(200).send('Hola api')
}
const añadirCategoria =(req,res)=>{
  console.log(req.body)
     mongodb.Categoria.create(req.body).then((data)=>{
         res.status(200)
         res.json('creadoexitosamente')
         console.log('creado')
     })
}
const añadirSubCategoria =(req,res)=>{
    const data = {
      cod_categoria: req.params.id,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion
    }
     mongodb.Subcategoria.create(data).then((data)=>{
         res.status(200)
         res.json('creadoexitosamente')
         console.log('creado')
     })
}
const getCategorias = async(req, res)=>{
    mongodb.Categoria.find({})
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
const getSubCategorias = async(req, res)=>{
  mongodb.Subcategoria.find({
    cod_categoria:  req.params.id
  })
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
    mongodb.Categoria.findOneAndRemove({
        _id: req.params.id
  }).then(()=>{
    mongodb.Subcategoria.findOneAndDelete({
      cod_categoria: req.params.id
    },(err, doc)=>{
      if(err){
        res.status(404)
      }else{
        res.json('eliminado exitosamente')
        console.log('eliminadoss')
      }
    }) 
 
  }
 
    

  )

}
const deleteSubCategoria =async(req, res)=>{
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
    getSubCategorias,
    añadirSubCategoria,
    deleteSubCategoria,
    añadirCategoria,
    deleteCategoria,
}