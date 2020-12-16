const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()

const userRouter = require('./Routes/userRouter')
const dataRouter = require('./Routes/dataRouter')
const authRouter = require('./Routes/authRouter')

const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use('/user', userRouter)
app.use('/data', dataRouter)
app.use('/auth', authRouter);


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
  },
  (accessToken, refreshToken, profile, done) =>{
	  console.log(profile)
	  console.log('passport function')
  }
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
));



app.use(cors)
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.get('/', (req, res) =>
	res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
);

app.listen(3000, (err) => {
	if (err) return console.log(err);
	console.log('Server running and listening on 3000');
});
