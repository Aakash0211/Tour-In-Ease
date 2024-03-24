const express=require('express')
const router=express.Router()

const apis=require('./apis')



router.use('/',apis),
router.use('/',(req,res)=>{

     res.send("Page Not Found").status(404)

})
module.exports=router