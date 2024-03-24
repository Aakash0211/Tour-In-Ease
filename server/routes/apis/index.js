const router=require('express').Router()

//import routes

const authRouter=require('./authRoute')
const dashboardRouter=require('./dashboardRoute')
const agencyRouter=require('./agencyRoute')
const tourRouter=require('./tourRoute')
const profileRouter=require('./profileRoute')
router.use('/',authRouter),
router.use('/dashboard',dashboardRouter),
router.use('/agency',agencyRouter),
router.use('/tour',tourRouter),
router.use('/profile',profileRouter)
module.exports=router