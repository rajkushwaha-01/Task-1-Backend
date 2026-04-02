const express = require('express')
const userIdentifire = require('../middleware/auth.middleware')

const postRouter = express.Router();



/**
 * @route post /api/post/jobs
 * @access Private
 * @description only loging user can create jobs.
 */

postRouter.post('/jobs' ,userIdentifire ,  )


module.exports = postRouter