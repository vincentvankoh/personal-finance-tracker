const db = require('../Models/FinancialModel')



const budgetController = {}



budgetController.findByUser = (req, res, next) => {
    let user = req.query.user
    let query = `select * from budget where user_id = $1`
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


budgetController.add = (req,res,next) =>{
    let query = 'insert into budget (user_id, amount, category, dates) values ($1, $2, $3, $4)'
    let params = [req.body.user, req.body.amount, req.body.category, req.body.date]

    db.query(query, params, (err, result) => {
        if(err) {
            console.log(err)
            return next()
        } else {
            console.log('added into budget')
            return next()
        }
    })

}


module.exports = budgetController