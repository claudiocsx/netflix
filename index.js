const express = require('express')

const app = express()

app.get('/',(req, res) => {
    //regra de negocio
    res.json({messagem:'Rota fucionando'})
})

app.listen(3333,() => {
    console.log('meu ser verddor esta funcionado')
})