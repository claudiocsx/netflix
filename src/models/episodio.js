const mongoose = require('mongoose')

const episodeo = mongoose.model('epsodeo', {
    temporada_id: {
        type: mongoose.Types.ObjectId,
        ref: 'temporada'
    },
    titulo: String,
    descricao: String,
    numero: Number,
    capa: String,
})
 module.exports = episodeo