const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.cookie('id', '', {maxAge: 1}).redirect('/login')
})


module.exports = router
