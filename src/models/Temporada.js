const mongoose = require('mongoose')

const temporada = mongoose.model('temporada', {
    filme_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Filmes'

    },
    titulo: String,
    
})
 module.exports = temporada