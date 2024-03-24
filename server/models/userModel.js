const { default: mongoose } = require('mongoose')

const schema=require('mongoose').Schema

const user_Schema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String,
    age:Number,
    city:String,
    disable:Boolean
},{strict:false})


const user_model=mongoose.model('user_model',user_Schema,"users");


module.exports={
    user_model
}