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
router.get('/:id', (req, res) => {
const id = req.params.id
    res.json({mensagem: `pega somente registro com id: ${id}`})
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
router.put('/:id',(req, res) => {
    const Filmes = req.params.id
    res.json({mensagem: `Atualizar registro com id: ${id}`})
})
//deleta registro
router.delete('/:id',(req, res) => {
    res.json({messagem: "deleta registro com id: ${id}"})
})







module.exports = router