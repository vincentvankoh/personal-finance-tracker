const express = require('express')

const dataController = require('../Controllers/dataController')

const router = express.Router()




router.get('/', dataController.findAll, (req, res) =>{
    res.status(200).json(res.locals.allData)
})

router.get('/category', dataController.findByCategory,(req, res) =>{
    res.status(200).json(res.locals.categoryItems)
 })

 router.get('/greatest', dataController.findByGreatest,(req, res) =>{
    res.status(200).json(res.locals.greatest)
 })

 router.post('/add', dataController.add, (req,res) => {
     res.status(200).send()
 })

module.exports = router