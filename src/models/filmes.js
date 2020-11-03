const mongoose = require('mongoose')

const Filmes = mongoose.model('Filmes', {
    titulo: String,
    tipo: String,
    capa: String,
    logo: String,
    thumb: String,
    descricao: String,
    genero: Array,
    elenco: Array,
    cenas_momentos: Array,
})
 module.exports = Filmes