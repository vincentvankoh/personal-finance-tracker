const express = require('express')

const userController = require('../Controllers/userController')

const router = express.Router()




router.get('/', userController.findAll, (req, res) =>{
    res.status(200).json(res.locals.users)
})


module.exports = router