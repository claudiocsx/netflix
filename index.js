const express = require('express')

const morgan = require('morgan')
const bodyParser = require('body-parser')
const database = require('./src/services/database')
const cors = require('cors')
const app = express()



const filmeroutes = require('./src/routes/filmes.routes')
const usuarioroutes = require('./src/routes/usuarios.routes')
const episodeosroutes = require('./src/routes/episodeos.routes')


app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))


app.use('/', filmeroutes)
app.use('/usuario', usuarioroutes)
app.use('/episodeo', episodeosroutes)


app.listen(3333,() => {
    console.log('meu ser verddor esta funcionado')
})