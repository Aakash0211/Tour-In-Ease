 let config={
    MONGO_URI:process.env.MONGO_URI,
    PORT:process.env.PORT||3000,
    APIURL:process.env.APIURL,
    JWT_SECRET_TOKEN:process.env.JWT_SECRET_TOKEN,
    JWT_EXPIRY_TIME:process.env.JWT_EXPIRY_TIME,
    SALT_ROUNDS:process.env.SALT_ROUNDSz,

 }

 module.exports=config