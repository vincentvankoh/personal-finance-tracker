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
            res.locals.allData = result.rows
            return next()
        }

    })

}

dataController.findByUser = (req, res, next) => {
    let user = req.body.user
    let query = `select * from Data where user_id = $1`
    let params = [user]
    db.query(query, params, (err, result) => {
        if(err) {
            console.log(err)
            return next()
        } else {
            res.locals.userData = result.rows
            return next()
        }
    })
}


dataController.findByCategory = (req,res,next) =>{

    let query = "select * from Data where user_id = $1 and category = $2"
    let params = [req.body.user, req.body.category]
    
    
    db.query(query, params, (err, result) =>{
        if(err){
            console.log(err)
            return next()
        }
        else{
            if(result.length === 0){
                console.log('There were no items in the category')
            }
            else{
                res.locals.categoryItems = result.rows
                // console.log(result)
                return next()
            }
        }

    })

}

dataController.findByGreatest= (req,res,next) =>{

    let query = "select * from Data where user_id = $1 order by amount desc"
    let params = [req.body.user]
    
    
    db.query(query, params, (err, result) =>{
        if(err){
            console.log(err)
            return next()
        }
        else{
            if(result.length === 0){
                console.log('There were no items in the category')
            }
            else{
                res.locals.greatest = result.rows
                // console.log(result)
                return next()
            }
        }

    })

}

dataController.add = (req,res,next) =>{

    let query = "insert into Data (user_id, amount, category, dates) values ($1,$2,$3,$4)"
    let params = [req.body.user,req.body.amount, req.body.category, req.body.date,]
    
    
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