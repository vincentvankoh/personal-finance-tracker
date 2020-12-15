const express = require('express')

const dataController = require('../Controllers/dataController')

const router = express.Router()




router.get('/', dataController.findAll, (req, res) =>{
    res.status(200).send()
})


module.exports = router