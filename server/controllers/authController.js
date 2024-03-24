const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')
const config=require('../config')
const bcrypt=require('bcrypt')
const logger=require('../utils/logger')
const auth=require('../middleware/authMiddleware')
 const signUp=async(req,res)=>{
    try{
      let {email,password,username}=req.body;
  
        //check if user exists in db
         let user=await userModel.user_model.findOne({$or:[{username:username},{email:email}]})

         if(!user){
      
         //hash the password
          let securePassword= bcrypt.hash(password,config.SALT_ROUNDS)
            // add user data in db
           let result=await userModel.user_model.insertMany({
            email:email,
            password:securePassword,
            username:username,
           })
            res.status(200).send(result); 
            }
            else{
               res.status(400).send("user already exists")
            }
         }
    catch(err){  
      logger.error(err)
      res.status(500).send("An error occurred while signing up")
      
    }


}
const logIn=async(req,res)=>{
   try{
      let {usernameOrEmail,password}=req.body;
      let user=await userModel.user_model.findOne({$or:[{username:usernameOrEmail},{email:usernameOrEmail}]})
      //check if user with mail or name exists
      if(user){
        //decrypt and  compare password of the user
       let passwordMatch= bcrypt.compare(password,user.password)
       if(passwordMatch){
      //sign jwt token
     let token= jwt.sign(user._id,config.JWT_SECRET_TOKEN,{expiresIn:config.JWT_EXPIRY_TIME})
     res.status(200).send({user,token})}
     else{
      res.status(401).send("Password is Incorrect")
     }
       }
         else{
            res.status(401).send("User is not registered")
         }
      // check if user exists or not in db
   }
   catch(err){
      logger.error(err)
      res.status(500).send("An error occurred while signing up")
   }
}

module.exports={signUp,logIn}