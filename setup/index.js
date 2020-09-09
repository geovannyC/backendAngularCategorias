;
'use strict'
const env = require('dotenv').config(),
      app = require('./app')
      port = process.env.PORT  || 3000
app.listen(port, (err)=>{
    if(!err){
        console.log(`Funciona en el puerto ${port}`)
    }else{
        console.log(err)
    }
})
