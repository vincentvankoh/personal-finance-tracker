const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    console.log('hey')
    res.cookie('id', '', {maxAge: 1}).redirect('/login')
})




module.exports = router
