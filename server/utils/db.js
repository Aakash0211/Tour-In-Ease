const mongoose=require("mongoose")
const config=require("../config")
const logger=require('./logger')

const connectToDb=()=>{
    
 mongoose.connect(config.MONGO_URI).then(()=>{
    console.log("Connected to Mongodb")
}).catch((error)=>{
     logger.error(error)
})
}

//redis

//cassandra

//elastic search

//cdn

module.exports={connectToDb}