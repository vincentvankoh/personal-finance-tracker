const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const userRouter = require('./Routes/userRouter')
const dataRouter = require('./Routes/dataRouter')

const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use('/user', userRouter)
app.use('/data', dataRouter)



app.use(cors)
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.get('/', (req, res) =>
	res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
);

app.listen(3000, (err) => {
	if (err) return console.log(err);
	console.log('Server running and listening on 3000');
});
