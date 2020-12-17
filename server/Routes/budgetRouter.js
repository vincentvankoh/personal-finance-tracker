const express = require('express')

const budgetController = require('../Controllers/budgetController')

const router = express.Router()




router.get('/', budgetController.findByUser, (req, res) =>{
    res.status(200).json(res.locals.budget)
})


router.post('/add', budgetController.add, (req,res) =>{
    res.status(200).send()
})


module.exports = router