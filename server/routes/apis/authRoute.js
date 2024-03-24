const router = require('express').Router();
const { signUp, logIn } = require('../../controllers/authController')


router.post('/signUp', signUp)
router.post('/login', logIn)