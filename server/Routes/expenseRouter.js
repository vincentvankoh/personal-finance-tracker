const express = require('express')

const expenseController = require('../Controllers/expenseController')

const router = express.Router()




router.get('/', expenseController.findByUser, (req, res) =>{
    res.status(200).json(res.locals.budget)
})


router.post('/add', expenseController.add, (req,res) =>{
    res.status(200).send()
})

// router.post('/delete', expenseController.delete, (req,res) => {
//   res.status(200).send()
// })

module.exports = router