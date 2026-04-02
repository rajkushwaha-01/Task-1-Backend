const express = require('express')
const authRoutes = require('../controllers/auth.controller')

const authRouter = express.Router()


/**
 * POST /api/auth/register
 * @public 
 */

authRouter.post('/register' , authRoutes.registerUser )

/**
 * post /api/auth/login
 */
authRouter.post('/login' , authRoutes.loginUser)




module.exports = authRouter