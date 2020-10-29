const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

mongoose.connect('mongodb+srv://claudio:claudio@cluster0.ivc1j.gcp.mongodb.net/netflix?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const routes = require('./src/routes/filmes.routes')


app.use(morgan('dev'))
app.use('/', routes)

app.listen(3333,() => {
    console.log('meu ser verddor esta funcionado')
})