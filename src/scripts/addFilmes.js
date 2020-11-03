const database = require('../services/database')

const Filmes = require('../models/filmes')
const filmesJSON = require('../data/filme.json')

const addFimes = async () => {
    try{
        for (let filmes of filmesJSON){
            console.log(`inserido ${filmes.titulo}`)
            await new Filmes(filmes).save()
        }
        console.log('final do script')
    }catch(err) {
        console.log(err.message)
    }
}
addFimes()