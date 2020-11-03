const database = require('../services/database')
const Filme = require('../models/filmes')
const temporada = require('../models/Temporada')
const Episodeo = require('../models/episodio')





const addTemporadasEpisodeos = async () => {
    try{
        const series = await Filme.find({ tipo: 'serie'}).select('_id')
        for ( let serie of series ) {
            console.log(`Filme ${serie}------`)
            const numTemporadas = Math.floor(Math.random()*5 ) + 1;
            for (let i = 1; i <= numTemporadas; i++) {
                console.log(`inserindo temporada ${i} de ${numTemporadas}`)
                const temporadas = await new temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i} `
                }).save()
                const numEpisodeos = Math.floor(Math.random()*5 ) + 1
                for(let x = 1; x<= numEpisodeos; x++ ){
                    console.log(`inserindo episodeo ${x} de ${numEpisodeos}`)  
                    await new Episodeo({
                        temporada_id: temporadas._id,
                        titulo: `Episodeos ${x}`,
                        num: x,
                        descricao: 'primei projeto de filmes no nodejs',
                        capa: 'https://picsum.photos/200/300',
                    })  
                }
            }
        }
       console.log('Final do script')
    }catch(err) {
        console.log(err.message)
    }
}
addTemporadasEpisodeos()