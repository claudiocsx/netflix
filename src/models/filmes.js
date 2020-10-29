const mongoose = require('mongoose')

const Filmes = mongoose.model('Filmes', {
    titulo: {
      type: String,
      required: true,
    },  
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object],

})
 module.exports = Filmes