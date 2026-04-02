const express = require('express')

const postRouter = express.Router();



/**
 * @route post /api/post/jobs
 * @access Private
 * @description only loging user can create jobs.
 */


postRouter.post('/post')