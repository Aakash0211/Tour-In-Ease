const express=require('express')
require('dotenv').config()

const dbconnect=require('./utils/db')
dbconnect.connectToDb()
const app=express()

const config=require('./config')
const routes=require('./routes')
const cors=require('cors')
const helmet  = require('helmet')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const logger=require('./utils/logger')


//middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.use(cors())
app.use(helmet())

//routes
app.use(routes)

//server listening to port
app.listen(config.PORT,()=>{
  console.log(`server is running on ${config.PORT}`)
})




// server.close()