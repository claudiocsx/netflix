const mongoose = require('mongoose')

const usuario = mongoose.model('usuario', {
    nome: String,
    email: String,
    senha: String,
    
})
 module.exports = usuario