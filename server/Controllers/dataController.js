const db = require('../Models/FinancialModel')



const dataController = {}

dataController.findAll = (req, res, next) => {
    let query = "select * from Data"
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


module.exports = dataController