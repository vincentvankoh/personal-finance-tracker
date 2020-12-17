const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const passport = require('passport');
const cookieParser = require('cookie-parser')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session')
require('dotenv').config()
const db = require('./Models/FinancialModel')
const userRouter = require('./Routes/userRouter')
const dataRouter = require('./Routes/dataRouter')
const authRouter = require('./Routes/authRouter')
const loginRouter = require('./Routes/loginRouter')

const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieSession({maxAge: 24*60*60*1000, keys: ['kasjhfaksj']}))
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: ['kfhaskfh'] }))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
app.use(cors())
app.use('/user', userRouter)
app.use('/data', dataRouter)
app.use('/auth', authRouter)
app.use('/logout',loginRouter)



passport.serializeUser((user,done) =>{
	// console.log('inside serialize',user)
	done(null, user.id)
})

passport.deserializeUser((id,done) =>{
	// console.log('inside desserialize',id)
	done(null, 10)
})


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	// once the user clicks on one of the accounts they are redirected to this link
    callbackURL: "/auth/google/redirect"
  },
  (accessToken, refreshToken, profile, done) =>{
	//   console.log(profile)
		// console.log('passport function')

		//save user profile to users table
		let userName = profile.displayName;
		let pass = profile.id;
		// console.log(userName, pass)
		//check if pass(unique id exist), if it does do nothing.
		//if unique id doesn't insert one in db
		let sqlQuery = "select * from users where password=\'"+pass+"\'";
		db.query(sqlQuery, (err, response) => {
			if(err) {
				console.log(err.stack)
				
			} else {
				if(response.rows.length === 0) {
					//user doesn't exist, insert in db.
					let createUser = `insert into Users (Username,Password) values ('${userName}', '${pass}') returning *`;
					db.query(createUser, (err, response) => {
						if(err) {
							console.log(err.stack)
							
						} else {
							// console.log(response)
							//if no err running query, new user should be created
							done(null,response.rows[0])
							// console.log('USER MADE')
						}
					})
				} else {
					// console.log('UNIQUE USER IS FOUND')
					//if unique pass is found, redirect
					done(null, response.rows[0])
				}
			}
		})
  }
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
));




app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.get('/', (req, res) =>
	res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
);

//global internal error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, (err) => {
	if (err) return console.log(err);
	console.log('Server running and listening on 3000');
});