const express  = require('express');
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const jobRouter = require('./routes/job.route')

const app = express();

app.use(express.json());
app.use(cookieParser())


app.use('/api/auth' , authRouter)
app.use('/api/post' ,jobRouter)



module.exports = app;