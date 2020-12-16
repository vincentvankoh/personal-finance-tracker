const db = require('../Models/FinancialModel')



const userController = {}

userController.findAll = (req, res, next) => {
    let query = "select * from Users"
    let params = []

    db.query(query, params, (err, result) =>{
        if(err){
            console.log(err)
            return next()
        }
        else{
            console.log(result)
            return next()
        }

    })

}


module.exports = userController