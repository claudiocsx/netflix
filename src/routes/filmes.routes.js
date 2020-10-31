const express = require('express')
const router = express.Router()
const Filmes = require('../models/filmes')

//recupera todos os registros
router.get('/',async (req, res) => {
    try{
        const filmes = await Filmes.find({})
        res.json({error: true, filmes:filmes})
    }catch(err){
        res.json({error: true, message: err.message })
    }
    
})

// pega somente o resgistro co id
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const filmes = await Filmes.findById(id)
        res.json({error: false, filmes})
    }catch(err) {
        res.json({ error: true, message: err.message})
    }


    
})

// criar um registro
router.post('/', async (req, res) => {
    try{
        const filmes= req.body
        const response = await new Filmes(filmes).save()
        res.json({error: false, filmes: response})
    }catch(err){
        res.json({error: true, message: err.message })
    }
    
})

//atualicar resgistro
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const novo_filmes = req.body

        const filmesAtualizados = await Filmes.findByIdAndUpdate(id, novo_filmes)
        res.json({error: false, filmesAtualizados})
    }catch(err){res.json({error: true, message: err.message })}
    
    
})
//deleta registro
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Filmes.findByIdAndDelete(id)
        res.json({error: false})
    }catch (err) {res.json({error: true, message: err.message})}
    
})







module.exports = router